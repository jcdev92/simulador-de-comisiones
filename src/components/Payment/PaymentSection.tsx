import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { resetSimulationStore } from '../../stores/simulationStore';
import { setMessage } from '../../stores/messageStore';

const API_KEY = 'o0z8y85rjdx28iqef32f4mrl6e56b71742437588342';
const API_BASE_URL = 'https://my.disruptivepayments.io/api';

interface PaymentData {
  address: string;
  network: string;
  fundsGoal: number;
  smartContractAddress: string;
}

interface PaymentStatus {
  address: string;
  amountCaptured: number;
  smartContractAddress: string;
  smartContractSymbol: string;
  status: string;
  fundStatus: string;
  processStep: number;
  processTotalSteps: number;
  fundsGoal: number;
  fundsExpirationAt: number;
  currentBalance: number;
  forwardAddresses: string[];
  timeStart: number;
  timeEnd: number;
  timeDelta: number;
}

export const PaymentSection: React.FC<{ fundsGoal: number }> = ({ fundsGoal }) => {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDepositNow = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/payments/single`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Client-API-Key': API_KEY,
        },
        body: JSON.stringify({
          network: 'BSC',
          fundsGoal: fundsGoal,
          smartContractAddress: '0x7cDb78AD26670D5bc4A35504b0e5127909D4B35b',
        }),
      });

      const data = await res.json();
      if (res.ok && data.data) {
        setPaymentData(data.data);
      } else {
        setMessage({ text: data?.errorMessage || "Error creating payment", type: "error" });
        console.error('Error creating payment', data);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error en Depositar Ahora', error);
        setMessage({ text: error.message || "Error en Depositar Ahora", type: "error" });
      } else {
        console.error('Error en Depositar Ahora', error);
        setMessage({ text: "Error en Depositar Ahora", type: "error" });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCheckPayment = async () => {
    if (!paymentData || !paymentData.address) return;
    setLoading(true);
    try {
      const res = await fetch(
        `${API_BASE_URL}/payments/status?network=BSC&address=${paymentData.address}`,
        {
          method: 'GET',
          headers: {
            'Client-API-Key': API_KEY,
          },
        }
      );

      const data = await res.json();
      if (res.ok && data.data) {
        setPaymentStatus(data.data);
        setModalVisible(true);
      } else {
        console.error('Error checking payment status', data);
        setMessage({ text: data?.errorMessage || "Error checking payment status", type: "error" });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error en Revisar Pago', error);
        setMessage({ text: error.message || "Error en Revisar Pago", type: "error" });
      } else {
        console.error('Error en Revisar Pago', error);
        setMessage({ text: "Error en Revisar Pago", type: "error" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 w-5/6 bg-gradient-to-r bg-sky-600 border border-gray-300 rounded-2xl shadow-md">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      )}
      <div className="w-full flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-around items-center">
        <button
          onClick={handleDepositNow}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition disabled:opacity-50"
          disabled={loading}
        >
          Depositar Ahora
        </button>

        <button
          onClick={handleCheckPayment}
          className="px-4 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition disabled:opacity-50"
          disabled={loading || !paymentData}
        >
          Revisar Pago
        </button>

        <button
          onClick={() => {
            resetSimulationStore();
            setPaymentData(null);
            setPaymentStatus(null);
          }}
          className="px-4 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition"
        >
          Resetear
        </button>
      </div>
      {paymentData && paymentData.address && (
        <div className="mt-4 flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Escanea este código QR para depositar</h3>
          <QRCodeCanvas value={paymentData.address} size={200} />
          <p className="mt-2 text-sm text-gray-700 break-words max-w-full overflow-hidden text-ellipsis">
            Dirección: {paymentData.address}
          </p>
        </div>
      )}

      {modalVisible && paymentStatus && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-lg w-full">
            <h2 className="text-xl font-medium mb-4">Estado del Pago</h2>
            <pre className="bg-gray-100 p-2 rounded text-sm break-words max-w-full overflow-hidden text-ellipsis">
              {JSON.stringify(paymentStatus, null, 2)}
            </pre>
            {paymentStatus.amountCaptured > 0 && (
              <p className="mt-2 text-green-600 font-bold">
                ¡El pago ha sido recibido!
              </p>
            )}
            {paymentStatus.address && (
              <p className="mt-2 text-sm text-gray-700 break-words max-w-full overflow-hidden text-ellipsis">
                Dirección: {paymentStatus.address}
              </p>
            )}
            {paymentStatus.smartContractAddress && (
              <p className="mt-2 text-sm text-gray-700 break-words max-w-full overflow-hidden text-ellipsis">
                Smart Contract: {paymentStatus.smartContractAddress}
              </p>
            )}
            <button
              onClick={() => setModalVisible(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
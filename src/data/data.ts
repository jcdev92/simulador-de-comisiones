export const initialState = {
    // Datos entren del formulario de simulación
    simulationForm: {
      capitalSeed: 0,            // Capital semilla ingresado por el usuario (número)
      duration: 3,               // Duración elegida (3, 6, 9 o 12 meses; valor numérico)
      benefitType: 'simple',     // Tipo de beneficio: 'simple' o 'compound'
    },
    // Resultado de la simulación mes a mes
    simulationResult: {
      // Aquí se guardará un arreglo con los cálculos de cada mes, por ejemplo:
      // { month: 1, capital: 1000, gain: 10, accumulated: 1010 }
      monthData: [],
      totalAccumulated: 0,       // Capital semilla más ganancias totales
      fee: 0,                    // Fee calculado (porcentaje aplicado sobre total acumulado)
      net: 0,                    // Monto final a recibir (total acumulado - fee)
    },
    // Datos relacionados con el proceso de pago vía API
    paymentData: {
      address: '',               // Dirección generada para el QR de pago
      network: 'BSC',            // Red de la criptomoneda (constante en este caso)
      fundsGoal: 0,              // Monto a pagar en USD (se puede inicializar igual que la inversión)
      smartContractAddress: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', // Dirección del token
      accounts: [],              // Cuentas relacionadas a la transacción (para el QR)
      timeStart: null,           // Tiempo de inicio de la transacción
      timeEnd: null,             // Tiempo de culminación
      timeDelta: null,           // Diferencia entre inicio y fin en ms
      // Datos para el seguimiento del pago
      amountCaptured: 0,         // Monto efectivamente recibido
      status: 'WAITING',         // Estado del pago (por ejemplo, 'WAITING', 'COMPLETED')
      fundStatus: 'WAITING',     // Estado adicional del fondo
      processStep: 0,            // Paso actual en el proceso
      processTotalSteps: 0,      // Total de pasos del proceso
      fundsExpirationAt: null,   // Hora de expiración del pago
      currentBalance: 0,         // Balance actual en la wallet
      forwardAddresses: [],      // Direcciones a las que se pueda derivar el pago
    },
    // Estados de la UI para manejo de cargas y error
    uiState: {
      isSimulating: false,       // Bandera para mostrar spinner o similar mientras simulas
      isPaymentLoading: false,   // Bandera para el estado de carga del pago
      showPaymentModal: false,   // Para alternar la visibilidad del modal de pago
      error: null,               // Mensajes de error, en caso de algún fallo
    },
  };
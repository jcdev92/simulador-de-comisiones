export interface SimulationForm {
    capitalSeed: number;       // Capital semilla ingresado por el usuario
    duration: number;          // Duración elegida (en meses)
    benefitType: 'simple' | 'compound'; // Tipo de beneficio
}

export interface MonthData {
    month: number;             // Número del mes
    capital: number;           // Capital inicial del mes
    gain: number;              // Ganancia del mes
    accumulated: number;       // Capital acumulado al final del mes
}

export interface SimulationResult {
    monthData: MonthData[];    // Datos de cada mes
    totalAccumulated: number;  // Capital semilla más ganancias totales
    fee: number;               // Fee calculado
    net: number;               // Monto final a recibir
}

export interface PaymentData {
    address: string;           // Dirección generada para el QR de pago
    network: string;           // Red de la criptomoneda
    fundsGoal: number;         // Monto a pagar en USD
    smartContractAddress: string; // Dirección del token
    accounts: string[];        // Cuentas relacionadas a la transacción
    timeStart: number | null;  // Tiempo de inicio de la transacción
    timeEnd: number | null;    // Tiempo de culminación
    timeDelta: number | null;  // Diferencia entre inicio y fin en ms
    amountCaptured: number;    // Monto efectivamente recibido
    status: 'WAITING' | 'COMPLETED'; // Estado del pago
    fundStatus: 'WAITING' | 'COMPLETED'; // Estado adicional del fondo
    processStep: number;       // Paso actual en el proceso
    processTotalSteps: number; // Total de pasos del proceso
    fundsExpirationAt: number | null; // Hora de expiración del pago
    currentBalance: number;    // Balance actual en la wallet
    forwardAddresses: string[]; // Direcciones a las que se pueda derivar el pago
}

export interface UIState {
    isSimulating: boolean;     // Bandera para mostrar spinner
    isPaymentLoading: boolean; // Bandera para el estado de carga del pago
    showPaymentModal: boolean; // Visibilidad del modal de pago
    error: string | null;      // Mensajes de error
}

export interface InitialState {
    simulationForm: SimulationForm; // Datos del formulario de simulación
    simulationResult: SimulationResult; // Resultado de la simulación
    paymentData: PaymentData;       // Datos relacionados con el pago
    uiState: UIState;               // Estados de la UI
}

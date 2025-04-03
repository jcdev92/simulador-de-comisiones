import { Store } from '@tanstack/store';
import { initialState } from '../data/data';

// Crear el store con el estado inicial
export const simulationStore = new Store({
    state: initialState,
    actions: {
        // Acción para actualizar el formulario de simulación
        updateSimulationForm: (state: typeof initialState, payload: Partial<typeof initialState['simulationForm']>) => {
            state.simulationForm = { ...state.simulationForm, ...payload };
        },
        // Acción para actualizar el resultado de la simulación
        updateSimulationResult: (state: typeof initialState, payload: Partial<typeof initialState['simulationResult']>) => {
            state.simulationResult = { ...state.simulationResult, ...payload };
        },
        // Acción para actualizar los datos de pago
        updatePaymentData: (state: typeof initialState, payload: Partial<typeof initialState['paymentData']>) => {
            state.paymentData = { ...state.paymentData, ...payload };
        },
        // Acción para actualizar el estado de la UI
        updateUIState: (state: typeof initialState, payload: Partial<typeof initialState['uiState']>) => {
            state.uiState = { ...state.uiState, ...payload };
        },
    },
});

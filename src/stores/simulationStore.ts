import { Store } from '@tanstack/store';
import { initialState } from '../data/data';

export const simulationStore = new Store(initialState);

export const updateSimulationForm = (
    payload: Partial<typeof initialState.simulationForm>
) => {
    simulationStore.setState((prevState) => ({
        ...prevState,
        simulationForm: {
            ...prevState.simulationForm,
            ...payload,
        },
    }));
};

export const updateSimulationResult = (
    payload: Partial<typeof initialState.simulationResult>
) => {
    simulationStore.setState((prevState) => ({
        ...prevState,
        simulationResult: {
            ...prevState.simulationResult,
            ...payload,
        },
    }));
};

export const updatePaymentData = (
    payload: Partial<typeof initialState.paymentData>
) => {
    simulationStore.setState((prevState) => ({
        ...prevState,
        paymentData: {
            ...prevState.paymentData,
            ...payload,
        },
    }));
};

export const updateUIState = (
    payload: Partial<typeof initialState.uiState>
) => {
    simulationStore.setState((prevState) => ({
        ...prevState,
        uiState: {
            ...prevState.uiState,
            ...payload,
        },
    }));
};

export const resetSimulationStore = () => {
    simulationStore.setState(() => initialState);
  };
  
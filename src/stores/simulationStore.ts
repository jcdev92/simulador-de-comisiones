// stores/simulationStore.ts
import { Store } from '@tanstack/store';
import { initialState } from '../data/data';

export const simulationStore = new Store({
    state: initialState,
});

export const updateSimulationForm = (
    payload: Partial<typeof initialState.simulationForm>
) => {
    simulationStore.setState((prevState) => ({
        ...prevState,
        simulationForm: { ...prevState.state.simulationForm, ...payload },
    }));
};

export const updateSimulationResult = (
    payload: Partial<typeof initialState.simulationResult>
) => {
    simulationStore.setState((prevState) => ({
        ...prevState,
        simulationResult: { ...prevState.state.simulationResult, ...payload },
    }));
};

export const updatePaymentData = (
    payload: Partial<typeof initialState.paymentData>
) => {
    simulationStore.setState((prevState) => ({
        ...prevState,
        paymentData: { ...prevState.state.paymentData, ...payload },
    }));
};

export const updateUIState = (
    payload: Partial<typeof initialState.uiState>
) => {
    simulationStore.setState((prevState) => ({
        ...prevState,
        uiState: { ...prevState.state.uiState, ...payload },
    }));
};
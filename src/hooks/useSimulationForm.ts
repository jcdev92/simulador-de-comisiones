import { useSyncExternalStore } from 'react';
import { simulationStore } from '../stores/simulationStore';

export function useSimulationForm() {
  return useSyncExternalStore(
    simulationStore.subscribe,
    () => simulationStore.state.state.simulationForm 
  );
}
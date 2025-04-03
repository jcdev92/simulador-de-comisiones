import { useMemo } from 'react';

export interface SimulationForm {
  capitalSeed: number;
  duration: number;
  benefitType: 'simple' | 'compound';
}

const DEFAULT_INTEREST_RATE = 0.1;

export const useCalculations = (
  simulationForm: SimulationForm,
  interestRate: number = DEFAULT_INTEREST_RATE
): string[][] => {
  return useMemo(() => {
    const rows: string[][] = [];
    let accumulatedBalance: number;

    if (simulationForm.benefitType === 'simple') {
      const capitalBase = simulationForm.capitalSeed;
      const monthlyGain = capitalBase * interestRate;
      accumulatedBalance = capitalBase;
      for (let month = 1; month <= simulationForm.duration; month++) {
        accumulatedBalance += monthlyGain;
        rows.push([
          month.toString(),                
          capitalBase.toFixed(2),            
          monthlyGain.toFixed(2),            
          accumulatedBalance.toFixed(2),     
        ]);
      }
    } else if (simulationForm.benefitType === 'compound') {
      accumulatedBalance = simulationForm.capitalSeed;
      for (let month = 1; month <= simulationForm.duration; month++) {
        const capitalBase = accumulatedBalance;
        const monthlyGain = capitalBase * interestRate;
        accumulatedBalance += monthlyGain;
        rows.push([
          month.toString(),
          capitalBase.toFixed(2),
          monthlyGain.toFixed(2),
          accumulatedBalance.toFixed(2),
        ]);
      }
    }
    return rows;
  }, [simulationForm, interestRate]);
};
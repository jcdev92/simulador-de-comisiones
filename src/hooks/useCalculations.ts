import { useMemo } from 'react';

export interface SimulationForm {
  capitalSeed: number;
  duration: number;
  benefitType: 'simple' | 'compound';
}

const DEFAULT_INTEREST_RATE = 0.01;

export const useCalculations = (
  simulationForm: SimulationForm
): string[][] => {
  return useMemo(() => {
    const rows: string[][] = [];
    let accumulatedBalance: number;

    let computedInterestRate: number;
    switch (simulationForm.duration) {
      case 3:
        computedInterestRate = 0.01;
        break;
      case 6:
        computedInterestRate = 0.02;
        break;
      case 9:
        computedInterestRate = 0.03;
        break;
      case 12:
        computedInterestRate = 0.04;
        break;
      default:
        computedInterestRate = DEFAULT_INTEREST_RATE;
    }

    if (simulationForm.benefitType === 'simple') {
      // En interés simple, la base es siempre el capital semilla
      const capitalBase = simulationForm.capitalSeed;
      const monthlyGain = capitalBase * computedInterestRate;
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
        const monthlyGain = capitalBase * computedInterestRate;
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
  }, [simulationForm]);
};
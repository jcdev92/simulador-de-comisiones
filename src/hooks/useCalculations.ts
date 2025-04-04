import { useMemo } from 'react';

export interface SimulationForm {
  capitalSeed: number;
  duration: 3 | 6 | 9 | 12 | 0;  // agregamos 0 para el caso “no seleccionado”
  benefitType: 'simple' | 'compound';
}

export function useCalculations(simulationForm: SimulationForm) {
  return useMemo(() => {
    const { capitalSeed, duration, benefitType } = simulationForm;
    const numericCapitalSeed = Number(capitalSeed) || 0;


    if (numericCapitalSeed <= 0) {
      return {
        calculatedRows: [["1", "0.00", "0.00", "0.00"]],
        fee: "0.00",
        net: "0.00",
      };
    }


    const monthlyPercentages: Record<number, number> = {
      3: 1,
      6: 2,
      9: 3,
      12: 4,
    };


    const percentage = monthlyPercentages[duration];
    if (percentage === undefined) {

      return {
        calculatedRows: [["1", numericCapitalSeed.toFixed(2), "0.00", numericCapitalSeed.toFixed(2)]],
        fee: "0.00",
        net: numericCapitalSeed.toFixed(2),
      };
    }

    const monthlyRate = percentage / 100;

    const calculatedRows: string[][] = [];
    let finalAccumulated = 0;

    if (benefitType === 'simple') {
      let accumulated = numericCapitalSeed;
      for (let month = 1; month <= duration; month++) {
        const gain = numericCapitalSeed * monthlyRate;
        accumulated += gain;
        calculatedRows.push([
          month.toString(),
          numericCapitalSeed.toFixed(2),
          gain.toFixed(2),
          accumulated.toFixed(2),
        ]);
      }
      finalAccumulated = accumulated;
    } else if (benefitType === 'compound') {
      let base = numericCapitalSeed;
      for (let month = 1; month <= duration; month++) {
        const gain = base * monthlyRate;
        const accumulated = base + gain;
        calculatedRows.push([
          month.toString(),
          base.toFixed(2),
          gain.toFixed(2),
          accumulated.toFixed(2),
        ]);
        base = accumulated;
      }
      finalAccumulated = base;
    }


    let feeRate = 0;
    if (numericCapitalSeed >= 1 && numericCapitalSeed <= 1000) {
      feeRate = 0.02;
    } else if (numericCapitalSeed >= 1001 && numericCapitalSeed <= 10000) {
      feeRate = 0.01;
    } else if (numericCapitalSeed >= 10001 && numericCapitalSeed <= 50000) {
      feeRate = 0.005;
    } else if (numericCapitalSeed > 50000) {
      feeRate = 0.0025;
    }

    const fee = finalAccumulated * feeRate;
    const net = finalAccumulated - fee;

    return {
      calculatedRows,
      fee: fee.toFixed(2),
      net: net.toFixed(2),
    };
  }, [simulationForm]);
}
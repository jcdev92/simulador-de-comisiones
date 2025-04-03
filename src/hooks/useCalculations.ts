import { useMemo } from 'react';

export interface SimulationForm {
  capitalSeed: number;
  duration: 3 | 6 | 9 | 12;
  benefitType: 'simple' | 'compound';
}

export function useCalculations(simulationForm: SimulationForm) {
  return useMemo(() => {
    const { capitalSeed, duration, benefitType } = simulationForm;

    // Mapeo de duración a porcentaje mensual
    const monthlyPercentages: Record<number, number> = {
      3: 1,
      6: 2,
      9: 3,
      12: 4,
    };
    const monthlyRate = monthlyPercentages[duration] / 100; // Ejemplo: 0.01, 0.02, ...

    const calculatedRows: string[][] = [];
    let finalAccumulated = 0;

    if (benefitType === 'simple') {
      // Para beneficio simple, el cálculo de ganancia usa siempre el capital semilla
      let accumulated = capitalSeed;
      for (let month = 1; month <= duration; month++) {
        const gain = capitalSeed * monthlyRate;
        accumulated += gain;
        calculatedRows.push([
          month.toString(),
          capitalSeed.toFixed(2),
          gain.toFixed(2),
          accumulated.toFixed(2),
        ]);
      }
      finalAccumulated = accumulated;
    } else if (benefitType === 'compound') {
      // Para interés compuesto, cada mes la base se actualiza con el acumulado
      let base = capitalSeed;
      for (let month = 1; month <= duration; month++) {
        const gain = base * monthlyRate;
        const accumulated = base + gain;
        calculatedRows.push([
          month.toString(),
          base.toFixed(2),
          gain.toFixed(2),
          accumulated.toFixed(2),
        ]);
        base = accumulated; // Se actualiza la base para el siguiente mes
      }
      finalAccumulated = base;
    }

    // Determinar el fee según el capital semilla
    let feeRate = 0;
    if (capitalSeed >= 1 && capitalSeed <= 1000) {
      feeRate = 0.02;
    } else if (capitalSeed >= 1001 && capitalSeed <= 10000) {
      feeRate = 0.01;
    } else if (capitalSeed >= 10001 && capitalSeed <= 50000) {
      feeRate = 0.005;
    } else if (capitalSeed > 50000) {
      feeRate = 0.0025;
    }

    // El fee se calcula sobre el total acumulado (capital semilla + ganancias)
    const fee = finalAccumulated * feeRate;
    const net = finalAccumulated - fee;

    return {
      calculatedRows,
      fee: fee.toFixed(2),
      net: net.toFixed(2),
    };
  }, [simulationForm]);
}
// TableSection.tsx
import { Table } from './Table';
import { useCalculations, SimulationForm } from '../../hooks/useCalculations';
import { useSimulationForm } from '../../hooks/useSimulationForm';

export const TableSection = () => {
  const simulationForm = useSimulationForm();
  // Asumamos que useCalculations devuelve un objeto con las filas, fee y net
  const { calculatedRows, fee, net } = useCalculations(simulationForm as SimulationForm);

  const dataCols = [
    "Mes",
    "Capital Base",
    "Ganancia del Mes",
    "Saldo Acumulado Bruto"
  ];

  // Construimos la fila de resumen. Puedes ajustar el orden y contenido según tu diseño.
  const summaryRow = [
    "Totales",         // O podrías dejarla vacía si prefieres
    "",                // Espacio para dejar celdas vacías
    `Fee: $${fee}`,    
    `Neto: $${net}`
  ];

  return (
    <section className="w-full h-fit">
      <Table 
        columns={dataCols} 
        rows={calculatedRows}
        summaryRow={summaryRow} 
      />
    </section>
  );
};
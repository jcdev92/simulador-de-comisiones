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

  const summaryRow = [
    "Totales",
    "",
    `Fee: $${fee}`,
    `Neto: $${net}`
  ];

  return (
    <section className="w-full md:w-[70%] h-fit">
      <Table
        columns={dataCols}
        rows={calculatedRows}
        summaryRow={summaryRow}
      />
    </section>
  );
};
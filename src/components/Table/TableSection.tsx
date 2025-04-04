import { Table } from './Table';
import { useCalculations, SimulationForm } from '../../hooks/useCalculations';
import { useSimulationForm } from '../../hooks/useSimulationForm';
import { PaymentSection } from '../Payment/PaymentSection';
import { ExportCsvButton } from './ExportCsvButton';

export const TableSection = () => {
  const simulationForm = useSimulationForm();
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
    <section className="w-full md:w-[70%] h-fit flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 rounded-2xl mx-4 p-4 shadow-lg border border-blue-500">
      <ExportCsvButton headers={dataCols} data={calculatedRows} summaryRow={summaryRow} />
      <Table
        columns={dataCols}
        rows={calculatedRows}
        summaryRow={summaryRow}
      />
      <PaymentSection fundsGoal={simulationForm.capitalSeed} />
    </section>
  );
};
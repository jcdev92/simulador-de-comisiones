import { Table } from './Table';
import { useCalculations, SimulationForm } from '../../hooks/useCalculations';
import { useSimulationForm } from '../../hooks/useSimulationForm';

export const TableSection = () => {
  const simulationForm = useSimulationForm();
  const calculatedRows = useCalculations(simulationForm as SimulationForm);
  console.log("calculatedRows", calculatedRows);
  console.log("simulationForm", simulationForm);

  const dataCols = [
    "Mes",
    "Capital Base",
    "Ganancia del Mes",
    "Saldo Acumulado Bruto"
  ];

  return (
    <section className="w-full h-fit">
      <Table 
        columns={dataCols} 
        rows={calculatedRows} 
      />
    </section>
  );
};
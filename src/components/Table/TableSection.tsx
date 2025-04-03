import { Table } from './Table';
export const TableSection = () => {
  const dataCols = ["Mes", "Capital Base", "Ganacia del Mes", "Saldo Acumulado Bruto"];
  const dataRows = [
    ["1", "Dato 2", "Dato 3", "Dato 4"],
    ["2", "Dato 2", "Dato 3", "Dato 4"],
    ["3", "Dato 2", "Dato 3", "Dato 4"],
  ]
  return (
    <section className='w-full h-fit'>
      <Table
        columns={dataCols}
        rows={dataRows}
      />
    </section>
  )
}

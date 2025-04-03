import { Table } from './Table';
export const TableSection = () => {
    const dataCols = ["Columna 1", "Columna 2", "Columna 3", "Columna 4"];
    const dataRows = [
        ["Dato 1", "Dato 2", "Dato 3", "Dato 4"],
        ["Dato 1", "Dato 2", "Dato 3", "Dato 4"],
        ["Dato 1", "Dato 2", "Dato 3", "Dato 4"],
        ["Dato 1", "Dato 2", "Dato 3", "Dato 4"],
    ]
  return (
    <section className='w-full  h-fit'>
    <Table
        columns={dataCols}
        rows={dataRows}
    />
</section>
  )
}

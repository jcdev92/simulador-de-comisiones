interface TableProps {
  columns: string[];
  rows: Array<string[]>;
}

export const Table = ({ columns, rows }: TableProps) => {
  return (
    <div className="overflow-x-auto mx-4 my-6 shadow-lg border border-blue-500 rounded-2xl">
      <table className="min-w-full bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 rounded-2xl">
        <thead>
          <tr className="text-left text-white bg-blue-500">
            {columns.map((column, index) => (
              <th key={index} className="px-6 py-3">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "hover:bg-blue-100" : "bg-blue-50 hover:bg-blue-100"}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

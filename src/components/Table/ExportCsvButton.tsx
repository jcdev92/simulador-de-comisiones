import React from 'react';

interface ExportCsvProps {
  headers: string[];    
  data: string[][];     
  summaryRow?: string[]; 
}

export const ExportCsvButton: React.FC<ExportCsvProps> = ({ headers, data, summaryRow }) => {
  const handleExport = () => {
    let csvContent = "";

    if (headers && headers.length) {
      csvContent += headers.join(",") + "\n";
    }

    data.forEach((row) => {
      csvContent += row.join(",") + "\n";
    });

    if (summaryRow && summaryRow.length) {
      csvContent += summaryRow.join(",") + "\n";
    }

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

  
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "simulacion.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
    >
      Exportar CSV
    </button>
  );
};
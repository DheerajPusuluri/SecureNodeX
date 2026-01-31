import { AlertCircle, Ban, CheckCircle, Clock } from 'lucide-react';

const StatusTable = ({ columns, data, highlightRowCondition }) => {
    return (
        <div className="status-table-container">
            <table className="status-table">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} style={{ width: col.width }}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => {
                        const isHighlighted = highlightRowCondition ? highlightRowCondition(row) : false;
                        return (
                            <tr key={rowIndex} className={isHighlighted ? 'highlight-row' : ''}>
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex}>
                                        {col.render ? col.render(row) : row[col.accessor]}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <style>{`
        .status-table-container {
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          overflow: hidden;
        }

        .status-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }

        .status-table th {
          background-color: rgba(255, 255, 255, 0.03);
          color: var(--color-text-muted);
          font-weight: 500;
          text-align: left;
          padding: var(--spacing-md);
          border-bottom: 1px solid var(--border-subtle);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.5px;
        }

        .status-table td {
          padding: var(--spacing-md);
          border-bottom: 1px solid var(--border-subtle);
          color: var(--color-text-main);
        }

        .status-table tr:last-child td {
          border-bottom: none;
        }

        .status-table tr:hover {
          background-color: rgba(255, 255, 255, 0.02);
        }

        .highlight-row {
          background-color: rgba(255, 51, 51, 0.05) !important;
        }
        
        .highlight-row td {
          color: var(--color-danger);
        }
      `}</style>
        </div>
    );
};

export default StatusTable;

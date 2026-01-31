import { FileText, Download, Filter } from 'lucide-react';
import StatusTable from '../components/common/StatusTable';

const LogsAudit = () => {
    const logs = [
        { id: 'LOG-8821', time: '14:23:45', category: 'SECURITY', severity: 'HIGH', message: 'Blocked unauthorized connection from IP 192.168.1.45' },
        { id: 'LOG-8822', time: '14:24:10', category: 'SYSTEM', severity: 'INFO', message: 'Trust Score recalibrated to 98.4%' },
        { id: 'LOG-8823', time: '14:25:00', category: 'FAULT', severity: 'WARNING', message: 'Voltage spike detected on Sensor Array X - Protection Triggered' },
        { id: 'LOG-8824', time: '14:30:11', category: 'SECURITY', severity: 'CRITICAL', message: 'Multiple failed auth attempts on Port 8080' },
        { id: 'LOG-8825', time: '14:35:22', category: 'SYSTEM', severity: 'INFO', message: 'Routine health check completed' },
    ];

    const columns = [
        { header: 'Log ID', accessor: 'id', width: '15%' },
        { header: 'Timestamp', accessor: 'time', width: '15%' },
        { header: 'Category', accessor: 'category', width: '15%' },
        {
            header: 'Severity', width: '15%', render: (row) => (
                <span className={`severity-badge ${row.severity.toLowerCase()}`}>{row.severity}</span>
            )
        },
        { header: 'Message', accessor: 'message', width: '40%' }
    ];

    return (
        <div className="logs-page">
            <div className="page-header">
                <h2 className="page-title">System Audit Logs</h2>
                <div className="actions">
                    <button className="btn-icon"><Filter size={18} /> Filter</button>
                    <button className="btn-primary"><Download size={18} /> Export CSV</button>
                </div>
            </div>

            <div className="logs-panel">
                <StatusTable columns={columns} data={logs} />
                <div className="pagination">
                    <span>Showing 1-5 of 1,284 logs</span>
                    <div className="pages">
                        <button disabled>Prev</button>
                        <button className="active">1</button>
                        <button>2</button>
                        <button>Next</button>
                    </div>
                </div>
            </div>

            <style>{`
                .logs-page {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-lg);
                    animation: fadeIn 0.3s ease-out;
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .actions {
                    display: flex;
                    gap: var(--spacing-md);
                }

                .btn-icon, .btn-primary {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    border-radius: 4px;
                    border: 1px solid var(--border-subtle);
                    background: transparent;
                    color: var(--color-text-main);
                    transition: all 0.2s;
                }

                .btn-primary {
                    background: rgba(0, 255, 157, 0.1);
                    border-color: var(--color-safe);
                    color: var(--color-safe);
                }

                .btn-primary:hover {
                    background: rgba(0, 255, 157, 0.2);
                }

                .logs-panel {
                    background: var(--bg-card);
                    border: 1px solid var(--border-subtle);
                    border-radius: 8px;
                    padding: var(--spacing-lg);
                }

                .severity-badge {
                    font-size: 0.7rem;
                    font-weight: 700;
                    padding: 2px 6px;
                    border-radius: 3px;
                }
                .severity-badge.high, .severity-badge.critical { color: var(--color-danger); background: rgba(255, 51, 51, 0.1); }
                .severity-badge.warning { color: var(--color-warning); background: rgba(255, 184, 0, 0.1); }
                .severity-badge.info { color: var(--color-text-muted); background: rgba(255, 255, 255, 0.05); }

                .pagination {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: var(--spacing-lg);
                    font-size: 0.85rem;
                    color: var(--color-text-muted);
                }

                .pages button {
                    background: transparent;
                    border: 1px solid var(--border-subtle);
                    color: var(--color-text-muted);
                    padding: 4px 10px;
                    margin-left: 4px;
                    border-radius: 4px;
                }

                .pages button.active {
                    background: var(--color-safe);
                    color: #000;
                    border-color: var(--color-safe);
                }
            `}</style>
        </div>
    );
};

export default LogsAudit;

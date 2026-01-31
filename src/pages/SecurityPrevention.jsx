import { ShieldAlert, Ban, AlertOctagon } from 'lucide-react';
import StatusTable from '../components/common/StatusTable';
import StatCard from '../components/dashboard/StatCard';

const SecurityPrevention = () => {
    const threats = [
        { timestamp: '2024-01-30 14:23:01', deviceId: 'UNKNOWN-MAC-AF:32', ip: '192.168.1.45', reason: 'Invalid Certificate', action: 'BLOCKED' },
        { timestamp: '2024-01-30 14:21:55', deviceId: 'SNX-IOT-009', ip: '192.168.1.109', reason: 'Unauthorized Port Scan', action: 'QUARANTINED' },
        { timestamp: '2024-01-30 13:45:12', deviceId: 'UNKNOWN-MAC-DD:11', ip: '45.32.11.2', reason: 'Expired Token', action: 'BLOCKED' },
        { timestamp: '2024-01-30 12:10:05', deviceId: 'SNX-IOT-002', ip: '192.168.1.102', reason: 'Protocol Anomaly', action: 'RESET' },
        { timestamp: '2024-01-30 11:30:22', deviceId: 'UNKNOWN', ip: '10.0.0.55', reason: 'Bad Signature', action: 'BLOCKED' },
    ];

    const columns = [
        { header: 'Timestamp', accessor: 'timestamp', width: '20%' },
        { header: 'Device Identity', accessor: 'deviceId', width: '20%' },
        { header: 'Source IP', accessor: 'ip', width: '15%' },
        {
            header: 'Rejection Reason', width: '25%', render: (row) => (
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertOctagon size={14} color="var(--color-danger)" />
                    {row.reason}
                </span>
            )
        },
        {
            header: 'Action Taken', width: '20%', render: (row) => (
                <span className={`badge ${row.action.toLowerCase()}`}>{row.action}</span>
            )
        },
    ];

    return (
        <div className="security-page">
            <div className="page-header">
                <h2 className="page-title">Security Prevention</h2>
                <div className="header-status">
                    <span className="live-badge">● LIVE PROTECTION ENABLED</span>
                </div>
            </div>

            <div className="stats-row">
                <StatCard
                    title="Attempts Blocked (24h)"
                    value="142"
                    subtext="Zero unauthorized access"
                    icon={ShieldAlert}
                    status="safe"
                />
                <StatCard
                    title="Quarantined Devices"
                    value="3"
                    subtext="Isolated for inspection"
                    icon={Ban}
                    status="warning"
                />
            </div>

            <section className="threats-section">
                <h3>Blocked Threats & Rejected Connections</h3>
                <StatusTable
                    columns={columns}
                    data={threats}
                    highlightRowCondition={(row) => row.action === 'QUARANTINED'}
                />
                <div className="table-footer">
                    Displaying last 5 prevented incidents. <a href="#">View Full Security Logs</a>
                </div>
            </section>

            <style>{`
        .security-page {
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

        .live-badge {
          color: var(--color-safe);
          font-weight: 600;
          font-size: 0.8rem;
          background: rgba(0, 255, 157, 0.1);
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid rgba(0, 255, 157, 0.2);
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
        }

        .threats-section h3 {
          margin-bottom: var(--spacing-md);
          color: var(--color-text-main);
          font-size: 1.1rem;
        }

        .badge {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .badge.blocked {
          background: rgba(255, 51, 51, 0.1);
          color: var(--color-danger);
          border: 1px solid rgba(255, 51, 51, 0.2);
        }

        .badge.quarantined {
           background: rgba(255, 184, 0, 0.1);
           color: var(--color-warning);
           border: 1px solid rgba(255, 184, 0, 0.2);
        }
        
        .badge.reset {
           background: rgba(148, 163, 184, 0.1);
           color: var(--color-text-muted);
        }

        .table-footer {
          margin-top: var(--spacing-sm);
          font-size: 0.85rem;
          color: var(--color-text-muted);
          text-align: right;
        }
        
        .table-footer a {
          color: var(--color-safe);
          text-decoration: none;
          margin-left: 8px;
        }
      `}</style>
        </div>
    );
};

export default SecurityPrevention;

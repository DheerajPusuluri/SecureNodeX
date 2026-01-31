import { ShieldCheck, Zap, AlertTriangle, Wifi } from 'lucide-react';

const DeviceHealthCard = ({ device }) => {
    const { name, id, status, trustScore, faultsPrevented, lastActive } = device;

    const isHealthy = status === 'secure';

    return (
        <div className={`device-card ${status}`}>
            <div className="device-header">
                <div className="device-info">
                    <span className="device-type">Industrial Controller</span>
                    <h4 className="device-name">{name}</h4>
                    <span className="device-id">{id}</span>
                </div>
                <div className="device-trust">
                    <ShieldCheck size={16} className={trustScore > 90 ? 'safe' : 'warning'} />
                    <span>{trustScore}% Trust</span>
                </div>
            </div>

            <div className="device-status-row">
                <div className="status-badge">
                    <div className={`indicator ${status}`}></div>
                    {status === 'secure' ? 'Protected' : 'Warning'}
                </div>
                <div className="connection-status">
                    <Wifi size={14} />
                    {lastActive}
                </div>
            </div>

            <div className="device-metrics">
                <div className="metric">
                    <span className="label">Faults Prevented</span>
                    <span className="value">{faultsPrevented}</span>
                </div>
                <div className="metric">
                    <span className="label">Uptime</span>
                    <span className="value">99.9%</span>
                </div>
            </div>

            <style>{`
        .device-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          padding: var(--spacing-md);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          position: relative;
          overflow: hidden;
        }

        .device-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color-safe);
          opacity: 0.5;
        }

        .device-card.warning::before { background: var(--color-warning); }

        .device-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .device-type {
          font-size: 0.7rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .device-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text-main);
          margin: 2px 0;
        }

        .device-id {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-text-muted);
          opacity: 0.7;
        }

        .device-trust {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          font-weight: 500;
          background: rgba(0, 0, 0, 0.2);
          padding: 4px 8px;
          border-radius: 4px;
        }
        
        .device-trust .safe { color: var(--color-safe); }
        .device-trust .warning { color: var(--color-warning); }

        .device-status-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--color-text-main);
        }

        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .indicator.secure { background: var(--color-safe); box-shadow: 0 0 8px var(--color-safe); }
        .indicator.warning { background: var(--color-warning); }

        .connection-status {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--color-text-muted);
          font-size: 0.75rem;
        }

        .device-metrics {
          display: flex;
          gap: var(--spacing-lg);
          border-top: 1px solid var(--border-subtle);
          padding-top: var(--spacing-sm);
        }

        .metric {
          display: flex;
          flex-direction: column;
        }

        .metric .label {
          font-size: 0.7rem;
          color: var(--color-text-muted);
        }

        .metric .value {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-main);
        }
      `}</style>
        </div>
    );
};

export default DeviceHealthCard;

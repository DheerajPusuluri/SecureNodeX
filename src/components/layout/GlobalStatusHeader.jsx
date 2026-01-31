import { ShieldCheck, Lock, Activity, AlertTriangle } from 'lucide-react';

const GlobalStatusHeader = () => {
    return (
        <header className="global-header">
            <div className="header-content">
                <div className="protection-status">
                    <div className="status-item secure">
                        <Lock size={16} />
                        <span>Secure mTLS Channel Active</span>
                    </div>
                    <div className="status-divider"></div>
                    <div className="status-item secure">
                        <ShieldCheck size={16} />
                        <span>Auth Devices Only</span>
                    </div>
                    <div className="status-divider"></div>
                    <div className="status-item secure">
                        <Activity size={16} />
                        <span>Fault Prevention: ACTIVE</span>
                    </div>
                </div>

                <div className="header-actions">
                    {/* Placeholder for notifications or user settings if needed */}
                </div>
            </div>

            <style>{`
        .global-header {
          background-color: rgba(15, 23, 31, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-subtle);
          position: sticky;
          top: 0;
          z-index: 40;
          height: 60px;
          display: flex;
          align-items: center;
          padding: 0 var(--spacing-lg);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .protection-status {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
        }

        .status-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .status-item.secure {
          color: var(--color-safe);
        }
        
        .status-item.warning {
          color: var(--color-warning);
        }

        .status-item.danger {
          color: var(--color-danger);
        }

        .status-divider {
          width: 1px;
          height: 16px;
          background-color: var(--border-subtle);
        }
      `}</style>
        </header>
    );
};

export default GlobalStatusHeader;

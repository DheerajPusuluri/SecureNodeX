import { useState } from 'react';
import { Save, RefreshCw, AlertTriangle } from 'lucide-react';

const SystemRules = () => {
    const [voltageThreshold, setVoltageThreshold] = useState(24.5);
    const [tempThreshold, setTempThreshold] = useState(85);

    return (
        <div className="rules-page">
            <div className="page-header">
                <h2 className="page-title">System Protection Rules</h2>
                <button className="btn-save"><Save size={18} /> Save Configuration</button>
            </div>

            <div className="config-grid">
                <div className="config-card">
                    <h3>Voltage Protection</h3>
                    <p className="desc">Automated cutoff threshold for over-voltage events.</p>

                    <div className="control-group">
                        <label>Max Voltage (V)</label>
                        <input
                            type="range"
                            min="12" max="48" step="0.5"
                            value={voltageThreshold}
                            onChange={(e) => setVoltageThreshold(e.target.value)}
                        />
                        <span className="value-display">{voltageThreshold}V</span>
                    </div>

                    <div className="safety-warning">
                        <AlertTriangle size={16} />
                        Recommended Safe Limit: 24.0V
                    </div>
                </div>

                <div className="config-card">
                    <h3>Thermal Management</h3>
                    <p className="desc">Critical temperature shutdown point.</p>

                    <div className="control-group">
                        <label>Max Temp (°C)</label>
                        <input
                            type="range"
                            min="60" max="120" step="1"
                            value={tempThreshold}
                            onChange={(e) => setTempThreshold(e.target.value)}
                        />
                        <span className="value-display">{tempThreshold}°C</span>
                    </div>
                </div>
            </div>

            <style>{`
                .rules-page {
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

                .btn-save {
                    background: var(--color-safe);
                    color: #000;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .config-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: var(--spacing-lg);
                }

                .config-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-subtle);
                    border-radius: 8px;
                    padding: var(--spacing-lg);
                }

                .config-card h3 { margin-bottom: 8px; color: var(--color-text-main); }
                .config-card .desc { color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 24px; }

                .control-group {
                    margin-bottom: 20px;
                }

                .control-group label {
                    display: block;
                    margin-bottom: 8px;
                    color: var(--color-text-muted);
                    font-size: 0.85rem;
                }

                .control-group input[type="range"] {
                    width: 100%;
                    margin-bottom: 10px;
                    accent-color: var(--color-safe);
                }

                .value-display {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--color-safe);
                }

                .safety-warning {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.8rem;
                    color: var(--color-warning);
                    background: rgba(255, 184, 0, 0.1);
                    padding: 8px;
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
};

export default SystemRules;

import { Zap } from 'lucide-react';
import StatusTable from '../components/common/StatusTable';

const FaultPrevention = () => {
    const rules = [
        { id: 'R-VOLT-01', name: 'Over-Voltage Protection', threshold: '> 24.5V', status: 'ACTIVE', triggers: 12 },
        { id: 'R-CURR-03', name: 'Surge Current Cutoff', threshold: '> 5.0A', status: 'ACTIVE', triggers: 5 },
        { id: 'R-TEMP-02', name: 'Thermal Shutdown', threshold: '> 85°C', status: 'ACTIVE', triggers: 0 },
        { id: 'R-GND-01', name: 'Ground Fault Interrupter', threshold: 'Leakage > 5mA', status: 'DISABLED', triggers: 0 },
    ];

    const incidentHistory = [
        { time: '14:23:45', rule: 'R-VOLT-01', affected: 'Motor Controller A', action: 'Input Isolated', result: 'Saved' },
        { time: '11:10:22', rule: 'R-CURR-03', affected: 'Heater Unit B', action: 'Relay Opened', result: 'Saved' },
        { time: '09:45:10', rule: 'R-VOLT-01', affected: 'Sensor Array X', action: 'Power Cut', result: 'Saved' },
    ];

    const ruleColumns = [
        { header: 'Rule ID', accessor: 'id', width: '15%' },
        { header: 'Protection Name', accessor: 'name', width: '30%' },
        { header: 'Trigger Threshold', accessor: 'threshold', width: '20%' },
        {
            header: 'Status', width: '15%', render: (row) => (
                <span style={{ color: row.status === 'ACTIVE' ? 'var(--color-safe)' : 'var(--color-text-muted)', fontWeight: 'bold' }}>● {row.status}</span>
            )
        },
        { header: 'Triggers (24h)', accessor: 'triggers', width: '15%' }
    ];

    return (
        <div className="fault-page">
            <div className="page-header">
                <h2 className="page-title">Fault Prevention Systems</h2>
                <div className="protection-status-card">
                    <Zap size={20} className="status-icon" />
                    <span>Hardware Protection Layer: <strong className="safe">ENGAGED</strong></span>
                </div>
            </div>

            <div className="rules-grid">
                <div className="panel rules-panel">
                    <div className="panel-header">
                        <h3>Active Protection Rules</h3>
                        <button className="btn-secondary">Configure Rules</button>
                    </div>
                    <StatusTable columns={ruleColumns} data={rules} />
                </div>

                <div className="panel timeline-panel">
                    <h3>Prevention Timeline</h3>
                    <div className="timeline">
                        {incidentHistory.map((incident, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <div className="meta">
                                        <span className="time">{incident.time}</span>
                                        <span className="result-badge">{incident.result}</span>
                                    </div>
                                    <div className="desc">
                                        <strong>{incident.rule}</strong> triggered on {incident.affected}.
                                        <div className="action">Action: {incident.action}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .fault-page {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-lg);
                    animation: fadeIn 0.3s ease-out;
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                }

                .protection-status-card {
                    background: rgba(0, 255, 157, 0.05);
                    border: 1px solid var(--color-safe);
                    padding: 8px 16px;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: var(--color-safe);
                }

                .safe { color: var(--color-safe); }

                .rules-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: var(--spacing-lg);
                }

                @media (max-width: 1000px) {
                    .rules-grid { grid-template-columns: 1fr; }
                }

                .panel {
                   background: var(--bg-card);
                   border: 1px solid var(--border-subtle);
                   border-radius: 8px;
                   padding: var(--spacing-lg);
                }

                .panel-header {
                   display: flex;
                   justify-content: space-between;
                   align-items: center;
                   margin-bottom: var(--spacing-md);
                }

                .btn-secondary {
                   background: transparent;
                   border: 1px solid var(--border-subtle);
                   color: var(--color-text-main);
                   padding: 6px 12px;
                   border-radius: 4px;
                }

                /* Timeline Styles */
                .timeline {
                    margin-top: var(--spacing-md);
                    border-left: 2px solid var(--border-subtle);
                    padding-left: var(--spacing-lg);
                }

                .timeline-item {
                    position: relative;
                    margin-bottom: var(--spacing-lg);
                }

                .timeline-marker {
                    position: absolute;
                    left: calc(-1 * var(--spacing-lg) - 5px);
                    top: 4px;
                    width: 8px;
                    height: 8px;
                    background: var(--color-safe); /* Or warning based on severity */
                    border-radius: 50%;
                    box-shadow: 0 0 0 4px var(--bg-card);
                }

                .timeline-content .meta {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.8rem;
                    color: var(--color-text-muted);
                    margin-bottom: 4px;
                }

                .result-badge {
                    color: var(--color-safe);
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 0.7rem;
                    background: rgba(0, 255, 157, 0.1);
                    padding: 2px 6px;
                    border-radius: 3px;
                }

                .timeline-content .desc {
                    font-size: 0.9rem;
                    color: var(--color-text-main);
                }

                .timeline-content .action {
                    font-size: 0.8rem;
                    color: var(--color-warning);
                    margin-top: 4px;
                    font-style: italic;
                }
            `}</style>
        </div>
    );
};

export default FaultPrevention;

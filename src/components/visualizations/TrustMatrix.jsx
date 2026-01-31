import { ShieldCheck, Lock, Cloud, Server, AlertTriangle } from 'lucide-react';

const TrustMatrix = () => {
    const layers = [
        {
            name: "Device Identity",
            status: "secure",
            score: 100,
            details: "ECC mTLS Certificates Verified",
            icon: Lock
        },
        {
            name: "Network Transport",
            status: "secure",
            score: 99,
            details: "TLS 1.3 / MQTT Encrypted",
            icon: Cloud
        },
        {
            name: "Data Integrity",
            status: "secure",
            score: 100,
            details: "SHA-256 Signed Payloads",
            icon: Server
        },
        {
            name: "Hardware Protection",
            status: "warning",
            score: 85,
            details: "3 Active Interventions",
            icon: ShieldCheck
        }
    ];

    return (
        <div className="trust-matrix">
            <h3 className="matrix-title">System Trust Verification Matrix</h3>

            <div className="matrix-grid">
                {layers.map((layer, index) => (
                    <div key={index} className={`matrix-card ${layer.status}`}>
                        <div className="card-header">
                            <layer.icon size={24} className="layer-icon" />
                            <span className="score">{layer.score}%</span>
                        </div>
                        <h4>{layer.name}</h4>
                        <div className="status-badge">
                            {layer.status === 'secure' ? 'VERIFIED' : 'ATTENTION'}
                        </div>
                        <p className="details">{layer.details}</p>
                    </div>
                ))}
            </div>

            <style>{`
                .trust-matrix {
                    background: var(--bg-card);
                    border: 1px solid var(--border-subtle);
                    border-radius: 8px;
                    padding: var(--spacing-lg);
                }

                .matrix-title {
                    margin-bottom: var(--spacing-lg);
                    color: var(--color-text-main);
                    text-align: center;
                }

                .matrix-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: var(--spacing-lg);
                }

                .matrix-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid var(--border-subtle);
                    padding: var(--spacing-lg);
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .matrix-card:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.05);
                }

                .matrix-card.secure { border-top: 4px solid var(--color-safe); }
                .matrix-card.warning { border-top: 4px solid var(--color-warning); }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    margin-bottom: var(--spacing-md);
                    align-items: center;
                }

                .layer-icon {
                    color: var(--color-text-muted);
                }

                .matrix-card.secure .layer-icon { color: var(--color-safe); }
                .matrix-card.warning .layer-icon { color: var(--color-warning); }

                .score {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: var(--color-text-main);
                }

                .matrix-card h4 {
                    margin-bottom: var(--spacing-sm);
                    font-size: 1rem;
                }

                .status-badge {
                    font-size: 0.7rem;
                    font-weight: 700;
                    padding: 2px 8px;
                    border-radius: 10px;
                    margin-bottom: var(--spacing-md);
                    text-transform: uppercase;
                }

                .matrix-card.secure .status-badge {
                    background: rgba(0, 255, 157, 0.1);
                    color: var(--color-safe);
                }

                .matrix-card.warning .status-badge {
                    background: rgba(255, 184, 0, 0.1);
                    color: var(--color-warning);
                }

                .details {
                    font-size: 0.8rem;
                    color: var(--color-text-muted);
                }
            `}</style>
        </div>
    );
};

export default TrustMatrix;

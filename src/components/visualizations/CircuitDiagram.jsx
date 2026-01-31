import { useState, useEffect } from 'react';
import { Zap, Activity, Power, Cpu } from 'lucide-react';

const CircuitDiagram = () => {
    // Mock simulation state
    const [circuitState, setCircuitState] = useState({
        powerInput: 'normal', // normal, surge, off
        mcuStatus: 'active',
        relayState: 'closed', // closed (power on), open (protected)
        loadStatus: 'running'
    });

    const [animationStep, setAnimationStep] = useState(0);

    // Simulate a fault event loop for demo purposes
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationStep(prev => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Simple state machine for demo visualization
        switch (animationStep) {
            case 0: setCircuitState({ powerInput: 'normal', mcuStatus: 'active', relayState: 'closed', loadStatus: 'running' }); break;
            case 1: setCircuitState({ powerInput: 'surge', mcuStatus: 'detecting', relayState: 'closed', loadStatus: 'running' }); break;
            case 2: setCircuitState({ powerInput: 'surge', mcuStatus: 'protecting', relayState: 'open', loadStatus: 'safe_off' }); break;
            case 3: setCircuitState({ powerInput: 'normal', mcuStatus: 'recovering', relayState: 'open', loadStatus: 'safe_off' }); break;
        }
    }, [animationStep]);

    const getPathColor = (section) => {
        if (circuitState.powerInput === 'off') return '#333';
        if (section === 'input') return circuitState.powerInput === 'surge' ? 'var(--color-danger)' : 'var(--color-safe)';
        if (section === 'control') return 'var(--color-safe)';
        if (section === 'output') return circuitState.relayState === 'open' ? '#333' : 'var(--color-safe)';
        return '#555';
    };

    return (
        <div className="circuit-diagram-container">
            <div className="diagram-header">
                <h3>Live Circuit Protection Logic</h3>
                <div className="legend">
                    <span className="legend-item"><span className="dot safe"></span> Normal</span>
                    <span className="legend-item"><span className="dot danger"></span> High Voltage</span>
                    <span className="legend-item"><span className="dot off"></span> Isolated</span>
                </div>
            </div>

            <div className="diagram-visual">
                {/* SVG Logic Visualization */}
                <svg viewBox="0 -30 760 260" className="circuit-svg">
                    {/* 1. Input Power Stage */}
                    <g transform="translate(40, 90)">
                        <rect x="0" y="-30" width="80" height="60" rx="4" fill="#1e293b" stroke={getPathColor('input')} strokeWidth="2" />
                        <text x="40" y="5" textAnchor="middle" fill="#ccc" fontSize="14" fontWeight="600">POWER IN</text>
                        {circuitState.powerInput === 'surge' &&
                            <text x="40" y="45" textAnchor="middle" fill="var(--color-danger)" fontSize="12" fontWeight="bold">SURGE DETECTED</text>
                        }
                    </g>
                    {/* Connector Line 1 */}
                    <line x1="120" y1="90" x2="190" y2="90" stroke={getPathColor('input')} strokeWidth="4" />

                    {/* 2. Protection Relay (The Gate) */}
                    <g transform="translate(190, 60)">
                        <rect x="0" y="0" width="60" height="60" rx="4" fill="#1e293b" stroke="var(--color-warning)" strokeWidth="2" />
                        <path d={circuitState.relayState === 'closed' ? "M10,30 L50,30" : "M10,30 L50,10"} stroke="var(--color-warning)" strokeWidth="4" />
                        <text x="30" y="80" textAnchor="middle" fill="#ccc" fontSize="14" fontWeight="600">RELAY</text>
                        <text x="30" y="-10" textAnchor="middle" fill={circuitState.relayState === 'open' ? 'var(--color-safe)' : '#666'} fontSize="12" fontWeight="500">
                            {circuitState.relayState === 'open' ? 'OPEN (PROTECTED)' : 'CLOSED'}
                        </text>
                    </g>

                    {/* Connector Line 2 - Fixed gap */}
                    <line x1="250" y1="90" x2="390" y2="90" stroke={getPathColor('output')} strokeWidth="4" />

                    {/* 3. Secure Node MCU (Brain) */}
                    <g transform="translate(310, 170)">
                        <rect x="0" y="0" width="120" height="80" rx="4" fill="#0f172a" stroke="var(--color-safe)" strokeWidth="2" />
                        <text x="60" y="30" textAnchor="middle" fill="var(--color-safe)" fontSize="16" fontWeight="bold">SECURE MCU</text>
                        <text x="60" y="55" textAnchor="middle" fill="#94a3b8" fontSize="12">
                            {circuitState.mcuStatus === 'detecting' ? 'ANALYZING THREAT...' :
                                circuitState.mcuStatus === 'protecting' ? 'ACTIVATING PROTECTION' : 'MONITORING'}
                        </text>
                        {/* Logic Lines back to Relay */}
                        <path d="M60,0 L60,-50 L-90,-50" fill="none" stroke="var(--color-safe)" strokeWidth="1" strokeDasharray="4" className="logic-line" />
                    </g>

                    {/* 4. Protected Load (Device) - Shifted Left */}
                    <g transform="translate(390, 50)">
                        <rect x="0" y="0" width="100" height="80" rx="4" fill="#1e293b" stroke={getPathColor('output')} strokeWidth="2" />
                        <Activity x="35" y="20" size={30} color={getPathColor('output')} />
                        <text x="50" y="70" textAnchor="middle" fill="#ccc" fontSize="14" fontWeight="600">IoT SENSOR</text>
                    </g>

                    {/* Status Output Right - Component shifted to fit */}
                    <g transform="translate(540, 90)">
                        {circuitState.loadStatus === 'safe_off' ? (
                            <text x="0" y="0" fill="var(--color-safe)" fontSize="20" fontWeight="bold">✓ DAMAGE PREVENTED</text>
                        ) : (
                            <text x="0" y="0" fill="var(--color-safe)" fontSize="20" fontWeight="bold">SYSTEM OPERATIONAL</text>
                        )}
                    </g>
                </svg>
            </div>

            <style>{`
          .circuit-diagram-container {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
          }

            .diagram-header {
                display: flex;
            justify-content: space-between;
            margin-bottom: var(--spacing-md);
            z-index: 2; /* Ensure header stays on top */
          }

            .legend {
                display: flex;
            gap: var(--spacing-md);
            font-size: 0.8rem;
            color: var(--color-text-muted);
          }

            .legend-item {
                display: flex;
            align-items: center;
            gap: 6px;
          }

            .dot {width: 8px; height: 8px; border-radius: 50%; }
            .dot.safe {background: var(--color-safe); }
            .dot.danger {background: var(--color-danger); }
            .dot.off {background: #333; }

            .diagram-visual {
                flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 0;
          }

            .circuit-svg {
                width: 100%;
            height: 100%;
            background: transparent;
          }

            .logic-line {
                animation: dash 1s linear infinite;
          }

            @keyframes dash {
                to {
              stroke-dashoffset: -8;
              }
          }
       `}</style>
        </div >
    );
};

export default CircuitDiagram;

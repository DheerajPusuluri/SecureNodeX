import React from 'react';
import { Activity, Thermometer, Zap, Cpu } from 'lucide-react';
import CircuitDiagram from '../components/visualizations/CircuitDiagram';

const CircuitHealth = () => {
   return (
      <div className="circuit-health-page">
         <div className="page-header">
            <h2 className="page-title">Circuit Health & Diagnostics</h2>
            <div className="status-badge">
               <Activity size={18} />
               <span>LIVE MONITORING</span>
            </div>
         </div>

         <div className="main-layout">
            {/* Left Col: Diagram */}
            <div className="diagram-container panel">
               <CircuitDiagram />
            </div>

            {/* Right Col: Metrics */}
            <div className="metrics-column">

               {/* Voltage Card */}
               <div className="metric-card">
                  <div className="card-top">
                     <Zap size={20} className="text-warning" />
                     <span className="label">Bus Voltage</span>
                  </div>
                  <div className="value-large">24.2 V</div>
                  <div className="sub-value">Stable (±0.1V)</div>
               </div>

               {/* Temp Card */}
               <div className="metric-card">
                  <div className="card-top">
                     <Thermometer size={20} className="text-danger" />
                     <span className="label">Core Temp</span>
                  </div>
                  <div className="value-large">54°C</div>
                  <div className="sub-value">Optimal Range</div>
               </div>

               {/* MCU Load */}
               <div className="metric-card">
                  <div className="card-top">
                     <Cpu size={20} className="text-info" />
                     <span className="label">MCU Load</span>
                  </div>
                  <div className="value-large">12%</div>
                  <div className="sub-value">Idle</div>
               </div>

               {/* Diagnostics Log */}
               <div className="diagnostics-panel panel">
                  <h3>Live Diagnostics</h3>
                  <ul className="diag-list">
                     <li><span className="time">14:45:02</span> <span className="msg">Voltage Regulated on L2</span></li>
                     <li><span className="time">14:44:55</span> <span className="msg">Temp Check Passed</span></li>
                     <li><span className="time">14:44:12</span> <span className="msg">Heartbeat Signal Ack</span></li>
                  </ul>
               </div>

            </div>
         </div>

         <style>{`
        .circuit-health-page {
           display: flex;
           flex-direction: column;
           gap: var(--spacing-lg);
           height: 100%; /* Ensure full height */
           width: 100%;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 10px;
        }
        
        .page-title {
            font-size: 1.8rem; /* Larger Title */
        }

        .status-badge {
          background: rgba(0, 255, 157, 0.1);
          color: var(--color-safe);
          padding: 8px 16px; /* Larger badge */
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1rem; /* Larger text */
          font-weight: 700;
          letter-spacing: 1px;
          border: 1px solid rgba(0,255,157, 0.2);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
           0% { box-shadow: 0 0 0 0 rgba(0, 255, 157, 0.2); }
           70% { box-shadow: 0 0 0 6px rgba(0, 255, 157, 0); }
           100% { box-shadow: 0 0 0 0 rgba(0, 255, 157, 0); }
        }

        .main-layout {
           display: grid;
           grid-template-columns: 3fr 1.2fr; /* Give metrics slightly more width */
           gap: 30px; /* Bigger gap */
           flex: 1;
           min-height: 0;
        }

        .panel {
           background: var(--bg-card);
           border: 1px solid var(--border-subtle);
           border-radius: 12px;
           overflow: hidden;
        }

        .diagram-container {
           padding: 30px; /* More padding */ 
           display: flex;
           flex-direction: column;
           background: radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%);
           position: relative;
        }

        .metrics-column {
           display: flex;
           flex-direction: column;
           gap: 20px; /* Bigger gap */
           overflow-y: auto;
        }

        .metric-card {
           background: var(--bg-card);
           border: 1px solid var(--border-subtle);
           padding: 24px; /* Larger card padding */
           border-radius: 12px;
           transition: transform 0.2s;
        }
        .metric-card:hover {
           transform: translateY(-2px);
           border-color: rgba(255,255,255,0.1);
        }

        .card-top {
           display: flex;
           align-items: center;
           gap: 12px;
           margin-bottom: 12px;
        }
        .text-warning { color: var(--color-warning); }
        .text-danger { color: var(--color-danger); }
        .text-info { color: #3b82f6; }

        .label {
           color: var(--color-text-muted);
           font-size: 1.1rem; /* Bigger Label */
           font-weight: 500;
        }

        .value-large {
           font-size: 2.8rem; /* Much Bigger Value */
           font-weight: 700;
           color: var(--color-text-main);
           line-height: 1.2;
        }

        .sub-value {
           font-size: 1rem; /* Bigger sub-text */
           color: var(--color-safe);
           margin-top: 8px;
        }

        .diagnostics-panel {
           flex: 1;
           padding: 20px;
           display: flex;
           flex-direction: column;
        }

        .diagnostics-panel h3 {
           font-size: 1.2rem;
           margin-bottom: 15px;
           color: var(--color-text-muted);
        }

        .diag-list {
           list-style: none;
           padding: 0;
           margin: 0;
           font-size: 1rem; /* Bigger list text */
           overflow-y: auto;
           flex: 1;
        }

        .diag-list li {
           display: flex;
           justify-content: space-between;
           padding: 10px 0; /* More spacing */
           border-bottom: 1px solid rgba(255,255,255,0.03);
        }
        .diag-list li:last-child { border-bottom: none; }
        .diag-list .time { color: var(--color-text-muted); font-family: monospace; }
        .diag-list .msg { color: var(--color-text-main); }

        @media (max-width: 1000px) {
           .main-layout { grid-template-columns: 1fr; }
           .circuit-health-page { height: auto; }
        }
      `}</style>
      </div>
   );
};

export default CircuitHealth;

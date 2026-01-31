import React from 'react';
import {
  ShieldCheck,
  Zap,
  Lock,
  Activity,
  Server,
  Wifi,
  FileText,
  AlertTriangle,
  CheckCircle,
  XCircle,
  TrendingUp
} from 'lucide-react';
import {
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const Analytics = () => {
  // Mock Data for Tables and Lists
  const recentLogs = [
    { id: 1, type: 'security', event: 'Unauthorized Access Blocked', source: '192.168.1.105', time: '10:42:05 AM', status: 'blocked' },
    { id: 2, type: 'fault', event: 'Sensor Voltage Spike', source: 'SNX-IOT-009', time: '10:40:12 AM', status: 'warning' },
    { id: 3, type: 'audit', event: 'Policy Policy-001 Updated', source: 'Admin', time: '09:15:00 AM', status: 'info' },
    { id: 4, type: 'security', event: 'mTLS Handshake Success', source: 'SNX-IOT-001', time: '09:10:22 AM', status: 'success' },
  ];

  // Chart Data
  const faultTrendData = [
    { time: '00:00', faults: 2 },
    { time: '04:00', faults: 1 },
    { time: '08:00', faults: 5 },
    { time: '12:00', faults: 8 }, // Spike
    { time: '16:00', faults: 3 },
    { time: '20:00', faults: 2 },
  ];

  const deviceHealthData = [
    { name: 'Healthy', value: 110, color: '#10B981' }, // Safe Green
    { name: 'Warning', value: 12, color: '#F59E0B' },  // Warning Orange
    { name: 'Critical', value: 2, color: '#EF4444' },  // Danger Red
  ];

  const trafficData = [
    { time: '10:00', auth: 400, blocked: 20 },
    { time: '10:05', auth: 300, blocked: 50 },
    { time: '10:10', auth: 550, blocked: 10 },
    { time: '10:15', auth: 450, blocked: 30 },
    { time: '10:20', auth: 480, blocked: 15 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="analytics-page">
      <h2 className="page-title">System Analytics</h2>

      <div className="analytics-grid">

        {/* 1. Security & Authentication */}
        <div className="analytics-card security-section">
          <div className="card-header">
            <ShieldCheck size={20} className="text-safe" />
            <h3>Security & Authentication</h3>
          </div>
          <div className="card-content">
            <div className="mini-stat-row">
              <div className="mini-stat">
                <span className="label">Active Devices</span>
                <span className="value safe">124</span>
              </div>
              <div className="mini-stat">
                <span className="label">Blocked Attempts</span>
                <span className="value danger">2,491</span>
              </div>
            </div>
            <div className="status-item">
              <span className="label">mTLS Session Status</span>
              <span className="badge safe">99.8% Valid</span>
            </div>
            <div className="progress-bar-container">
              <div className="flex-between">
                <span>Auth Success Rate</span>
                <span>99.2%</span>
              </div>
              <div className="progress-bar">
                <div className="fill safe" style={{ width: '99.2%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Fault Diagnosis Analytics */}
        <div className="analytics-card fault-section">
          <div className="card-header">
            <Zap size={20} className="text-warning" />
            <h3>Fault Diagnosis</h3>
          </div>
          <div className="card-content">
            <div className="mini-stat-row">
              <div className="mini-stat">
                <span className="label">Total Faults</span>
                <span className="value warning">37</span>
              </div>
              <div className="mini-stat">
                <span className="label">Mitigated</span>
                <span className="value safe">35</span>
              </div>
            </div>

            {/* Fault Trend Chart */}
            <div className="chart-container" style={{ height: '120px', marginTop: '10px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={faultTrendData}>
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="faults" stroke="var(--color-warning)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="trend-indicator">
              <TrendingUp size={16} />
              <span>Detection Trend: Stable</span>
            </div>
          </div>
        </div>

        {/* 3. Device Trust & Health */}
        <div className="analytics-card trust-section">
          <div className="card-header">
            <Lock size={20} className="text-info" />
            <h3>Device Trust & Health</h3>
          </div>
          <div className="card-content centered">
            <div className="chart-container" style={{ height: '140px', width: '100%', position: 'relative' }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={deviceHealthData}
                    innerRadius={45}
                    outerRadius={60}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                  >
                    {deviceHealthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>

              <div className="trust-score-label">
                <span className="score">98</span>
                <span className="label">Trust Score</span>
              </div>
            </div>

            <div className="health-breakdown small-text">
              <div className="badge-dot safe">Healthy: 110</div>
              <div className="badge-dot warning">Warning: 12</div>
              <div className="badge-dot danger">Critical: 2</div>
            </div>
          </div>
        </div>

        {/* 4. Data Flow & Monitoring */}
        <div className="analytics-card data-section">
          <div className="card-header">
            <Activity size={20} className="text-purple" />
            <h3>Data Flow</h3>
          </div>
          <div className="card-content">
            <div className="data-row">
              <Wifi size={16} />
              <span>Real-time Traffic (msg/s)</span>
            </div>

            {/* Traffic Area Chart */}
            <div className="chart-container" style={{ height: '100px', marginTop: '5px' }}>
              <ResponsiveContainer>
                <AreaChart data={trafficData}>
                  <defs>
                    <linearGradient id="colorAuth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="auth" stroke="#10B981" fillOpacity={1} fill="url(#colorAuth)" />
                  <Area type="monotone" dataKey="blocked" stroke="#EF4444" fillOpacity={1} fill="transparent" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="legend">
              <span><span className="dot safe"></span> Auth</span>
              <span><span className="dot danger"></span> Blocked</span>
            </div>
          </div>
        </div>

        {/* 5. Access Control & Policy */}
        <div className="analytics-card access-section">
          <div className="card-header">
            <Server size={20} className="text-secondary" />
            <h3>Access Control</h3>
          </div>
          <div className="card-content">
            <div className="stat-grid">
              <div className="stat-box">
                <span className="label">Authorized Topics</span>
                <span className="value">1,204</span>
              </div>
              <div className="stat-box">
                <span className="label">Policy Violations</span>
                <span className="value warning">3</span>
              </div>
            </div>
            <div className="policy-note">
              <AlertTriangle size={14} className="text-warning" />
              <small>Last violation: 2 mins ago (Topic mismatch)</small>
            </div>
          </div>
        </div>

        {/* 6. Logs & Audit Summary */}
        <div className="analytics-card logs-section col-span-full">
          <div className="card-header">
            <FileText size={20} className="text-muted" />
            <h3>Logs & Audit Summary</h3>
          </div>
          <div className="card-content">
            <table className="logs-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Event</th>
                  <th>Source</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentLogs.map(log => (
                  <tr key={log.id}>
                    <td className="text-muted">{log.time}</td>
                    <td className="capitalize">{log.type}</td>
                    <td>{log.event}</td>
                    <td>{log.source}</td>
                    <td>
                      <span className={`status-badge ${log.status}`}>
                        {log.status === 'blocked' && <XCircle size={12} />}
                        {log.status === 'success' && <CheckCircle size={12} />}
                        {log.status === 'warning' && <AlertTriangle size={12} />}
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <style>{`
        .analytics-page {
          animation: fadeIn 0.5s ease-out;
        }

        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-md);
        }

        /* Span 2 cols for specific cards if screen is wide enough */
        @media (min-width: 1200px) {
           .col-span-full {
             grid-column: 1 / -1;
           }
        }

        .analytics-card {
           background: var(--bg-panel);
           border: 1px solid var(--border-subtle);
           border-radius: 8px;
           padding: var(--spacing-lg);
           display: flex;
           flex-direction: column;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-md);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid var(--border-subtle);
        }

        .card-header h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-main);
          margin: 0;
        }

        .card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          position: relative; /* For absolute positioning of trust score */
        }

        /* Helpers */
        .text-safe { color: var(--color-safe); }
        .text-warning { color: var(--color-warning); }
        .text-danger { color: var(--color-danger); }
        .text-info { color: #3b82f6; } /* Blue */
        .text-purple { color: #a855f7; } /* Purple */
        .text-secondary { color: #64748b; }
        .text-muted { color: var(--color-text-muted); }

        .mini-stat-row {
          display: flex;
          justify-content: space-between;
        }
        .mini-stat {
          display: flex;
          flex-direction: column;
        }
        .mini-stat .label {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }
        .mini-stat .value {
          font-size: 1.5rem;
          font-weight: 700;
        }
        .mini-stat .value.safe { color: var(--color-safe); }
        .mini-stat .value.warning { color: var(--color-warning); }
        .mini-stat .value.danger { color: var(--color-danger); }

        .progress-bar-container {
          margin-top: auto;
        }
        .progress-bar {
          height: 6px;
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
          margin-top: 5px;
          overflow: hidden;
        }
        .progress-bar .fill {
          height: 100%;
          background: var(--color-safe);
        }

        .trust-score-label {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
          z-index: 10;
        }
        .trust-score-label .score {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--color-text-main);
          line-height: 1;
          margin-bottom: 2px;
        }
        .trust-score-label .label {
          font-size: 0.65rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .health-breakdown {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: auto;
        }
        .badge-dot {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 0.75rem;
            color: var(--color-text-muted);
        }
         .badge-dot::before {
             content: '';
             display: block;
             width: 8px;
             height: 8px;
             border-radius: 50%;
         }
        .badge-dot.safe::before { background: var(--color-safe); }
        .badge-dot.warning::before { background: var(--color-warning); }
        .badge-dot.danger::before { background: var(--color-danger); }


        .data-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
        }
        
        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .stat-box {
          background: rgba(255,255,255,0.03);
          padding: 10px;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
        }
        .stat-box .label { font-size: 0.8rem; color: var(--color-text-muted); }
        .stat-box .value { font-size: 1.2rem; font-weight: 600; margin-top: 4px; }


        .logs-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }
        .logs-table th {
          text-align: left;
          padding: 10px;
          color: var(--color-text-muted);
          border-bottom: 1px solid var(--border-subtle);
          font-weight: 500;
        }
        .logs-table td {
          padding: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          color: var(--color-text-main);
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          text-transform: capitalize;
        }
        .status-badge.blocked { background: rgba(255,85,85,0.1); color: var(--color-danger); }
        .status-badge.warning { background: rgba(255,184,108,0.1); color: var(--color-warning); }
        .status-badge.success { background: rgba(0,255,157,0.1); color: var(--color-safe); }
        .status-badge.info { background: rgba(65, 105, 225, 0.1); color: #6495ED; }

        .flex-between { display: flex; justify-content: space-between; font-size: 0.9rem;}
        
        .custom-tooltip {
            background: var(--bg-panel);
            border: 1px solid var(--border-subtle);
            padding: 8px;
            border-radius: 4px;
            font-size: 0.8rem;
        }
        
        .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 4px;
        }
        .dot.safe { background: var(--color-safe); }
        .dot.danger { background: var(--color-danger); }
        
        .legend {
            display: flex;
            gap: 15px;
            font-size: 0.8rem;
            color: var(--color-text-muted);
            margin-top: 5px;
        }
      `}</style>
    </div>
  );
};

export default Analytics;

import React, { useState } from 'react';
import { FileText, Download, Filter, Search, Calendar, RefreshCw, CheckCircle, AlertTriangle, ShieldAlert, Wifi, Server, Activity } from 'lucide-react';

const LogsAudit = () => {
    const [activeTab, setActiveTab] = useState('auth');
    const [selectedSeverity, setSelectedSeverity] = useState('ALL');

    // System Status Data
    const systemStatus = {
        serviceStatus: 'ACTIVE',
        lastUpdate: 'seconds ago',
        totalLogs: 14502
    };

    // Tabs configuration
    const tabs = [
        { id: 'auth', label: 'Authentication', icon: <ShieldAlert size={16} /> },
        { id: 'security', label: 'Security Events', icon: <AlertTriangle size={16} /> },
        { id: 'fault', label: 'Fault Diagnosis', icon: <Activity size={16} /> },
        { id: 'lifecycle', label: 'Device Lifecycle', icon: <Server size={16} /> },
        { id: 'comm', label: 'Communication', icon: <Wifi size={16} /> },
        { id: 'audit', label: 'Audit Trail', icon: <FileText size={16} /> },
    ];

    // Mock Data Store
    const logData = {
        auth: [
            { id: 'AUTH-001', time: '14:42:01', deviceId: 'SNX-IOT-092', status: 'Success', method: 'mTLS Cert', details: 'Valid Cert Exp 2025' },
            { id: 'AUTH-002', time: '14:41:55', deviceId: 'SNX-IOT-011', status: 'Failed', method: 'Token', details: 'Expired Token' },
            { id: 'AUTH-003', time: '14:40:12', deviceId: 'SNX-GW-004', status: 'Success', method: 'mTLS Cert', details: 'Valid Cert' },
        ],
        security: [
            { id: 'SEC-101', time: '14:35:10', type: 'Unauthorized Access', source: 'IP 192.168.1.55', action: 'Blocked', severity: 'High' },
            { id: 'SEC-102', time: '14:30:00', type: 'Port Scan Detected', source: 'External', action: 'Firewall Drop', severity: 'Medium' },
            { id: 'SEC-103', time: '14:15:22', type: 'Policy Violation', source: 'SNX-IOT-011', action: 'Quarantined', severity: 'Critical' },
        ],
        fault: [
            { id: 'FLT-501', time: '14:28:05', deviceId: 'SNX-IOT-092', type: 'Voltage Spike', severity: 'Warning', status: 'Resolved' },
            { id: 'FLT-502', time: '14:10:11', deviceId: 'SNX-MOT-002', type: 'Sensor Drift', severity: 'Info', status: 'Monitoring' },
        ],
        lifecycle: [
            { id: 'LC-201', time: '12:00:00', event: 'Device Onboarding', deviceId: 'SNX-NEW-001', user: 'Admin', details: 'Keys Generated' },
            { id: 'LC-202', time: '10:15:30', event: 'Cert Renewal', deviceId: 'SNX-IOT-044', user: 'System', details: 'Auto-Renew Success' },
        ],
        comm: [
            { id: 'COM-991', time: '14:44:00', type: 'MQTT Connect', size: '2kb', topic: 'telemetry/v1', status: 'Connected' },
            { id: 'COM-992', time: '14:44:01', type: 'Publish Blocked', size: '15kb', topic: 'admin/config', status: 'Denied (ACL)' },
        ],
        audit: [
            { id: 'AUD-001', time: '14:00:00', action: 'Policy Update', user: 'Admin_User', details: 'Updated Voltage Thresholds' },
            { id: 'AUD-002', time: '09:00:00', action: 'System Startup', user: 'System', details: 'Service Init Complete' },
        ]
    };

    // Column Definitions used for rendering logic
    const renderTableContent = () => {
        const data = logData[activeTab] || [];

        switch (activeTab) {
            case 'auth':
                return data.map(row => (
                    <tr key={row.id}>
                        <td>{row.time}</td>
                        <td className="mono">{row.deviceId}</td>
                        <td><span className={`status-pill ${row.status.toLowerCase()}`}>{row.status}</span></td>
                        <td>{row.method}</td>
                        <td className="text-muted">{row.details}</td>
                    </tr>
                ));
            case 'security':
                return data.map(row => (
                    <tr key={row.id}>
                        <td>{row.time}</td>
                        <td className="text-warning">{row.type}</td>
                        <td className="mono">{row.source}</td>
                        <td>{row.action}</td>
                        <td><span className={`severity-tag ${row.severity.toLowerCase()}`}>{row.severity}</span></td>
                    </tr>
                ));
            case 'fault':
                return data.map(row => (
                    <tr key={row.id}>
                        <td>{row.time}</td>
                        <td className="mono">{row.deviceId}</td>
                        <td>{row.type}</td>
                        <td><span className={`severity-tag ${row.severity.toLowerCase()}`}>{row.severity}</span></td>
                        <td>{row.status}</td>
                    </tr>
                ));
            default:
                // Generic renderer for others
                return data.map(row => (
                    <tr key={row.id}>
                        <td>{row.time}</td>
                        <td className="mono">{row.deviceId || row.id}</td>
                        <td>{row.type || row.event || row.action}</td>
                        <td>{row.status || row.user || '-'}</td>
                        <td className="text-muted">{row.details || row.topic || '-'}</td>
                    </tr>
                ));
        }
    };

    const getHeaders = () => {
        switch (activeTab) {
            case 'auth': return ['Time', 'Device ID', 'Status', 'Method', 'Validation Details'];
            case 'security': return ['Time', 'Event Type', 'Source', 'Action Taken', 'Severity'];
            case 'fault': return ['Time', 'Device ID', 'Fault Type', 'Severity', 'Status'];
            default: return ['Time', 'ID/Ref', 'Event/Type', 'Status/User', 'Details'];
        }
    };

    return (
        <div className="logs-audit-page">
            {/* Header Section */}
            <div className="page-header">
                <div>
                    <h2 className="page-title">Logs & Audit Dashboard</h2>
                    <div className="system-status">
                        <div className="status-group">
                            <span className="status-label">Service:</span>
                            <span className="status-pill-badge">
                                <span className="dot active"></span> {systemStatus.serviceStatus}
                            </span>
                        </div>
                        <div className="status-group">
                            <span className="status-label">Last update:</span>
                            <span className="status-val">{systemStatus.lastUpdate}</span>
                        </div>
                    </div>
                </div>
                <div className="header-actions">
                    <button className="btn-secondary"><RefreshCw size={16} /> Refresh</button>
                    <button className="btn-primary"><Download size={16} /> Export Report</button>
                </div>
            </div>

            {/* Controls Bar */}
            <div className="controls-bar">
                <div className="filters">
                    <div className="search-box">
                        <Search size={16} className="search-icon" />
                        <input type="text" placeholder="Search Device ID..." />
                    </div>
                    <div className="filter-dropdown">
                        <Calendar size={16} />
                        <select>
                            <option>Last 1 Hour</option>
                            <option>Last 24 Hours</option>
                            <option>Last 7 Days</option>
                        </select>
                    </div>
                    <div className="filter-dropdown">
                        <Filter size={16} />
                        <select value={selectedSeverity} onChange={(e) => setSelectedSeverity(e.target.value)}>
                            <option value="ALL">All Severities</option>
                            <option value="HIGH">High / Critical</option>
                            <option value="WARN">Warning</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="main-content">
                {/* Tabs Sidebar */}
                <div className="tabs-sidebar">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.icon}
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Table View */}
                <div className="table-container panel">
                    <div className="custom-table-wrapper">
                        <table className="custom-table">
                            <thead>
                                <tr>
                                    {getHeaders().map((h, i) => <th key={i}>{h}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {renderTableContent()}
                            </tbody>
                        </table>
                    </div>

                    {(!logData[activeTab] || logData[activeTab].length === 0) && (
                        <div className="empty-state">No logs found for this criteria</div>
                    )}
                </div>
            </div>

            <style>{`
                .logs-audit-page {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-md);
                    height: 100%;
                    width: 100%; /* Ensure full width */
                    overflow: hidden;
                    animation: fadeIn 0.3s ease-out;
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    padding-bottom: 20px; /* Increased */
                    border-bottom: 1px solid var(--border-subtle);
                    flex-shrink: 0;
                }

                .system-status {
                    display: flex;
                    align-items: center;
                    gap: 30px; /* Increased gap */
                    margin-top: 10px;
                    font-size: 1rem; /* Bigger font */
                    color: var(--color-text-muted);
                }

                .status-group {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .status-label {
                    color: var(--color-text-muted);
                    font-weight: 500;
                    font-size: 0.95rem;
                }

                .status-pill-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(0, 255, 157, 0.1);
                    padding: 6px 16px; /* Bigger Badge */
                    border-radius: 16px;
                    color: var(--color-safe);
                    font-weight: 600;
                    border: 1px solid rgba(0,255,157,0.2);
                    font-size: 0.85rem; /* Bigger text */
                    white-space: nowrap;
                }

                .status-val {
                    color: var(--color-text-main);
                    font-weight: 500;
                    white-space: nowrap;
                    font-size: 1rem;
                }

                .dot.active {
                    width: 8px; /* Bigger dot */
                    height: 8px;
                    background: var(--color-safe);
                    border-radius: 50%;
                    box-shadow: 0 0 5px var(--color-safe);
                }

                .header-actions {
                    display: flex;
                    gap: 12px;
                }

                .btn-icon, .btn-primary, .btn-secondary {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 20px; /* Bigger buttons */
                    border-radius: 8px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                }
                
                .btn-primary {
                    background: var(--color-safe);
                    color: #000;
                    border: none;
                    font-weight: 600;
                }
                .btn-primary:hover { opacity: 0.9; }

                .btn-secondary {
                    background: transparent;
                    border: 1px solid var(--border-subtle);
                    color: var(--color-text-main);
                }
                .btn-secondary:hover { background: rgba(255,255,255,0.05); }

                .controls-bar {
                    background: var(--bg-card);
                    padding: 15px 20px; /* More padding */
                    border-radius: 10px;
                    border: 1px solid var(--border-subtle);
                    flex-shrink: 0;
                }

                .filters {
                    display: flex;
                    gap: 20px;
                    align-items: center;
                    flex-wrap: wrap;
                }

                .search-box {
                    display: flex;
                    align-items: center;
                    background: rgba(0,0,0,0.2);
                    border: 1px solid var(--border-subtle);
                    padding: 8px 14px; /* Larger input area */
                    border-radius: 6px;
                    flex: 1;
                    min-width: 250px;
                    max-width: 400px;
                }
                .search-box input {
                    background: transparent;
                    border: none;
                    color: var(--color-text-main);
                    margin-left: 10px;
                    outline: none;
                    width: 100%;
                    font-size: 1rem;
                }
                .search-icon { color: var(--color-text-muted); }

                .filter-dropdown {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(0,0,0,0.2);
                    padding: 8px 14px;
                    border-radius: 6px;
                    border: 1px solid var(--border-subtle);
                    color: var(--color-text-muted);
                }

                .filter-dropdown select {
                    background: transparent;
                    border: none;
                    color: var(--color-text-main);
                    outline: none;
                    cursor: pointer;
                    font-size: 1rem;
                }
                .filter-dropdown select option {
                    background: var(--bg-card);
                    color: var(--color-text-main);
                }

                .main-content {
                    display: flex;
                    gap: 20px; /* Increased gap */
                    flex: 1;
                    overflow: hidden; /* Contain scroll */
                }

                .tabs-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    width: 240px; /* Wider sidebar */
                    flex-shrink: 0;
                    overflow-y: auto;
                }

                .tab-btn {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 14px 18px; /* Larger tabs */
                    background: transparent;
                    border: none;
                    color: var(--color-text-muted);
                    text-align: left;
                    cursor: pointer;
                    border-radius: 8px;
                    transition: all 0.2s;
                    font-size: 1rem; /* Larger font */
                }
                .tab-btn:hover {
                    background: rgba(255,255,255,0.03);
                    color: var(--color-text-main);
                }
                .tab-btn.active {
                    background: rgba(0, 255, 157, 0.1);
                    color: var(--color-safe);
                    font-weight: 500;
                    border-left: 3px solid var(--color-safe);
                    border-radius: 0 8px 8px 0;
                }

                .table-container {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    background: var(--bg-card);
                    border-radius: 10px;
                    border: 1px solid var(--border-subtle);
                    overflow: hidden;
                }

                .custom-table-wrapper {
                     flex: 1;
                     overflow: auto;
                }

                .custom-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .custom-table th {
                    text-align: left;
                    padding: 16px 20px; /* More breathing room */
                    background: rgba(0,0,0,0.3);
                    color: var(--color-text-muted);
                    font-weight: 600;
                    border-bottom: 1px solid var(--border-subtle);
                    position: sticky;
                    top: 0;
                    z-index: 10;
                    font-size: 0.95rem; /* Larger header */
                }

                .custom-table td {
                    padding: 16px 20px; /* More breathing room */
                    border-bottom: 1px solid rgba(255,255,255,0.03);
                    color: var(--color-text-main);
                    font-size: 0.95rem; /* Larger body text */
                }
                .custom-table tr:hover { background: rgba(255,255,255,0.02); }

                .status-pill {
                    padding: 4px 10px;
                    border-radius: 12px;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    font-weight: 600;
                }
                .status-pill.success { background: rgba(16, 185, 129, 0.2); color: #10B981; }
                .status-pill.failed { background: rgba(239, 68, 68, 0.2); color: #EF4444; }

                .severity-tag {
                    font-weight: 700;
                    font-size: 0.85rem;
                }
                .severity-tag.high, .severity-tag.critical { color: #EF4444; }
                .severity-tag.medium, .severity-tag.warning { color: #F59E0B; }
                .severity-tag.info { color: #3B82F6; }

                .mono { font-family: monospace; color: #a8b3cf; }
                .text-muted { color: var(--color-text-muted); }
                .text-warning { color: var(--color-warning); }

                .empty-state {
                    padding: 40px;
                    text-align: center;
                    color: var(--color-text-muted);
                    font-style: italic;
                }
            `}</style>
        </div>
    );
};

export default LogsAudit;

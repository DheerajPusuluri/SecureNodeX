import React, { useState } from 'react';
import { Save, RotateCcw, Monitor, Shield, Smartphone, Wifi, Activity, FileText, Bell, Users, Server } from 'lucide-react';

const Settings = () => {
    // Mock States for interactivity
    const [config, setConfig] = useState({
        systemName: 'SecureNodeX-Enterprise',
        envMode: 'Production',
        mtlsEnabled: true,
        logRetention: '30 Days',
        alertSeverity: 'High'
    });

    const handleToggle = (key) => {
        // Mock toggle
    };

    return (
        <div className="settings-page">
            <div className="page-header">
                <h2 className="page-title">System Settings & Configuration</h2>
                <div className="header-actions">
                    <button className="btn-secondary"><RotateCcw size={18} /> Reset Defaults</button>
                    <button className="btn-primary"><Save size={18} /> Save Changes</button>
                </div>
            </div>

            <div className="settings-grid">

                {/* 1. System Configuration */}
                <div className="setting-card">
                    <div className="card-header">
                        <Monitor className="icon" size={24} />
                        <h3>1. System Configuration</h3>
                    </div>
                    <div className="form-group">
                        <label>System Name</label>
                        <input type="text" defaultValue={config.systemName} />
                    </div>
                    <div className="form-group">
                        <label>Environment Mode</label>
                        <select defaultValue={config.envMode}>
                            <option>Development</option>
                            <option>Staging</option>
                            <option>Production</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Time Zone</label>
                        <select defaultValue="UTC-5">
                            <option>UTC (Coordinated Universal Time)</option>
                            <option>UTC-5 (Eastern Time)</option>
                            <option>UTC-8 (Pacific Time)</option>
                            <option>UTC+5:30 (IST)</option>
                        </select>
                    </div>
                </div>

                {/* 2. Security Settings */}
                <div className="setting-card">
                    <div className="card-header">
                        <Shield className="icon text-safe" size={24} />
                        <h3>2. Security Settings</h3>
                    </div>
                    <div className="form-row">
                        <label>Enable mTLS Enforcement</label>
                        <input type="checkbox" defaultChecked={true} className="toggle" />
                    </div>
                    <div className="form-group">
                        <label>Certificate Validity Duration</label>
                        <select defaultValue="365">
                            <option value="90">90 Days</option>
                            <option value="365">1 Year</option>
                            <option value="730">2 Years</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label>Enable Certificate Revocation</label>
                        <input type="checkbox" defaultChecked={true} className="toggle" />
                    </div>
                </div>

                {/* 3. Device Management */}
                <div className="setting-card">
                    <div className="card-header">
                        <Smartphone className="icon text-info" size={24} />
                        <h3>3. Device Management</h3>
                    </div>
                    <div className="form-group">
                        <label>Registration Policy</label>
                        <select defaultValue="Manual">
                            <option>Auto-Approve</option>
                            <option>Manual Review</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Max Devices Allowed</label>
                        <input type="number" defaultValue="5000" />
                    </div>
                    <div className="form-group">
                        <label>Default Device Role</label>
                        <input type="text" defaultValue="Sensor_Node" readOnly />
                    </div>
                </div>

                {/* 4. Communication Settings */}
                <div className="setting-card">
                    <div className="card-header">
                        <Wifi className="icon text-warning" size={24} />
                        <h3>4. Communication</h3>
                    </div>
                    <div className="form-group">
                        <label>MQTT Broker Address</label>
                        <input type="text" defaultValue="mqtt.securenodex.io" />
                    </div>
                    <div className="form-group">
                        <label>Port Number</label>
                        <input type="number" defaultValue="8883" />
                    </div>
                    <div className="form-row">
                        <label>TLS Only Mode</label>
                        <input type="checkbox" defaultChecked={true} className="toggle" />
                    </div>
                </div>

                {/* 5. Fault Diagnosis */}
                <div className="setting-card">
                    <div className="card-header">
                        <Activity className="icon text-danger" size={24} />
                        <h3>5. Fault Diagnosis</h3>
                    </div>
                    <div className="form-row">
                        <label>Enable Fault Detection</label>
                        <input type="checkbox" defaultChecked={true} className="toggle" />
                    </div>
                    <div className="form-group">
                        <label>Severity Threshold</label>
                        <input type="range" min="1" max="10" defaultValue="7" />
                    </div>
                    <div className="form-group">
                        <label>Rule Evaluation Interval (ms)</label>
                        <input type="number" defaultValue="500" />
                    </div>
                </div>

                {/* 6. Logging & Audit */}
                <div className="setting-card">
                    <div className="card-header">
                        <FileText className="icon" size={24} />
                        <h3>6. Logging & Audit</h3>
                    </div>
                    <div className="form-row">
                        <label>Enable Global Logging</label>
                        <input type="checkbox" defaultChecked={true} className="toggle" />
                    </div>
                    <div className="form-group">
                        <label>Log Retention Period</label>
                        <select defaultValue="30 Days">
                            <option>7 Days</option>
                            <option>30 Days</option>
                            <option>90 Days</option>
                            <option>1 Year</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Log Severity Level</label>
                        <select defaultValue="Info">
                            <option>Debug</option>
                            <option>Info</option>
                            <option>Warning</option>
                            <option>Error</option>
                        </select>
                    </div>
                </div>

                {/* 7. Alert & Notification */}
                <div className="setting-card">
                    <div className="card-header">
                        <Bell className="icon text-warning" size={24} />
                        <h3>7. Alerts & Notifications</h3>
                    </div>
                    <div className="form-row">
                        <label>Enable Security Alerts</label>
                        <input type="checkbox" defaultChecked={true} className="toggle" />
                    </div>
                    <div className="form-row">
                        <label>Enable Fault Alerts</label>
                        <input type="checkbox" defaultChecked={true} className="toggle" />
                    </div>
                    <div className="form-group">
                        <label>Min. Alert Severity</label>
                        <select defaultValue="High">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Critical</option>
                        </select>
                    </div>
                </div>

                {/* 8. User & Access */}
                <div className="setting-card">
                    <div className="card-header">
                        <Users className="icon text-info" size={24} />
                        <h3>8. User & Access</h3>
                    </div>
                    <div className="form-group">
                        <label>Admin Username</label>
                        <input type="text" defaultValue="admin" disabled />
                    </div>
                    <button className="btn-outline">Update Password</button>
                    <div className="form-group" style={{ marginTop: '10px' }}>
                        <label>RBAC Policy Version</label>
                        <input type="text" defaultValue="v2.1 (Strict)" readOnly />
                    </div>
                </div>

                {/* 9. Backup & Maintenance */}
                <div className="setting-card">
                    <div className="card-header">
                        <Server className="icon text-safe" size={24} />
                        <h3>9. Backup & Maintenance</h3>
                    </div>
                    <div className="action-row">
                        <button className="btn-outline">Backup Config Now</button>
                        <span className="last-run">Last: 2h ago</span>
                    </div>
                    <div className="action-row" style={{ marginTop: '15px' }}>
                        <button className="btn-danger-outline">Restart System</button>
                    </div>
                </div>

                {/* 10. Save Controls (Repeated for visibility or as a summary card) */}
                <div className="setting-card highlight">
                    <div className="card-header">
                        <Save className="icon" size={24} />
                        <h3>10. Actions</h3>
                    </div>
                    <p className="desc">Review all changes before applying.</p>
                    <div className="actions-stack">
                        <button className="btn-primary full-width">Save & Apply All Changes</button>
                        <button className="btn-secondary full-width">Discard Unsaved Changes</button>
                    </div>
                </div>

            </div>

            <style>{`
                .settings-page {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    height: 100%;
                    width: 100%;
                    overflow-y: auto;
                    animation: fadeIn 0.3s ease-out;
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 10px;
                }

                .page-title {
                    font-size: 2rem;
                }

                .header-actions {
                    display: flex;
                    gap: 12px;
                }

                .settings-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 24px;
                    padding-bottom: 40px;
                }

                .setting-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-subtle);
                    border-radius: 12px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    transition: transform 0.2s;
                }

                .setting-card:hover {
                    transform: translateY(-2px);
                    border-color: rgba(255,255,255,0.1);
                }

                .setting-card.highlight {
                    border-color: var(--color-safe);
                    background: rgba(0, 255, 157, 0.02);
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    padding-bottom: 12px;
                    margin-bottom: 5px;
                }

                .card-header h3 {
                    font-size: 1.3rem;
                    font-weight: 600;
                    margin: 0;
                    color: var(--color-text-main);
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .form-group label {
                    color: var(--color-text-muted);
                    font-size: 0.95rem;
                }

                .form-group input[type="text"],
                .form-group input[type="number"],
                .form-group select {
                    background: rgba(0,0,0,0.2);
                    border: 1px solid var(--border-subtle);
                    padding: 10px;
                    border-radius: 6px;
                    color: var(--color-text-main);
                    font-size: 1rem;
                    outline: none;
                }
                .form-group input:focus, .form-group select:focus {
                    border-color: var(--color-safe);
                }

                .form-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 5px 0;
                }
                .form-row label {
                    font-size: 1rem;
                    color: var(--color-text-main);
                }

                .toggle {
                    width: 20px;
                    height: 20px;
                    accent-color: var(--color-safe);
                    cursor: pointer;
                }

                .btn-primary, .btn-secondary, .btn-outline, .btn-danger-outline {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 10px 18px;
                    border-radius: 6px;
                    font-size: 1rem;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.2s;
                    border: none;
                }

                .btn-primary { background: var(--color-safe); color: #000; }
                .btn-primary:hover { opacity: 0.9; }

                .btn-secondary { background: transparent; border: 1px solid var(--border-subtle); color: var(--color-text-main); }
                .btn-secondary:hover { background: rgba(255,255,255,0.05); }

                .btn-outline { background: transparent; border: 1px solid var(--color-safe); color: var(--color-safe); }
                .btn-outline:hover { background: rgba(0,255,157,0.1); }

                .btn-danger-outline { background: transparent; border: 1px solid #ef4444; color: #ef4444; }
                .btn-danger-outline:hover { background: rgba(239,68,68,0.1); }

                .full-width { width: 100%; margin-top: 10px; }
                .actions-stack { display: flex; flex-direction: column; gap: 5px; }

                .text-safe { color: var(--color-safe); }
                .text-info { color: #3b82f6; }
                .text-warning { color: var(--color-warning); }
                .text-danger { color: #ef4444; }

                .last-run { font-size: 0.85rem; color: var(--color-text-muted); margin-left: 10px; }
                .action-row { display: flex; align-items: center; }

            `}</style>
        </div>
    );
};

export default Settings;

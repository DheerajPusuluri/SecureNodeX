import {
  LayoutDashboard,
  ShieldAlert,
  Activity,
  Zap,
  BarChart3,
  FileText,
  Settings,
  Sliders
} from 'lucide-react';

const Sidebar = ({ currentPage, onNavigate }) => {
  const navItems = [
    { label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { label: 'Security Prevention', icon: <ShieldAlert size={20} /> },
    { label: 'Circuit Health', icon: <Activity size={20} /> },
    { label: 'Fault Prevention', icon: <Zap size={20} /> },
    { label: 'Analytics', icon: <BarChart3 size={20} /> },
    { label: 'Logs & Audit', icon: <FileText size={20} /> },
    { label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/src/assets/logo.png" alt="SecureNodeX" className="sidebar-logo" />
        <span className="brand-name">SecureNodeX</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate(item.label); }}
            className={`nav-item ${currentPage === item.label ? 'active' : ''}`}
          >
            {item.icon}
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="system-status">
          <div className="status-indicator online"></div>
          <span>System Online</span>
        </div>
      </div>

      <style>{`
        .sidebar {
          width: 260px;
          background-color: var(--bg-panel);
          border-right: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 50;
        }

        .sidebar-header {
          padding: var(--spacing-lg);
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          border-bottom: 1px solid var(--border-subtle);
        }

        .sidebar-logo {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }

        .brand-name {
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.5px;
          color: var(--color-safe);
        }

        .sidebar-nav {
          flex: 1;
          padding: var(--spacing-md) 0;
          overflow-y: auto;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          color: var(--color-text-muted);
          text-decoration: none;
          transition: all 0.2s ease;
          border-left: 3px solid transparent;
        }

        .nav-item:hover {
          background-color: rgba(255, 255, 255, 0.03);
          color: var(--color-text-main);
        }

        .nav-item.active {
          background-color: rgba(0, 255, 157, 0.05);
          color: var(--color-safe);
          border-left-color: var(--color-safe);
        }

        .sidebar-footer {
          padding: var(--spacing-lg);
          border-top: 1px solid var(--border-subtle);
          color: var(--color-text-muted);
        }

        .system-status {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
          font-size: 0.9rem;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .status-indicator.online {
          background-color: var(--color-safe);
          box-shadow: 0 0 8px var(--color-safe);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;

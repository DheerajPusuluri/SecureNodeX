import { ShieldAlert, Zap, Lock, Activity } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import DeviceHealthCard from '../components/dashboard/DeviceHealthCard';
import TrustMatrix from '../components/visualizations/TrustMatrix';

const Overview = () => {
  // Mock Data
  const devices = [
    { id: 'SNX-IOT-001', name: 'Hydraulic Press Controller', status: 'secure', trustScore: 98, faultsPrevented: 12, lastActive: 'Live' },
    { id: 'SNX-IOT-004', name: 'Cooling System Unit', status: 'secure', trustScore: 99, faultsPrevented: 0, lastActive: 'Live' },
    { id: 'SNX-IOT-009', name: 'Power Distribution Node', status: 'warning', trustScore: 76, faultsPrevented: 3, lastActive: '2m ago' },
  ];

  return (
    <div className="overview-page">
      <h2 className="page-title">System Overview</h2>

      {/* KPI Section */}
      <section className="kpi-grid">
        <StatCard
          title="Active Devices"
          value="124"
          subtext="Authenticated via mTLS"
          icon={Activity}
          status="safe"
        />
        <StatCard
          title="Unauthorized Blocked"
          value="2,491"
          subtext="Zero access allowed"
          icon={ShieldAlert}
          status="safe"
        />
        <StatCard
          title="Faults Prevented"
          value="37"
          subtext="Damage prevented in real-time"
          icon={Zap}
          status="warning"
        />
        <StatCard
          title="System Trust Score"
          value="98.4%"
          subtext="High Integrity"
          icon={Lock}
          status="safe"
        />
      </section>

      {/* Trust Matrix */}
      <section className="trust-section">
        <TrustMatrix />
      </section>

      {/* Live Health Section */}
      <section className="live-health-section">
        <div className="section-header">
          <h3>Live Device Safety Status</h3>
          <button className="view-all-btn">View All Devices</button>
        </div>
        <div className="device-grid">
          {devices.map(device => (
            <DeviceHealthCard key={device.id} device={device} />
          ))}
        </div>
      </section>

      <style>{`
        .overview-page {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .page-title {
          font-size: 1.5rem;
          color: var(--color-text-main);
          margin-bottom: var(--spacing-sm);
        }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-lg);
        }

        .live-health-section {
          margin-top: var(--spacing-lg);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-md);
        }

        .section-header h3 {
          font-size: 1.1rem;
          color: var(--color-text-main);
        }

        .view-all-btn {
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--color-text-muted);
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 0.8rem;
          transition: all 0.2s;
        }

        .view-all-btn:hover {
          border-color: var(--color-safe);
          color: var(--color-safe);
        }

        .device-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: var(--spacing-lg);
        }
      `}</style>
    </div>
  );
};

export default Overview;

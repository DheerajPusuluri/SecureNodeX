const StatCard = ({ title, value, subtext, icon: Icon, status = 'neutral' }) => {
    const statusColors = {
        safe: 'var(--color-safe)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        neutral: 'var(--color-text-main)'
    };

    const color = statusColors[status] || statusColors.neutral;

    return (
        <div className="stat-card">
            <div className="stat-content">
                <h3 className="stat-title">{title}</h3>
                <div className="stat-value">{value}</div>
                {subtext && <div className="stat-subtext">{subtext}</div>}
            </div>
            <div className="stat-icon">
                <Icon size={24} />
            </div>

            <style>{`
        .stat-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-left: 4px solid ${color};
          border-radius: 4px; /* Industrial look */
          padding: var(--spacing-lg);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .stat-title {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: var(--spacing-sm);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-text-main);
          line-height: 1.2;
        }

        .stat-subtext {
          font-size: 0.85rem;
          color: ${color};
          margin-top: var(--spacing-sm);
          font-weight: 500;
        }

        .stat-icon {
          color: ${color};
          opacity: 0.8;
          background: rgba(255, 255, 255, 0.05);
          padding: 8px;
          border-radius: 4px;
        }
      `}</style>
        </div>
    );
};

export default StatCard;

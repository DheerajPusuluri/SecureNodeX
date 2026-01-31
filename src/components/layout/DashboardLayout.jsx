import Sidebar from './Sidebar';
import GlobalStatusHeader from './GlobalStatusHeader';

const DashboardLayout = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />
      <div className="main-content-wrapper">
        <GlobalStatusHeader />
        <main className="main-content">
          {children}
        </main>
      </div>

      <style>{`
        .dashboard-layout {
          display: flex;
          min-height: 100vh;
        }

        .main-content-wrapper {
          flex: 1;
          margin-left: 260px; /* Width of sidebar */
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
          padding: var(--spacing-lg);
          max-width: 1600px;
          width: 100%;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;

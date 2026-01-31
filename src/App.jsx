import { useState } from 'react'
import DashboardLayout from './components/layout/DashboardLayout'
import Overview from './pages/Overview'
import SecurityPrevention from './pages/SecurityPrevention'
import FaultPrevention from './pages/FaultPrevention'
import CircuitHealth from './pages/CircuitHealth'
import LogsAudit from './pages/LogsAudit'
import Settings from './pages/Settings'
import Analytics from './pages/Analytics'
import './styles/global.css'

function App() {
    const [currentPage, setCurrentPage] = useState('Overview');

    const renderPage = () => {
        switch (currentPage) {
            case 'Overview': return <Overview />;
            case 'Security Prevention': return <SecurityPrevention />;
            case 'Circuit Health': return <CircuitHealth />;
            case 'Fault Prevention': return <FaultPrevention />;
            case 'Analytics': return <Analytics />;
            case 'Logs & Audit': return <LogsAudit />;
            case 'Settings': return <Settings />;
            default: return <Overview />;
        }
    };

    return (
        <DashboardLayout currentPage={currentPage} onNavigate={setCurrentPage}>
            {renderPage()}
        </DashboardLayout>
    )
}

export default App

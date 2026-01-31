import { useState } from 'react'
import DashboardLayout from './components/layout/DashboardLayout'
import Overview from './pages/Overview'
import SecurityPrevention from './pages/SecurityPrevention'
import CircuitFaultPrevention from './pages/CircuitFaultPrevention'
import LogsAudit from './pages/LogsAudit'
import SystemRules from './pages/SystemRules'
import './styles/global.css'

function App() {
    const [currentPage, setCurrentPage] = useState('Overview');

    const renderPage = () => {
        switch (currentPage) {
            case 'Overview': return <Overview />;
            case 'Security Prevention': return <SecurityPrevention />;
            case 'Circuit Health': return <CircuitFaultPrevention />; // Reusing circuit page for now or separate based on exact req
            case 'Fault Prevention': return <CircuitFaultPrevention />;
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

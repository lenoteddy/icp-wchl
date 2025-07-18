import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/use-auth';
import HomePage from './pages/HomePage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';

/**
 * Main application component that sets up routing and authentication context.
 * 
 * Provides three main routes:
 * - / : Marketing homepage with product information
 * - /onboarding : Wallet connection and user authentication
 * - /dashboard : Main application interface for lending/borrowing
 */
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
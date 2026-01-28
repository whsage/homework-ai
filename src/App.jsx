import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import HomeworkDetailPage from './pages/HomeworkDetailPage';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import NewSession from './pages/NewSession';
import History from './pages/History';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import FAQ from './pages/FAQ';
import MathTutoring from './pages/MathTutoring';
import MathLearning from './pages/subjects/MathLearning';
import QuadraticFunctions from './pages/subjects/math/QuadraticFunctions';


import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/math-tutoring" element={<MathTutoring />} />
            <Route path="/subjects/math" element={<MathLearning />} />
            <Route path="/subjects/math/quadratic-functions" element={<QuadraticFunctions />} />
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="new" element={<NewSession />} />
              <Route path="homework/:id" element={<HomeworkDetailPage />} />
              <Route path="history" element={<History />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="settings" element={<Settings />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

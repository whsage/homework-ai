import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import HomeworkDetailPage from './pages/HomeworkDetailPage';
import Login from './pages/Login';
import Register from './pages/Register';
import NewSession from './pages/NewSession';
import History from './pages/History';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="new" element={<NewSession />} />
          <Route path="homework/:id" element={<HomeworkDetailPage />} />
          <Route path="history" element={<History />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

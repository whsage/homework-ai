import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const HomeworkDetailPage = lazy(() => import('./pages/HomeworkDetailPage'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const NewSession = lazy(() => import('./pages/NewSession'));
const History = lazy(() => import('./pages/History'));
const Statistics = lazy(() => import('./pages/Statistics'));
const Settings = lazy(() => import('./pages/Settings'));
const FAQ = lazy(() => import('./pages/FAQ'));

const Subjects = lazy(() => import('./pages/Subjects'));
const MathLearning = lazy(() => import('./pages/subjects/MathLearning'));
const QuadraticFunctions = lazy(() => import('./pages/subjects/math/QuadraticFunctions'));
const MathTopicPage = lazy(() => import('./pages/subjects/math/MathTopicPage'));
const ChineseLearning = lazy(() => import('./pages/subjects/ChineseLearning'));
const ChineseTopicPage = lazy(() => import('./pages/subjects/chinese/ChineseTopicPage'));
const EnglishLearning = lazy(() => import('./pages/subjects/english/EnglishLearning'));
const EnglishTopicPage = lazy(() => import('./pages/subjects/english/EnglishTopicPage'));

import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { RewardProvider } from './context/RewardContext';
import RewardNotification from './components/rewards/RewardNotification';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <RewardProvider>
          <BrowserRouter>
            <RewardNotification />
            <Suspense fallback={
              <div className="flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-900">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
              </div>
            }>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset-password" element={<ResetPassword />} />

                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="subjects" element={<Subjects />} />
                  <Route path="subjects/math" element={<MathLearning />} />
                  <Route path="subjects/math/quadratic-functions" element={<QuadraticFunctions />} />
                  <Route path="subjects/math/:topicId" element={<MathTopicPage />} />
                  <Route path="subjects/chinese" element={<ChineseLearning />} />
                  <Route path="subjects/chinese/:topicId" element={<ChineseTopicPage />} />
                  <Route path="subjects/english" element={<EnglishLearning />} />
                  <Route path="subjects/english/:topicId" element={<EnglishTopicPage />} />
                  <Route path="new" element={<NewSession />} />
                  <Route path="homework/:id" element={<HomeworkDetailPage />} />
                  <Route path="history" element={<History />} />
                  <Route path="statistics" element={<Statistics />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="faq" element={<FAQ />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </RewardProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

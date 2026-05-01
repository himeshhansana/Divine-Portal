import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
function AppLayout() {
  const location = useLocation();
  const isAuthPage =
  location.pathname === '/login' || location.pathname === '/register';
  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>);

  }
  return (
    <div className="min-h-screen bg-white font-inter selection:bg-soft-gold/30 selection:text-royal-green">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>);

}
export function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>);

}
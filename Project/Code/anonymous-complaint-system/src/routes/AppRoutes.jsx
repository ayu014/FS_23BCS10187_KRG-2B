// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HomePage from '../pages/HomePage';
// We will import other pages here as we create them

const AppRoutes = () => {
  const styles = {
    container: {
      maxWidth: '1140px',
      margin: '0 auto',
      padding: '2rem 1rem',
    }
  };

  return (
    <Router>
      <Navbar />
      <main style={styles.container}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes here later */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
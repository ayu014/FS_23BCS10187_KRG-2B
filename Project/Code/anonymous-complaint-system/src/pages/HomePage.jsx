// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isCard1Hovered, setCard1Hovered] = useState(false);
  const [isCard2Hovered, setCard2Hovered] = useState(false);

  const styles = {
    container: { textAlign: 'center' },
    header: { marginBottom: '3rem' },
    title: { fontSize: '2.5rem', marginBottom: '1rem' },
    subtitle: { fontSize: '1.2rem', color: '#6c757d' },
    actions: { display: 'flex', justifyContent: 'center', gap: '2rem' },
    card: {
      backgroundColor: '#ffffff',
      border: '1px solid #dee2e6',
      borderRadius: '8px',
      padding: '2rem',
      width: '300px',
      textDecoration: 'none',
      color: '#212529',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
    },
    cardTitle: { marginTop: 0, color: 'var(--primary-color)' }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to the Anonymous Complaint Readdressal System</h1>
        <p style={styles.subtitle}>
          A secure and transparent platform to voice your concerns without fear of retaliation.
        </p>
      </header>

      <div style={styles.actions}>
        <Link 
          to="/submit-complaint"
          style={{ ...styles.card, ...(isCard1Hovered ? styles.cardHover : {}) }}
          onMouseEnter={() => setCard1Hovered(true)}
          onMouseLeave={() => setCard1Hovered(false)}
        >
          <h2 style={styles.cardTitle}>Submit a New Complaint</h2>
          <p>Lodge a new grievance anonymously and securely.</p>
        </Link>
        <Link 
          to="/track-status"
          style={{ ...styles.card, ...(isCard2Hovered ? styles.cardHover : {}) }}
          onMouseEnter={() => setCard2Hovered(true)}
          onMouseLeave={() => setCard2Hovered(false)}
        >
          <h2 style={styles.cardTitle}>Track Your Complaint</h2>
          <p>Check the real-time progress of your submitted complaint using its unique ID.</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
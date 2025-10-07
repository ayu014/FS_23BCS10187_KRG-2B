// src/components/layout/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Style object for our component
  const styles = {
    nav: {
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    container: {
      maxWidth: '1140px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    brand: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'var(--primary-color)',
      textDecoration: 'none',
    },
    links: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      gap: '1.5rem',
    },
    linkItem: {
      textDecoration: 'none',
      color: '#212529',
      fontWeight: 500,
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.brand}>
          ACRS
        </Link>
        <ul style={styles.links}>
          <li><Link to="/" style={styles.linkItem}>Home</Link></li>
          <li><Link to="/submit-complaint" style={styles.linkItem}>Submit Complaint</Link></li>
          <li><Link to="/track-status" style={styles.linkItem}>Track Status</Link></li>
          <li><Link to="/admin/login" style={styles.linkItem}>Admin</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
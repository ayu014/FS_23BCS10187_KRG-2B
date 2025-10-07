// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      textAlign: 'center',
      padding: '1.5rem',
      marginTop: 'auto', // Pushes footer to the bottom
      backgroundColor: '#343a40',
      color: 'white',
    }
  };

  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Anonymous Complaint Readdressal System. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
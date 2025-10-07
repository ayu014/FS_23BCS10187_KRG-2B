// src/App.jsx
import React from 'react';
import AppRoutes from './routes/AppRoutes';

function App() {
  const styles = {
    app: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }
  };

  return (
    <div style={styles.app}>
      <AppRoutes />
    </div>
  );
}

export default App;
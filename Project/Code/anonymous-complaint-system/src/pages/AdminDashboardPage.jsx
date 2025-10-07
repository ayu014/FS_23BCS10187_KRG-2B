// src/pages/AdminDashboardPage.jsx
import React, { useState, useEffect } from 'react';
import { getAllComplaints } from '../services/api';

const AdminDashboardPage = () => {
  const [complaints, setComplaints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const styles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '2rem',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    th: {
      padding: '1rem',
      textAlign: 'left',
      borderBottom: '1px solid #dee2e6',
      backgroundColor: '#f8f9fa',
    },
    td: {
      padding: '1rem',
      textAlign: 'left',
      borderBottom: '1px solid #dee2e6',
    }
  };

  useEffect(() => {
    const fetchComplaints = async () => {
      const response = await getAllComplaints();
      if (response.success) {
        setComplaints(response.complaints);
      }
      setIsLoading(false);
    };
    fetchComplaints();
  }, []);

  if (isLoading) {
    return <h2>Loading complaints...</h2>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Showing {complaints.length} total complaints.</p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Submitted On</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(c => (
            <tr key={c.id}>
              <td style={styles.td}>{c.id}</td>
              <td style={styles.td}>{c.title}</td>
              <td style={styles.td}>{c.status}</td>
              <td style={styles.td}>{new Date(c.submittedAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboardPage;
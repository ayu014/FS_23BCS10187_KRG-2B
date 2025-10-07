// src/components/common/ComplaintCard.jsx
import React from 'react';

const ComplaintCard = ({ complaint }) => {
  if (!complaint) return null;

  const getStatusStyle = (status) => {
    const baseStyle = {
      padding: '0.25rem 0.75rem',
      borderRadius: '12px',
      fontWeight: 'bold',
      color: 'white',
    };
    switch (status.toLowerCase()) {
      case 'submitted': return { ...baseStyle, backgroundColor: '#0d6efd' };
      case 'in review': return { ...baseStyle, backgroundColor: '#ffc107' };
      case 'resolved': return { ...baseStyle, backgroundColor: '#198754' };
      default: return baseStyle;
    }
  };

  const styles = {
    card: {
      border: '1px solid #dee2e6',
      borderRadius: '8px',
      padding: '1.5rem',
      marginTop: '2rem',
      backgroundColor: '#ffffff',
    },
  };

  return (
    <div style={styles.card}>
      <h3>Complaint Details</h3>
      <p><strong>ID:</strong> {complaint.id}</p>
      <p><strong>Title:</strong> {complaint.title}</p>
      <p><strong>Status:</strong> <span style={getStatusStyle(complaint.status)}>{complaint.status}</span></p>
      <p><strong>Submitted On:</strong> {new Date(complaint.submittedAt).toLocaleString()}</p>
    </div>
  );
};

export default ComplaintCard;
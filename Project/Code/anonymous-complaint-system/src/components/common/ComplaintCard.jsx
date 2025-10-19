// src/components/common/ComplaintCard.jsx
import React from 'react';

const ComplaintCard = ({ complaint }) => {
  if (!complaint) return null;

  const getStatusStyle = (status) => {
    // ... (This function remains the same)
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
      textAlign: 'left', // Align text to the left for readability
    },
    // NEW: Style for the description and remarks boxes
    detailsBox: {
      backgroundColor: '#f8f9fa',
      padding: '0.75rem',
      borderRadius: '4px',
      marginTop: '0.5rem',
      whiteSpace: 'pre-wrap', // This respects line breaks in the text
      border: '1px solid #e9ecef',
    }
  };

  return (
    <div style={styles.card}>
      <h3>Complaint Details</h3>
      
      {/* --- CHANGE 1: Display Ticket ID instead of internal ID --- */}
      <p><strong>Ticket ID:</strong> {complaint.ticketId}</p>
      
      <p><strong>Title:</strong> {complaint.title}</p>
      
      {/* --- CHANGE 2: Add the complaint description --- */}
      <p><strong>Description:</strong></p>
      <div style={styles.detailsBox}>
        {complaint.description}
      </div>

      <p style={{ marginTop: '1rem' }}><strong>Status:</strong> <span style={getStatusStyle(complaint.status)}>{complaint.status}</span></p>

      {/* Conditionally show admin remarks if they exist */}
      {complaint.adminRemarks && (
        <>
          <p style={{ marginTop: '1rem' }}><strong>Admin Remarks:</strong></p>
          <div style={styles.detailsBox}>
            {complaint.adminRemarks}
          </div>
        </>
      )}

      <p style={{ marginTop: '1rem', color: '#6c757d', fontSize: '0.9rem' }}>
        <strong>Submitted On:</strong> {new Date(complaint.submittedAt).toLocaleString()}
      </p>
    </div>
  );
};

export default ComplaintCard;
// src/pages/AdminDashboardPage.jsx
import React, { useState, useEffect } from 'react';
import { getAllComplaints, updateComplaintStatus } from '../services/api';

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

  const handleStatusChange = async (complaintId, newStatus) => {
    const remarks = prompt(`Enter remarks for changing status to "${newStatus}":`);
    if (remarks === null) return; // User cancelled the prompt

    const response = await updateComplaintStatus(complaintId, newStatus, remarks);

    if (response.success) {
      // Update the list of complaints in the UI instantly
      setComplaints(prevComplaints => 
        prevComplaints.map(c => 
          c.id === complaintId ? response.complaint : c
        )
      );
      alert('Status updated successfully!');
    } else {
      alert('Failed to update status.');
    }
  };

  if (isLoading) {
    return <h2>Loading complaints...</h2>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Ticket ID</th>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Remarks</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
          <tbody>
            {complaints.map(c => (
              <tr key={c.id}>
                <td style={styles.td}>{c.ticketId}</td>
                <td style={styles.td}>{c.title}</td>
                <td style={styles.td}>{c.status}</td>
                <td style={styles.td}>{c.adminRemarks}</td>
                <td style={styles.td}>
                  <select 
                    defaultValue={c.status}
                    onChange={(e) => handleStatusChange(c.id, e.target.value)}
                  >
                    <option value="Submitted">Submitted</option>
                    <option value="In Review">In Review</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
};

export default AdminDashboardPage;
  // src/pages/AdminDashboardPage.jsx
  import React, { useState, useEffect } from 'react';
  import { getAllComplaints, updateComplaintStatus } from '../services/api';
  import ComplaintDetailModal from '../components/common/ComplaintDetailModal';

  const AdminDashboardPage = () => {
    const [complaints, setComplaints] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    
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

    const handleUpdateComplaint = async (id, status, remarks) => {
      const response = await updateComplaintStatus(id, status, remarks);
      if (response.success) {
        setComplaints(prev => 
          prev.map(c => c.id === id ? response.complaint : c)
        );
        setSelectedComplaint(null);
        alert('Complaint updated successfully!');
      } else {
        alert('Failed to update complaint. The status may be invalid.');
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
              <th style={styles.th}>Submitted On</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map(c => (
              <tr key={c.id}>
                <td style={styles.td}>{c.ticketId}</td>
                <td style={styles.td}>{c.title}</td>
                <td style={styles.td}>{c.status}</td>
                <td style={styles.td}>{new Date(c.submittedAt).toLocaleDateString()}</td>
                <td style={styles.td}>
                  <button onClick={() => setSelectedComplaint(c)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedComplaint && (
          <ComplaintDetailModal 
            complaint={selectedComplaint}
            onClose={() => setSelectedComplaint(null)}
            onUpdate={handleUpdateComplaint}
          />
        )}
      </div>
    );
  };

  export default AdminDashboardPage;

// src/pages/SubmitComplaintPage.jsx
import React, { useState } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { submitComplaint } from '../services/api'; // Our mock API

const SubmitComplaintPage = () => {
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'submitting', 'success'
  const [ticketId, setTicketId] = useState('');

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: { textAlign: 'center', marginBottom: '2rem' },
    textarea: {
      width: '100%',
      padding: '0.75rem',
      fontSize: '1rem',
      border: '1px solid #dee2e6',
      borderRadius: '4px',
      boxSizing: 'border-box',
      minHeight: '120px'
    },
    successMessage: { textAlign: 'center' }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    const response = await submitComplaint(formData);
    if (response.success) {
      setTicketId(response.complaint.id);
      setSubmissionStatus('success');
      setFormData({ title: '', description: '' }); // Clear form
    }
  };

  // Show a success message after submission
  if (submissionStatus === 'success') {
    return (
      <div style={styles.container}>
        <div style={styles.successMessage}>
          <h2>Complaint Submitted Successfully!</h2>
          <p>Please save your unique Complaint ID for tracking:</p>
          <p><strong>{ticketId}</strong></p>
          <Button onClick={() => setSubmissionStatus(null)}>Submit Another Complaint</Button>
        </div>
      </div>
    );
  }

  // Show the form by default
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Submit a Complaint Anonymously</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Complaint Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g., Broken equipment in the lab"
        />
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
            Complaint Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={styles.textarea}
            placeholder="Provide a detailed description of the issue."
            required
          />
        </div>
        <Button type="submit" disabled={submissionStatus === 'submitting'}>
          {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Complaint'}
        </Button>
      </form>
    </div>
  );
};

export default SubmitComplaintPage;
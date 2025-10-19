// src/services/api.js

const API_BASE_URL = 'http://localhost:8080/api';

// Function to submit a new complaint
export const submitComplaint = async (complaintData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/complaints`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(complaintData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const newComplaint = await response.json();
    return { success: true, complaint: newComplaint };
  } catch (error) {
    console.error('Error submitting complaint:', error);
    return { success: false, message: 'Failed to submit complaint.' };
  }
};

// Function to get a complaint's status by ID
export const getComplaintStatus = async (ticketId) => {
  try {
    // THIS IS THE FIX: Call the new 'track' endpoint
    const response = await fetch(`${API_BASE_URL}/complaints/track/${ticketId}`); 
    if (response.status === 404) {
      return { success: false, message: 'Complaint ID not found.' };
    }
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const complaint = await response.json();
    return { success: true, complaint };
  } catch (error) {
    console.error('Error fetching complaint status:', error);
    return { success: false, message: 'Failed to fetch status.' };
  }
};

// Function to get all complaints for the admin dashboard
export const getAllComplaints = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/complaints`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const complaints = await response.json();
    return { success: true, complaints };
  } catch (error) {
    console.error('Error fetching all complaints:', error);
    return { success: false, message: 'Failed to fetch complaints.' };
  }
};

// Admin login can remain a mock for now, as we haven't built the backend logic for it yet.
export const adminLogin = async (credentials) => {
  console.log('Simulating admin login with:', credentials);
  if (credentials.username === 'admin' && credentials.password === 'password') {
    return { success: true, token: 'fake-jwt-token-for-testing' };
  }
  return { success: false, message: 'Invalid credentials. Try admin/password.' };
};


export const updateComplaintStatus = async (id, status, remarks) => {
  try {
    const response = await fetch(`${API_BASE_URL}/complaints/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, remarks }),
    });
    if (!response.ok) { throw new Error('Failed to update status'); }
    const updatedComplaint = await response.json();
    return { success: true, complaint: updatedComplaint };
  } catch (error) {
    console.error('Error updating complaint:', error);
    return { success: false };
  }
};



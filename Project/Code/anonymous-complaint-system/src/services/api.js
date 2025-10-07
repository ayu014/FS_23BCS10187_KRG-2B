// src/services/api.js

import { mockComplaints } from '../constants/mockData';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// This function should already be here
export const submitComplaint = async (complaintData) => {
  // ... (existing code)
  await sleep(500);
  const newComplaint = {
    id: `TKT-2025-${Math.floor(Math.random() * 1000)}`,
    ...complaintData,
    status: 'Submitted',
    submittedAt: new Date().toISOString(),
  };
  return { success: true, complaint: newComplaint };
};

// --- ADD THE NEW FUNCTIONS BELOW ---

// Function to find a single complaint by its ID
export const getComplaintStatus = async (complaintId) => {
  await sleep(500);
  const complaint = mockComplaints.find(c => c.id === complaintId);
  if (complaint) {
    return { success: true, complaint };
  }
  return { success: false, message: 'Complaint ID not found.' };
};

// Function to simulate admin login
export const adminLogin = async (credentials) => {
  await sleep(500);
  if (credentials.username === 'admin' && credentials.password === 'password') {
    return { success: true, token: 'fake-jwt-token-for-testing' };
  }
  return { success: false, message: 'Invalid credentials. Try admin/password.' };
};

// Function to get all complaints for the dashboard
export const getAllComplaints = async () => {
  await sleep(500);
  return { success: true, complaints: mockComplaints };
};
package com.example.complaint_system_backend.service;


import com.example.complaint_system_backend.model.Complaint;
import com.example.complaint_system_backend.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

import java.util.List;
import java.util.Optional;


@Service
public class ComplaintService {

    @Autowired // Spring automatically provides an instance of the repository here
    private ComplaintRepository complaintRepository;

    public Complaint createComplaint(Complaint complaint) {
        // Apply business logic: set default status and current time
        complaint.setStatus("Submitted");
        complaint.setSubmittedAt(LocalDateTime.now());

        // Use the repository to save the complaint to the database
        return complaintRepository.save(complaint);
    }

    // Method to get all complaints for the admin dashboard
    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    // Method to get a single complaint for the tracking page
    public Optional<Complaint> getComplaintById(Long id) {
        return complaintRepository.findById(id);
    }
}
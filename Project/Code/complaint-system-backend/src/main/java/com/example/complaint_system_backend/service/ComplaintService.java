package com.example.complaint_system_backend.service;


import com.example.complaint_system_backend.model.Complaint;
import com.example.complaint_system_backend.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

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
}
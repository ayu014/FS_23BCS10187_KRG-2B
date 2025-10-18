package com.example.complaint_system_backend.controller;


import com.example.complaint_system_backend.model.Complaint;
import com.example.complaint_system_backend.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api") // All URLs in this class will start with /api
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    // This method handles POST requests to http://localhost:8080/api/complaints
    @PostMapping("/complaints")
    public Complaint submitComplaint(@RequestBody Complaint complaint) {
        return complaintService.createComplaint(complaint);
    }
}
package com.example.complaint_system_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;

@Entity // Marks this class as a blueprint for a database table
public class Complaint {

    @Id // Marks this field as the unique primary key for the table
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Tells Postgres to auto-generate this ID
    private Long id;

    private String title;
    private String description;
    private String status;
    private LocalDateTime submittedAt;

    // Standard Java Getters and Setters are required for JPA to work.
    // Your IDE can generate these for you automatically.

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public LocalDateTime getSubmittedAt() { return submittedAt; }
    public void setSubmittedAt(LocalDateTime submittedAt) { this.submittedAt = submittedAt; }
}
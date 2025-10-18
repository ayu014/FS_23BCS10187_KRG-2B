package com.example.complaint_system_backend.repository;


import com.example.complaint_system_backend.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint, Long> {
    // This interface is intentionally blank. Spring Data JPA provides all the necessary methods.
}

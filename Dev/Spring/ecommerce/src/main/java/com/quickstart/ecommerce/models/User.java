package com.quickstart.ecommerce.models;


import jakarta.persistence.*;
import jakarta.persistence.Entity;

import jakarta.persistence.Table;

@Entity
@Table(name = "users")  // must match default table name
public class User {

    @Id
    private String username;

    private String password;

    private Boolean enabled = true;  // mandatory for Spring Security

    // Optional: you can keep role here if you want to use it for your own queries
    private String role;

    public User() {}

    public User(String username, String password, Boolean enabled, String role) {
        this.username = username;
        this.password = password;
        this.enabled = enabled;
        this.role = role;
    }

    // Getters and setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////
////import jakarta.persistence.*;
////import java.time.LocalDateTime;
////
////@Entity
////@Table(name = "users")
////public class User {
////
////    @Id
////    @GeneratedValue(strategy = GenerationType.IDENTITY)
////    private Long id;
////
////    @Column(nullable = false, unique = true)
////    private String username;
////
////    @Column(nullable = false)
////    private String password;
////
////    @Column(nullable = false)
////    private String role;  // e.g., "ROLE_USER" or "ROLE_ADMIN"
////
////    @Column(nullable = false, unique = true)
////    private String email;
////
////    @Column(name = "mobile_no", nullable = true, unique = true)
////    private String mobileNo;
////
////    @Column(nullable = false)
////    private Boolean status = true; 
////
////    @Column(name = "created_at", nullable = false)
////    private LocalDateTime createdAt;
////
////    @Column(name = "updated_at", nullable = false)
////    private LocalDateTime updatedAt;
////
////    public User() {
////      
////    }
////
////    public User(String username, String password, String role, String email, String mobileNo, Boolean status) {
////        this.username = username;
////        this.password = password;
////        this.role = role;
////        this.email = email;
////        this.mobileNo = mobileNo;
////        this.status = status;
////        this.createdAt = LocalDateTime.now();
////        this.updatedAt = LocalDateTime.now();
////    }
////
////    public Long getId() {
////        return id;
////    }
////
////    public void setId(Long id) {
////        this.id = id;
////    }
////
////    public String getUsername() {
////        return username;
////    }
////
////    public void setUsername(String username) {
////        this.username = username;
////    }
////
////    public String getPassword() {
////        return password;
////    }
////
////    public void setPassword(String password) {
////        this.password = password;
////    }
////
////    public String getRole() {
////        return role;
////    }
////
////    public void setRole(String role) {
////        this.role = role;
////    }
////
////    public String getEmail() {
////        return email;
////    }
////
////    public void setEmail(String email) {
////        this.email = email;
////    }
////
////    public String getMobileNo() {
////        return mobileNo;
////    }
////
////    public void setMobileNo(String mobileNo) {
////        this.mobileNo = mobileNo;
////    }
////
////    public Boolean getStatus() {
////        return status;
////    }
////
////    public void setStatus(Boolean status) {
////        this.status = status;
////    }
////
////    public LocalDateTime getCreatedAt() {
////        return createdAt;
////    }
////
////    public void setCreatedAt(LocalDateTime createdAt) {
////        this.createdAt = createdAt;
////    }
////
////    public LocalDateTime getUpdatedAt() {
////        return updatedAt;
////    }
////
////    public void setUpdatedAt(LocalDateTime updatedAt) {
////        this.updatedAt = updatedAt;
////    }
////}
//
//

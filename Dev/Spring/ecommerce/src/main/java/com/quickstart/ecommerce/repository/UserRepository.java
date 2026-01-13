package com.quickstart.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickstart.ecommerce.models.User;

public interface UserRepository extends JpaRepository<User, String>{
		User findByUsername(String username);
		
}

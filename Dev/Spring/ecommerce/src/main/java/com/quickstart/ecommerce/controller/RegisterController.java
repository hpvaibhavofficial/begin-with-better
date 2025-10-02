package com.quickstart.ecommerce.controller;

import org.springframework.web.bind.annotation.*;

import com.quickstart.ecommerce.models.User;
import com.quickstart.ecommerce.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
public class RegisterController {

	@Autowired
    private final UserRepository userRepository;
	@Autowired
    private final PasswordEncoder passwordEncoder;

    public RegisterController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        try {
            // Encode password
            user.setPassword(passwordEncoder.encode(user.getPassword()));

            // Set default role and enabled
            user.setRole("USER");
            user.setEnabled(true);

            userRepository.save(user);
            return "User registered successfully!";
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}

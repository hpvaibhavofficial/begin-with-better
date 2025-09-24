package com.quickstart.ecommerce.service;

import java.time.LocalDateTime;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.quickstart.ecommerce.dto.UserRequest;
import com.quickstart.ecommerce.models.User;
import com.quickstart.ecommerce.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserServiceImpl implements IUserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional
    public User registerUser(UserRequest userRequest) {
        if (userRepository.existsByUsername(userRequest.getUsername())) {
            throw new RuntimeException("Username already taken");
        }
        if (userRepository.existsByEmail(userRequest.getEmail())) {
            throw new RuntimeException("Email already registered");
        }

        User user = new User();
        user.setUsername(userRequest.getUsername());
        user.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        user.setEmail(userRequest.getEmail());
        user.setMobileNo(userRequest.getMobileNo());
        user.setRole("ROLE_USER");
        user.setStatus(true);

        LocalDateTime now = LocalDateTime.now();
        user.setCreatedAt(now);
        user.setUpdatedAt(now);

        return userRepository.save(user);
    }

    @Override
    @Transactional
    public void promoteToAdmin(String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) throw new RuntimeException("User not found");

        user.setRole("ROLE_ADMIN");
        user.setUpdatedAt(LocalDateTime.now());

        userRepository.save(user);
    }

    @Override
    @Transactional
    public User registerAdmin(UserRequest userRequest) {
        if (userRepository.existsByUsername(userRequest.getUsername())) {
            throw new RuntimeException("Username already taken");
        }
        if (userRepository.existsByEmail(userRequest.getEmail())) {
            throw new RuntimeException("Email already registered");
        }

        User admin = new User();
        admin.setUsername(userRequest.getUsername());
        admin.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        admin.setEmail(userRequest.getEmail());
        admin.setMobileNo(userRequest.getMobileNo());
        admin.setRole("ROLE_ADMIN");
        admin.setStatus(true);

        LocalDateTime now = LocalDateTime.now();
        admin.setCreatedAt(now);
        admin.setUpdatedAt(now);

        return userRepository.save(admin);
    }
}

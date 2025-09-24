package com.quickstart.ecommerce.controller;


import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import com.quickstart.ecommerce.dto.UserRequest;
import com.quickstart.ecommerce.models.User;
import com.quickstart.ecommerce.service.IUserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final IUserService userService;

    public UserController(IUserService userService) {
        this.userService = userService;
    }

    /**
     * Register a normal user
     * URL: POST /api/users/register
     * Body: JSON { username, password, email, mobileNo }
     */
    @PostMapping("/register")
    public User registerUser(@Valid @RequestBody UserRequest userRequest) {
        return userService.registerUser(userRequest);
    }

    /**
     * Promote an existing user to admin
     * URL: PUT /api/users/{username}/promote
     */
    @PutMapping("/{username}/promote")
    public String promoteToAdmin(@PathVariable String username) {
        userService.promoteToAdmin(username);
        return "User promoted to admin successfully";
    }

    /**
     * Register an admin user
     * URL: POST /api/users/register-admin
     * Body: JSON { username, password, email, mobileNo }
     */
    @PostMapping("/register-admin")
    public User registerAdmin(@Valid @RequestBody UserRequest userRequest) {
        return userService.registerAdmin(userRequest);
    }
}

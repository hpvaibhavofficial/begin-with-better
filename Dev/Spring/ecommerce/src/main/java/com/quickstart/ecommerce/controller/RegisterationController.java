package com.quickstart.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.quickstart.ecommerce.models.User;
import com.quickstart.ecommerce.service.UserService;

@Controller
public class RegisterationController {

    @Autowired
    private UserService userService;

    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }
    
    @GetMapping("/")		
	public String home() {
		return "home";
	}

    @PostMapping("/register")
    public String registerUser(@ModelAttribute("user") User user, Model model) {
        try {
            userService.registerUser(user);  // Attempt to register the user using the service
            model.addAttribute("message", "Registration successful! Please login.");
            return "login";
        } catch (Exception e) {
            model.addAttribute("error", "An error occurred during registration. Please try again later.");
            return "register";  // Redirects back to registration page with a generic error
        }
    }
    
}


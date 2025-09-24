package com.quickstart.ecommerce.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class NavigationController {
	
	@GetMapping("/register")
	public String register() {
		return "register";
	}
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}
	
	@GetMapping("/")		
	public String home() {
		return "home";
	}
	
	
}

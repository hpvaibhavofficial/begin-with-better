package com.example.praxx.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.praxx.ownerService.OwnerService;
import com.example.praxx.repository.OwnerRepository;

@Configuration
public class SpringConfig {
	
	@Bean
	public OwnerService ownerService() {
		return null;
	}
	
	@Bean
	public OwnerRepository ownerRepository() {
		return null;
	}

}

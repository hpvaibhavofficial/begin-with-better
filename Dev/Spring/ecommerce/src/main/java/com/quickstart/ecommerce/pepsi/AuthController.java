//package com.quickstart.ecommerce.pepsi;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//
//import com.quickstart.ecommerce.dto.LoginRequestDto;
//import com.quickstart.ecommerce.dto.LoginResponseDto;
//
//import lombok.RequiredArgsConstructor;
//
//@Controller
//@RequestMapping("/auth")
//@RequiredArgsConstructor
//public class AuthController {
//	
//	@Autowired
//	private AuthService authService;
//	
//	
//	@PostMapping("/login")
//	public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto loginRequestDto){
//		return ResponseEntity.ok(authService.login(loginRequestDto));
//	}
//}

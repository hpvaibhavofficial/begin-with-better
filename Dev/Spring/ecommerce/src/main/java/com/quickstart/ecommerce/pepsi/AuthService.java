//package com.quickstart.ecommerce.pepsi;
//
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//import com.quickstart.ecommerce.dto.LoginRequestDto;
//import com.quickstart.ecommerce.dto.LoginResponseDto;
//
//@Service
//public class AuthService {
//
//    private final Authentication authManager;
//    
//    private final AuthUtil authUtil;
//
//    public AuthService(AuthenticationManager authManager, AuthUtil authUtil) {
//        this.authManager = authManager;
//        this.authUtil = authUtil;
//    }
//
//    public LoginResponseDto login(LoginRequestDto loginRequestDto) {
//        Authentication authentication = authManager.authenticate(
//                new UsernamePasswordAuthenticationFilter(
//                        loginRequestDto.getUserName(), loginRequestDto.getPassword()
//                )
//        );
//
//        User user = (User) authentication.getPrincipal(); // Ensure User implements UserDetails
//        String token = authUtil.generateAccessToken(user);
//        return new LoginResponseDto(token, user.getId());
//    }
//}
//
//

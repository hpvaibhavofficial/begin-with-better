package com.quickstart.ecommerce.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    private final MyUserDetailsService userDetailsService;

    public SecurityConfig(MyUserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorize -> authorize
                                .requestMatchers(
                                        "/",
                                        "/login",
                                        "/register",
                                        "/api/users/register",
                                        "/api/users/register-admin"
                                ).permitAll()
                                .anyRequest().authenticated()
                )
                .formLogin(form -> form
                                .loginPage("/login")
                                .defaultSuccessUrl("/", true)
                                .permitAll()
                )
                .logout(logout -> logout
                                .logoutUrl("/logout")
                                .logoutSuccessUrl("/")
                );

        return http.build();
    }
}

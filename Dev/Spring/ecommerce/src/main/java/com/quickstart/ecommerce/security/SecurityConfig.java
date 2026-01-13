package com.quickstart.ecommerce.security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/login","/register/**", "/css/**").permitAll()
                .anyRequest().authenticated()
            )
            
            .formLogin(form -> form
                .loginPage("/login")
                .defaultSuccessUrl("/")
                .permitAll()
            )
            .logout(logout -> logout.permitAll());

        return http.build();
    }


//    @Bean
//    public JdbcUserDetailsManager jdbcUserDetailsManager(DataSource dataSource) {
//        JdbcUserDetailsManager manager = new JdbcUserDetailsManager(dataSource);
//
//        // Use your single `users` table
//        manager.setUsersByUsernameQuery(
//            "SELECT username, password, enabled FROM users WHERE username = ?"
//        );
//
//        manager.setAuthoritiesByUsernameQuery(
//            "SELECT username, role AS authority FROM users WHERE username = ?"
//        );
//
//        return manager;
//    }
    
    
}












































//package com.quickstart.ecommerce.security;
//
//import static org.springframework.security.config.Customizer.withDefaults;
//
//import javax.sql.DataSource;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.provisioning.JdbcUserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfig {
//	
//	@Autowired
//	DataSource dataSource;
//
////    @Bean
////    public PasswordEncoder passwordEncoder() {
////        return new BCryptPasswordEncoder();
////    }
//    
//    
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//            .csrf(csrf -> csrf.disable())  // disable CSRF protection
//            .authorizeHttpRequests(auth -> auth
//                .requestMatchers("/", "/login", "/regster", "/css/**").permitAll()
//                .anyRequest().authenticated()
//            )
//            .httpBasic(withDefaults())      // keep HTTP Basic auth
//            .logout(logout -> logout.disable()); // optional: disable logout for stateless
//
//        return http.build();
//    }
//
//
//    @Bean
//    public JdbcUserDetailsManager jdbcUserDetailsManager() {
//        JdbcUserDetailsManager manager = new JdbcUserDetailsManager(dataSource);
//        
//        manager.setAuthoritiesByUsernameQuery(
//            "SELECT username, role AS authority FROM users WHERE username = ?"
//        );
//
//        return manager;
//    }
//
//    
//}
//
//    	
//    	
//    	
//    	
//    	
////        http
////                .authorizeHttpRequests(auth -> auth
////                        .requestMatchers("/register", "/login","/css/**").permitAll() // allow public access
////                        .anyRequest().authenticated()
////                )
//////                .formLogin(form -> form
//////                        .loginPage("/login") // custom login page
//////                        .defaultSuccessUrl("/", true) // redirect after success
//////                        .permitAll()
//////                )
////                http.httpBasic(withDefaults());
////                //http.logout(logout -> logout.permitAll());
////
////        return http.build();
////    }
////}
//

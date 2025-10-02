//package com.quickstart.ecommerce.pepsi;
//
//import com.quickstart.ecommerce.models.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.HashMap;
//import java.util.Map;
//
//@Service
//public class UserService implements UserDetailsService {
//
//    private final Map<String, User> users = new HashMap<>();
//    private final PasswordEncoder passwordEncoder;
//
//    public UserService(PasswordEncoder passwordEncoder) {
//        this.passwordEncoder = passwordEncoder;
//    }
//
//    public void registerUser(User user) {
//        user.setPassword(passwordEncoder.encode(user.getPassword())); // encode password
//        users.put(user.getUsername(), user); // save in memory
//    }
//
//    public User findByUsername(String username) {
//        return users.get(username);
//    }
//
//    public Map<String, User> getAllUsers() {
//        return users;
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = findByUsername(username);
//        if (user == null) {
//            throw new UsernameNotFoundException("User not found: " + username);
//        }
//
//        // Convert your User model into Spring Security's UserDetails
//        return org.springframework.security.core.userdetails.User.withUsername(user.getUsername())
//                .password(user.getPassword())
//                .roles(user.getRole()) // make sure your User model has a role field
//                .build();
//    }
//}

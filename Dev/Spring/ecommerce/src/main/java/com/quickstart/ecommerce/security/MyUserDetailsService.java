package com.quickstart.ecommerce.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.quickstart.ecommerce.repository.UserRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public MyUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        com.quickstart.ecommerce.models.User user = userRepository.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }

        // Use fully qualified name for Spring Security's User class
        org.springframework.security.core.userdetails.User.UserBuilder builder =
                org.springframework.security.core.userdetails.User.withUsername(user.getUsername());

        builder.password(user.getPassword());
        builder.roles(user.getRole().replace("ROLE_", "")); // strip prefix for Spring Security
        return builder.build();
    }
}

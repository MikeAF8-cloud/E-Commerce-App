package com.example.backendjava.utils;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements AuthenticationProvider {
	@Autowired
	AuthenticationManager authManager;

	@Autowired
	UserDetailsService userManager;
	
	
	private static String passwordAndIdEncoder(String password, int UserID) {
		return new BCryptPasswordEncoder().encode(password + UserID);
	}
	
	public UserDetails createUserByUserDetails(String email, String password, long id) throws UsernameNotFoundException {
		
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
		
		UserDetails user = new User(email, 
				passwordAndIdEncoder(password, Long.hashCode(id)),
				authorities
		);
		
		Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(user, password, authorities));
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		return user;
	}
	
	public String authenticateUser(String email, String password, long id) throws Exception {
		
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
		
		UserDetails user = new User(email, 
				passwordAndIdEncoder(password, Long.hashCode(id)),
				authorities);
		
		try {
			authManager
			.authenticate(new UsernamePasswordAuthenticationToken(user, password, authorities));
			
			return "Success";
		}
		catch (DisabledException e) {
			return "Your account has been disabled. Please contact an adminstrator for more information";
		} 
		catch (BadCredentialsException e) {
			return "Invaid credentials";
		}
	}

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean supports(Class<?> authentication) {
		// TODO Auto-generated method stub
		return false;
	}
}
package com.example.backendjava.utils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {

	@Autowired
	JwtTokenUtil tokenUtil;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		final String authorizationHeader = request.getHeader("Authorization");
		
		String username = null;
		String jwt = null;
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		
		if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
			jwt = authorizationHeader.substring(7);
			username = tokenUtil.getUserFromToken(jwt);
			authorities.add(new SimpleGrantedAuthority(tokenUtil.getAllClaimsFromToken(jwt).get("auth").toString()));
		}
		
		
		if(username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			if(tokenUtil.validateToken(jwt, username)) {
				UsernamePasswordAuthenticationToken token = 
						new UsernamePasswordAuthenticationToken(
						username, null, authorities
				);
				
				token.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(token);
			}
		}
		filterChain.doFilter(request, response);
	}
}

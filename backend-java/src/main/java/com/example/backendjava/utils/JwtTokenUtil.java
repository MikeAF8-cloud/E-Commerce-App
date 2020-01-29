package com.example.backendjava.utils;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenUtil implements Serializable {

	private static final long serialVersionUID = -3586122470377750046L;

	@Value("${jwt.signing.key.secret}")
	private String secretKey;
	
	private static final long JWT_TOKEN_VALIDITY = 1 * 60 * 60;
	
	public String getUserFromToken(String token) {
		return getClaimFromToken(token, Claims::getSubject);
	}
	
	public Date getExpirationDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getExpiration);
	}
	
	public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
		return claimsResolver.apply(
				getAllClaimsFromToken(token)
		);
	}
	
	public Claims getAllClaimsFromToken(String token) {
		return Jwts.parser()
				.setSigningKey(secretKey).parseClaimsJws(token)
				.getBody();
	}
	
	private Boolean isTokenExpired(String token) {
		return getExpirationDateFromToken(token)
				.before(new Date());
	}
	
	public String getToken(String name, String auth, String user) {
		Map<String, Object> claims = new HashMap<>();
		claims.put("auth", auth);
		claims.put("name", name);
		return generateToken(claims, user);
	}
	
	private String generateToken(Map<String, Object> claims, String user) {
		return Jwts.builder().setClaims(claims).setSubject(user)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
				.signWith(SignatureAlgorithm.HS512, secretKey).compact();
	}
	
	public Boolean validateToken(String token, String userName) {
		final String user = getUserFromToken(token);
		
		return (user.equals(userName) && !isTokenExpired(token));
	}
}

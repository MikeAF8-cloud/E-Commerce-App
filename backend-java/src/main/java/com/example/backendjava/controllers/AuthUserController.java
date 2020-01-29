package com.example.backendjava.controllers;

import com.example.backendjava.templates.*;
import com.example.backendjava.repositories.*;
import com.example.backendjava.utils.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.JsonObject;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
@RestController
public class AuthUserController{
	@Autowired
	LoginRepository login;

	@Autowired
	SignupRepository signup;
	
	@Autowired
	NameRepository name;
	
	@Autowired
	AccountRepository account;
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private AuthenticationManager authManager;
	
	@Autowired
	BCryptPasswordEncoder passwordEncoder;
	
	@PostMapping(path="/signin", consumes = "application/json")
	public @ResponseBody ResponseEntity<String> signIn(@RequestBody SignInTemplate payload) throws Exception {
		
		JsonObject jbo = Validators.validateLogin(payload.getEmail(), payload.getPassword());
		
		if (jbo.size() != 0) {
			return new ResponseEntity<String> (jbo.toString(), HttpStatus.BAD_REQUEST);
		}
		
		try {
			authManager.authenticate(
					new UsernamePasswordAuthenticationToken(payload.getEmail(), payload.getPassword())
			);
		} catch(BadCredentialsException e) {
			jbo.addProperty("general", "Invalid credentials");
			return new ResponseEntity<String> (jbo.toString(), HttpStatus.BAD_REQUEST);
		} catch(DisabledException e) {
			jbo.addProperty("general", "Account has been disabled. Please contact the service provider for more details");
			return new ResponseEntity<String> (jbo.toString(), HttpStatus.BAD_REQUEST);
		}

		final String token = jwtTokenUtil.getToken(
				name.findNameByEmail(payload.getEmail()), 
				account.findAuthByEmail(payload.getEmail()),
				login.findUserId(payload.getEmail())
		);		
		
		jbo.addProperty("token", token);
		return new ResponseEntity<String>(jbo.toString(), HttpStatus.OK) ;
	}
	
	@PostMapping(path="/signup", consumes = "application/json")
	public @ResponseBody ResponseEntity<String> signUp(@RequestBody SignUpTemplate payload) throws Exception{

		JsonObject jbo = new JsonObject();
		
		jbo = Validators.validateSignup(payload);
		
		if (jbo.size() != 0) {
			return new ResponseEntity<String> (jbo.toString(), HttpStatus.BAD_REQUEST);
		}
		
		payload.getAccountInfo().getNewPassword().setPassword(
				passwordEncoder.encode(payload.getAccountInfo().getNewPassword().getPassword())
		);
		
		payload.getAccountInfo().setAuthority("USER");
		payload.getAccountInfo().setEnabled(true);
		
		signup.save(payload);
		
		jbo.addProperty("success", "Success");
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@GetMapping(path="/getUserAuth")
	public @ResponseBody ResponseEntity<String> getUserAuth(@RequestParam("user") String user) {		
		JsonObject jbo = new JsonObject();
		jbo.addProperty("auth", account.findAuthByFname(user));
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
}

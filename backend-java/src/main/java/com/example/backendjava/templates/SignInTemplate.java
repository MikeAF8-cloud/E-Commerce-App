package com.example.backendjava.templates;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@SuppressWarnings("serial")
@Entity
@Table(name = "AccountInfo")
public class SignInTemplate implements Serializable {

	@Id
	@Column(name = "accountInfoID")
	private long id;
	
	@JsonProperty(value = "email")
	@Column(name = "email")
	private String email;
	
	@JsonProperty(value = "password")
	@Column(name = "password")
	private String password;
	
	@Column(name = "authority")
	private String authority;
	
	@Column(name = "enabled")
	private boolean enabled;
	
	public long getUserId() {
		return id;
	}
	
	public String getEmail() {
		return email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setUserId(long id) {
		this.id = id;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}

	public String getAuthority() {
		return authority;
	}

	public void setAuthority(String authority) {
		this.authority = authority;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
}

package com.example.backendjava.templates;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonProperty;

@Embeddable
public class NewPassword /*extends AccountInfoTemplate*/{
	
	@JsonProperty(value = "password")
	@Column(name = "password")
	private String password;

	@JsonProperty(value = "confirmPassword")
	@Transient
	private String confirmPassword;

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	
}


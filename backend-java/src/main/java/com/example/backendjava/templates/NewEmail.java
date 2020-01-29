package com.example.backendjava.templates;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonProperty;

@Embeddable
public class NewEmail /*extends AccountInfoTemplate*/{
		
	@JsonProperty(value = "email")
	@Column(name = "email")
	private String email;

	@JsonProperty(value = "confirmEmail")
	@Transient
	private String confirmEmail;
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getConfirmEmail() {
		return confirmEmail;
	}

	public void setConfirmEmail(String confirmEmail) {
		this.confirmEmail = confirmEmail;
	}
	
}

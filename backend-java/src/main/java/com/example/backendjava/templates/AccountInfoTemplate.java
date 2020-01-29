package com.example.backendjava.templates;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "AccountInfo")
public class AccountInfoTemplate {
	
	@Id
	@JoinColumn(name = "accountInfoID")
	@GenericGenerator(name = "num_gen", strategy = "com.example.backendjava.utils.NumericGenerator",
		parameters = {
				@Parameter(name = "value", value = "45")
		}
	)
	@GeneratedValue(strategy = GenerationType.AUTO, generator="num_gen")
	private long accountInfoID;
	
	@JsonProperty(value = "emailInput")
	@Embedded
	@AttributeOverride(name = "email", column = @Column(name = "email"))
	private NewEmail email;
	
	@JsonProperty(value = "passwordInput")
	@Embedded
	@AttributeOverride(name = "password", column = @Column(name = "password"))
	private NewPassword password;
	
	@Column(name = "authority")
	private String authority;
	
	@Column(name = "enabled")
	private boolean enabled;
	
	public long getAccountID() {
		return accountInfoID;
	}

	public void setAccountID(long accountInfoID) {
		this.accountInfoID = accountInfoID;
	}

	public NewEmail getNewEmail() {
		return email;
	}

	public void setNewEmail(NewEmail emailInput) {
		this.email = emailInput;
	}

	public NewPassword getNewPassword() {
		return password;
	}

	public void setNewPassword(NewPassword passwordInput) {
		this.password = passwordInput;
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

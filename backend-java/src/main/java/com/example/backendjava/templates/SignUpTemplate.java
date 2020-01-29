package com.example.backendjava.templates;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonProperty;

@SuppressWarnings("serial")
@Entity(name = "Users")
@Table(name = "Users")
public class SignUpTemplate implements Serializable {
	
	@Id
	@Column(name = "userID")
	@GenericGenerator(name = "uuidGen", strategy = "com.example.backendjava.utils.UUIDGenerator")
	@GeneratedValue(strategy = GenerationType.AUTO, generator="uuidGen")
	private String userID;
	
	@JsonProperty(value = "name")
	@JoinColumn(name = "nameID")
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private NameTemplate name;
	
	@JsonProperty(value = "address")
	@JoinColumn(name = "addressID")
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private AddressTemplate address;

	@JsonProperty(value = "dob")
	@JoinColumn(name = "dobID")
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private DateOfBirthTemplate dob;
	
	@JsonProperty(value = "accountInfo")
	@JoinColumn(name = "accountInfoID")
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private AccountInfoTemplate accountInfo;
	
	public String getUserID() {
		return userID;
	}
	
	public void setUserID(String userID) {
		this.userID = userID;
	}	
	
	public NameTemplate getName() {
		return name;
	}

	public void setName(NameTemplate name) {
		this.name = name;
	}

	public AddressTemplate getAddress() {
		return address;
	}
	
	public void setAddress(AddressTemplate address) {
		this.address = address;
	}
	
	public DateOfBirthTemplate getDOB() {
		return dob;
	}

	public void setDOB(DateOfBirthTemplate dob) {
		this.dob = dob;
	}
	
	public AccountInfoTemplate getAccountInfo() {
		return accountInfo;
	}

	public void setAccountInfo(AccountInfoTemplate accountInfo) {
		this.accountInfo = accountInfo;
	}

}

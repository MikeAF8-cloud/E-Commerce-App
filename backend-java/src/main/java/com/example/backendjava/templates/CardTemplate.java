package com.example.backendjava.templates;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.JsonObject;

@Entity(name = "Cards")
@Table(name = "Cards")
public class CardTemplate {
	
	@Id
	@Column(name = "cardNumber")
	@JsonProperty(value = "cardNumber")
	private long cardNumber;
	
	@Column(name = "userID")
	@JsonProperty(value = "user")
	private String userID;
		
	@Column(name = "cardHolder")
	@JsonProperty(value = "cardHolder")
	private String cardHolder;
	
	@Column(name = "expDate")
	@JsonProperty(value = "expDate")
	private String expDate;
	
	@Column(name = "securityCode")
	@JsonProperty(value = "securityCode")
	private int securityCode;
	
	CardTemplate() {
		
	}
	
	public CardTemplate(String userID, long cardNumber, String cardHolder, 
				String expDate, int securityCode) {
		this.userID = userID;
		this.cardNumber = cardNumber;
		this.cardHolder = cardHolder;
		this.expDate = expDate;
		this.securityCode = securityCode;
	}
	
	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public long getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(long cardNumber) {
		this.cardNumber = cardNumber;
	}
	
	public String getCardHolder() {
		return cardHolder;
	}

	public void setCardHolder(String cardHolder) {
		this.cardHolder = cardHolder;
	}

	public String getExpDate() {
		return expDate;
	}

	public void setExpDate(String expDate) {
		this.expDate = expDate;
	}

	public int getSecurityCode() {
		return securityCode;
	}

	public void setSecurityCode(int securityCode) {
		this.securityCode = securityCode;
	}
	
	public JsonObject toJsonObject() {
		JsonObject jbo = new JsonObject();
		
		jbo.addProperty("cardNumber", this.cardNumber);
		jbo.addProperty("cardHolder", this.cardHolder);
		jbo.addProperty("expDate", this.expDate);
		jbo.addProperty("securityCode", this.securityCode);
		
		return jbo;
	}
	
}

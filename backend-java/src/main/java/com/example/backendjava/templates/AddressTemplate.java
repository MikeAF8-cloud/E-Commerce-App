package com.example.backendjava.templates;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.JsonObject;

@Entity
@Table(name = "Addresses")
@SecondaryTable(name = "OrderAddresses")
public class AddressTemplate {
	
	@Id
	@JoinColumn(name = "addressID")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="numGen")
	@GenericGenerator(name = "numGen", 
		strategy = "com.example.backendjava.utils.NumericGenerator",
		parameters = {
				@Parameter(name = "value", value = "66")
		}
	)
	private long addressID;
	
	@JsonProperty(value = "streetAddress")
	@Column(name = "streetAddress")
	private String streetAddress;
	
	@JsonProperty(value = "city")
	@Column(name = "city")
	private String city;
	
	@JsonProperty(value = "state")
	@Column(name = "state")
	private String state;
	
	@JsonProperty(value = "zipcode")
	@Column(name = "zipcode")
	private String zipcode;
	
	
	public long getAddressID() {
		return addressID;
	}

	public void setAddressID(long addressID) {
		this.addressID = addressID;
	}
	
	public String getStreetAddress() {
		return streetAddress;
	}
	
	public void setStreetName(String streetAddress) {
		this.streetAddress = streetAddress;
	}
	
	public String getCity() {
		return city;
	}
	
	public void setCity(String city) {
		this.city = city;
	}
	
	public String getState() {
		return state;
	}
	
	public void setState(String state) {
		this.state = state;
	}
	
	public String getZipcode() {
		return zipcode;
	}
	
	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public JsonObject toJsonObject() {
		JsonObject jbo =  new JsonObject();
		jbo.addProperty("streetAddress", this.streetAddress);
		jbo.addProperty("city", this.city);
		jbo.addProperty("state", this.state);
		jbo.addProperty("zipcode", this.zipcode);
		
		return jbo;
	}
}

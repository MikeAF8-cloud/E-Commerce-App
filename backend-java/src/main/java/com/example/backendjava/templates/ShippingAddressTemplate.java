package com.example.backendjava.templates;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.JsonObject;

@SuppressWarnings("serial")
@Entity(name = "ShippingAddresses")
@Table(name = "ShippingAddresses")
public class ShippingAddressTemplate implements Serializable {
	
	@Id
	@JoinColumn(name = "orderAddressID")
	@GenericGenerator(name = "num_gen", strategy = "com.example.backendjava.utils.NumericGenerator",
			parameters = {
					@Parameter(name = "value", value = "28")
			}
	)
	@GeneratedValue(strategy = GenerationType.AUTO, generator="num_gen")
	private long orderAddressID;
	
//	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//	@PrimaryKeyJoinColumn(name = "orderAddressID")
//	private OrderTemplate order;
	
	@Column(name = "streetAddress")
	@JsonProperty(value = "streetAddress")
	private String streetAddress;
	
	@Column(name = "city")
	@JsonProperty(value = "city")
	private String city;
	
	@Column(name = "state")
	@JsonProperty(value = "state")
	private String state;
	
	@Column(name = "zipcode")
	@JsonProperty(value = "zipcode")
	private String zipCode;
	
	public String getStreetAddress() {
		return streetAddress;
	}

	public void setStreetAddress(String streetAddress) {
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

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public long getOrderAddressID() {
		return orderAddressID;
	}

	public void setOrderAddressID(long orderAddressID) {
		this.orderAddressID = orderAddressID;
	}
	
	public JsonObject toJsonObject() {
		JsonObject jbo = new JsonObject();
		
		jbo.addProperty("streetAddress", this.streetAddress);
		jbo.addProperty("city", this.city);
		jbo.addProperty("state", this.state);
		jbo.addProperty("zipcode", this.zipCode);
		
		return jbo;
	}
}

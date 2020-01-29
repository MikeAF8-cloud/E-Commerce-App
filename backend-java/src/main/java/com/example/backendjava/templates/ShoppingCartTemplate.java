package com.example.backendjava.templates;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@SuppressWarnings("serial")
@Entity(name = "ShoppingCart")
@Table(name = "ShoppingCart")
@IdClass(ShoppingCartId.class)
public class ShoppingCartTemplate implements Serializable {

	@Id
	@Column(name = "userID")
	@JsonProperty(value = "user")
	private String userID;
	
	@Column(name = "quantity")
	@JsonProperty(value = "quantity")
	private int quantity;
	
	@Id
	@Column(name = "productID")
	@JsonProperty(value = "productId")
	private long productID;
	
	public String getUser() {
		return userID;
	}

	public void setUser(String user) {
		this.userID = user;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public long getProduct() {
		return productID;
	}

	public void setProduct(long product) {
		this.productID = product;
	}
	
}

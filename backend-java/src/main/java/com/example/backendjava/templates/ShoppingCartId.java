package com.example.backendjava.templates;

import java.io.Serializable;

@SuppressWarnings("serial")
public class ShoppingCartId implements Serializable{
	private String userID;
	
	private long productID;

	ShoppingCartId() {
		
	}
	
	ShoppingCartId(String userID, long productID) {
		this.userID = userID;
		this.productID = productID;
	}
	
	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public long getProductID() {
		return productID;
	}

	public void setProductID(long productID) {
		this.productID = productID;
	}
}

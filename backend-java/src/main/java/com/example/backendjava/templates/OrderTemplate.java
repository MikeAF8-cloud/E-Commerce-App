package com.example.backendjava.templates;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.JsonObject;

@Entity
@Table(name = "Orders")
public class OrderTemplate {
	
	@Id
	@Column(name = "orderID")
	@GenericGenerator(name = "num_gen", strategy = "com.example.backendjava.utils.NumericGenerator",
		parameters = {
				@Parameter(name = "value", value = "22")
		}
	)
	@GeneratedValue(strategy = GenerationType.AUTO, generator="num_gen")
	private long orderID;
	
	@JsonProperty(value = "user")
	@Column(name = "userID")
	private String userID;
	
	@Column(name = "nameID")
	private long nameID;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "orderDate")
	private Date date = new Date();
	
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "orderAddressID")
	@JsonProperty("address")
	private ShippingAddressTemplate shipAddress;
	
	@JoinColumn(name = "orderID")
	@OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
	@JsonProperty("products")
	private List<ProductsOrderTemplate> products = new ArrayList<ProductsOrderTemplate>();
	
	@Column(name = "cardNumber")
	private long cardNumber;
	
	@Transient
	private boolean saveCard;
	
	@Transient
	private String cardHolder;
	
	@Transient
	private String expDate;
	
	@Transient
	private int securityCode;

	@Transient
	@JsonProperty(value = "card")
	private void unpackCard(Map<String, Object> card) {
		this.saveCard = (boolean) card.get("saveCard");
		this.cardNumber = (long) card.get("cardNumber");
		this.cardHolder = (String) card.get("cardHolder");
		this.expDate = (String) card.get("expDate");
		this.securityCode = (int) card.get("securityCode");
	}
	
	public String getUser() {
		return userID;
	}

	public void setUser(String userID) {
		this.userID = userID;
	}

	public long getOrderID() {
		return orderID;
	}

	public void setOrderID(long orderID) {
		this.orderID = orderID;
	}

	public long getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(long cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getExpDate() {
		return expDate;
	}
	
	public void setExpDate(String expDate) {
		this.expDate = expDate;
	}
	
	public String getCardHolder() {
		return cardHolder;
	}

	public void setCardHolder(String cardHolder) {
		this.cardHolder = cardHolder;
	}

	public int getSecurityCode() {
		return securityCode;
	}

	public void setSecurityCode(int securityCode) {
		this.securityCode = securityCode;
	}

	public boolean isCardSave() {
		return saveCard;
	}

	public void setCardSave(boolean saveCard) {
		this.saveCard = saveCard;
	}

	public ShippingAddressTemplate getShipAddress() {
		return shipAddress;
	}

	public void setShipAddress(ShippingAddressTemplate shipAddress) {
		this.shipAddress = shipAddress;
	}

	public List<ProductsOrderTemplate> getProducts() {
		return products;
	}

	public void setProducts(List<ProductsOrderTemplate> products) {
		this.products = products;
	}
	
	JsonObject getCardInfo() {
		JsonObject jbo = new JsonObject();
		jbo.addProperty("cardNumber", this.cardNumber);
		jbo.addProperty("cardHolder", this.cardHolder);
		jbo.addProperty("expDate", this.expDate);
		jbo.addProperty("securityCode", this.securityCode);
		
		return jbo;
	}

	public long getNameID() {
		return nameID;
	}

	public void setNameID(long nameID) {
		this.nameID = nameID;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}

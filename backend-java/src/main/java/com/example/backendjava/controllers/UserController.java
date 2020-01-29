package com.example.backendjava.controllers;

import com.example.backendjava.templates.*;
import com.example.backendjava.repositories.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendjava.templates.ProductsOrderTemplate;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/user")
@RestController
public class UserController {
	@Autowired
	ProductRepository product;
	
	@Autowired 
	ShoppingCartRepository shoppingCart;
	
	@Autowired
	AddressRepository address;
	
	@Autowired
	NameRepository name;
	
	@Autowired
	CardRepository card;
	
	@Autowired
	OrderRepository order;
	
	@GetMapping(path="/products", consumes="application/json")
	public @ResponseBody ResponseEntity<String> getAllProducts(
			@RequestParam("imageFlag") boolean imageFlag,
			@RequestParam(name = "user", required = false) String id ) {
		
		JsonObject jbo = new JsonObject();
		JsonArray jba = new JsonArray();
		
		List<ProductTemplate> products = product.findAll();
		
		List<ShoppingCartTemplate> cart = null;
		if (id != null) {
			cart = shoppingCart.getUserCart(id);
		}
		
		for (int i = 0; i < products.size(); i++) {
			JsonObject temp = products.get(i).toJsonObject(imageFlag);
			if (id != null && !cart.isEmpty()) {
				if (temp.get("id").getAsLong() == cart.get(0).getProduct()) {
					temp.addProperty("quantity", cart.get(0).getQuantity());
					cart.remove(0);
				}
			}
			jba.add(temp);			
		}
		
		jbo.add("products", jba);
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@GetMapping(path="/products/shopping_cart/amount", consumes="application/json")
	public @ResponseBody ResponseEntity<String> getCartAmount(@RequestParam("user") String user) {
		JsonObject jbo = new JsonObject();
		
		jbo.addProperty("amount", shoppingCart.getCartAmount(user));
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@PostMapping(path="/product/shopping_cart/add", consumes="application/json")
	public @ResponseBody ResponseEntity<String> addToShoppingCart(@RequestBody ShoppingCartTemplate payload) {
		JsonObject jbo = new JsonObject();
		
		System.out.println(payload.getUser() + ", " + payload.getProduct() + ", " + payload.getQuantity());
		shoppingCart.addToCart(payload.getUser(), payload.getProduct(), payload.getQuantity());
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@GetMapping(path="/products/shopping_cart/user_products", consumes="application/json")
	public @ResponseBody ResponseEntity<String> getUserShoppingCart(@RequestParam("user") String user) {	
		JsonObject jbo = new JsonObject();
		JsonArray jba = new JsonArray();
		
		List<ProductTemplate> products = product.getUserCart(user);
		List<Integer> quantity = shoppingCart.getCartQuantityList(user);
		
		for (int i = 0; i < products.size(); i++) {
			JsonObject temp = products.get(i).toJsonObject(true);
			temp.addProperty("quantity", quantity.get(i));
			
			jba.add(temp);			
		}
		jbo.add("products", jba);
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@PutMapping(path="/product/shopping_cart/quantity_change", consumes="application/json")
	public @ResponseBody ResponseEntity<String> changeProductQuantity(@RequestBody ShoppingCartTemplate payload) {
		JsonObject jbo = new JsonObject();
		
		System.out.println(payload.getQuantity());
		shoppingCart.changeProductQuantity(payload.getUser(), payload.getProduct(), payload.getQuantity());
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@GetMapping(path="/product/shopping_cart/quantity", consumes="application/json")
	public @ResponseBody ResponseEntity<String> getProductQuantity(
			@RequestParam("user") String user, 
			@RequestParam("productId") long product) {
		
		JsonObject jbo = new JsonObject();
		jbo.addProperty("quantity", shoppingCart.getProductAmount(user, product));
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@DeleteMapping(path="/product/shopping_cart/delete", consumes="application/json")
	public @ResponseBody ResponseEntity<String> deleteFromCart(
			@RequestParam("user") String user,
			@RequestParam("productId") long product) {
		
		JsonObject jbo = new JsonObject();
		
		shoppingCart.deleteFromCart(user, product);
	
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@DeleteMapping(path="/products/shopping_cart/delete", consumes="application/json")
	public @ResponseBody ResponseEntity<String> deleteCart(@RequestParam("user") String user) {
		JsonObject jbo = new JsonObject();
	
		shoppingCart.deleteCart(user);
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@GetMapping(path="/checkout/address/get", consumes="application/json")
	public @ResponseBody ResponseEntity<String> getUserShippingAddress(@RequestParam("user") String user) {
		JsonObject jbo = new JsonObject();
		
		AddressTemplate adr = address.getUserAddress(user);
		NameTemplate n = name.getName(user);
		System.out.println("456");
		
		System.out.println(adr.getStreetAddress() + ", " + adr.getCity() + ", " + adr.getState() + ", " + adr.getZipcode());
		System.out.println(n.getFirstName() + ", " + n.getLastName());
		
		jbo.add("name", n.toJsonObject());
		jbo.add("address", adr.toJsonObject());
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@GetMapping(path="/checkout/card/get", consumes="application/json") 
	public @ResponseBody ResponseEntity<String> getUserCardInfo(@RequestParam("user") String user) {
		JsonObject jbo = new JsonObject();
		JsonArray jba = new JsonArray();
		
		List<CardTemplate> cards = card.getUserCards(user);
		for(int i = 0; i < cards.size(); i++) {
			jba.add(cards.get(i).toJsonObject());
		}
		
		jbo.add("cards", jba);
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@PostMapping(path="checkout/order/place", consumes="application/json")
	public @ResponseBody ResponseEntity<String> placeOrder(@RequestBody OrderTemplate payload) {
		JsonObject jbo = new JsonObject();
		
		
		if (payload.isCardSave()) {
			CardTemplate card_ = 
					new CardTemplate(payload.getUser(), payload.getCardNumber(), 
							payload.getCardHolder(), payload.getExpDate(), payload.getSecurityCode());
			
			card.save(card_);
		}
		payload.setNameID(name.getNameID(payload.getUser()));
		
		order.save(payload);
		shoppingCart.deleteCart(payload.getUser());
		jbo.addProperty("orderID", payload.getOrderID());
		
		System.out.println(jbo.get("orderID").getAsLong());
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@GetMapping(path="/orders/all", consumes="application/json")
	public @ResponseBody ResponseEntity<String> getAllUserOrders(@RequestParam("user") String user) {
		JsonObject jbo = new JsonObject();
		JsonArray jba = new JsonArray();		
		
		List<OrderTemplate> orders = order.getAllUserOrders(user);
		for(int i = 0; i < orders.size(); i++) {
			JsonObject tempObject = new JsonObject();
			
			tempObject.addProperty("orderID", orders.get(i).getOrderID());
			tempObject.addProperty("date", orders.get(i).getDate().toString());
			tempObject.add("address", orders.get(i).getShipAddress().toJsonObject());
			
			JsonArray tempArray = new JsonArray();
			List<ProductsOrderTemplate> order = orders.get(i).getProducts();
			for (int j = 0; j < order.size(); j++) {
				tempArray.add(order.get(j).toJsonObject());
			}
			tempObject.add("products", tempArray);
			
			jba.add(tempObject);
		}
		jbo.add("orders", jba);
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@GetMapping(path="/order/confirmed", consumes="application/json")
	public @ResponseBody ResponseEntity<String> getAllOrders(@RequestParam("orderId") String orderId, @RequestParam("user") String user) {
		JsonObject jbo = new JsonObject();
		
		OrderTemplate order_ = order.getUserOrder(user, orderId);
		
		jbo.addProperty("orderID", order_.getOrderID());
		jbo.addProperty("date", order_.getDate().toString());
		jbo.add("address", order_.getShipAddress().toJsonObject());
		
		JsonArray jba = new JsonArray();
		List<ProductsOrderTemplate> products = order_.getProducts();
		for (int i = 0; i < products.size(); i++) {
			jba.add(products.get(i).toJsonObject());
		}
		jbo.add("products", jba);
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
}

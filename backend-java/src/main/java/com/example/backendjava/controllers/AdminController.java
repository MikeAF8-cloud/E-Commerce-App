package com.example.backendjava.controllers;

import com.example.backendjava.templates.*;
import com.example.backendjava.repositories.*;
import com.example.backendjava.utils.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendjava.templates.ProductsOrderTemplate;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;


@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/admin")
@RestController
public class AdminController {
	
	@Autowired
	ProductRepository product;
	
	@Autowired 
	OrderRepository order;
	
	@Autowired
	NameRepository name;
	
	@PostMapping(path="/product/new", consumes="application/json")
	public @ResponseBody ResponseEntity<String> postProduct(@RequestBody ProductTemplate payload) throws Exception {
		JsonObject jbo = Validators.validateProduct(payload);
		
		if (jbo.size() != 0) {
			return new ResponseEntity<String> (jbo.toString(), HttpStatus.BAD_REQUEST);
		}
		
		try {
			payload.setImage(payload.getImageUrl());
		} catch (IOException e) {
			jbo.addProperty("general", "Could not retrieve image. Please try to upload another image.");
			return new ResponseEntity<String> (jbo.toString(), HttpStatus.BAD_REQUEST);
		} catch (SQLException e) {
			jbo.addProperty("general", "Could not convert image. Please try to upload another image.");
			return new ResponseEntity<String> (jbo.toString(), HttpStatus.BAD_REQUEST);
		}
		
		product.save(payload);

		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
	}
	
	@PostMapping(path = "/product", consumes="application/json")
	public @ResponseBody ResponseEntity<String> updateProduct(@RequestParam("productID") long id, @RequestBody ProductTemplate payload) {
		JsonObject jbo = Validators.validateProduct(payload);
		
		if (jbo.size() != 0) {
			return new ResponseEntity<String> (jbo.toString(), HttpStatus.BAD_REQUEST);
		}
		
		try {
			payload.setImage(payload.getImageUrl());
		} catch (IOException e) {
			jbo.addProperty("general", "Could not retrieve image. Please try to upload another image.");
			return new ResponseEntity<String> (jbo.toString(), HttpStatus.BAD_REQUEST);
		} catch (SQLException e) {
			jbo.addProperty("general", "Could not convert image. Please try to upload another image.");
			return new ResponseEntity<String> (jbo.toString(), HttpStatus.BAD_REQUEST);
		}
		
		product.updateProduct(
				payload.getTitle(), payload.getPrice(), 
				payload.getCategory(), payload.getImageUrl(), 
				payload.getImage(), id
		);
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);	
	}
	
	@DeleteMapping(path="/product/delete", consumes="application/json")
	public @ResponseBody ResponseEntity<String> deleteProduct(@RequestParam("productID") long id) {
		JsonObject jbo = new JsonObject();
		
		product.deleteProduct(id);
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);	
	}
	
//	@GetMapping(path="/products", consumes="application/json")
//	public @ResponseBody ResponseEntity<String> getAllProducts() {
//		
//		JsonObject jbo = new JsonObject();
//		JsonArray jba = new JsonArray();
//		
//		List<ProductTemplate> products = product.findAll();
//		
//		for (int i = 0; i < products.size(); i++) {
//			jba.add(products.get(i).toJsonObject(false));			
//		}
//		jbo.addProperty("imageFlag", false);
//		jbo.add("products", jba);
//		
//		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK);
//	}
	
	@GetMapping(path="product/productInfo", consumes="application/json")
	public @ResponseBody ResponseEntity<String> getProductInfo(@RequestParam("productID") long id) {
		JsonObject jbo = new JsonObject();
		
		ProductTemplate temp = product.getProductInfo(id);
		
		jbo = temp.toJsonObject(false);
		
		return new ResponseEntity<String> (jbo.toString(), HttpStatus.OK); 
	}
	
	@GetMapping(path="/orders/all", consumes="application/json")
	public @ResponseBody ResponseEntity<String> getAllOrders() {
		JsonObject jbo = new JsonObject();
		JsonArray jba = new JsonArray();
		
		List<OrderTemplate> orders = order.getAllOrders();
		for(int i = 0; i < orders.size(); i++) {
			JsonObject tempObject = new JsonObject();
			
			tempObject.addProperty("orderID", orders.get(i).getOrderID());
			tempObject.addProperty("name", name.getFullName(orders.get(i).getNameID()));
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
}

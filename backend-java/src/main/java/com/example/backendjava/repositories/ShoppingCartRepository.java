package com.example.backendjava.repositories;

import com.example.backendjava.templates.ShoppingCartTemplate;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCartTemplate, Integer> {

	@Procedure(procedureName = "add_to_cart")
	public void addToCart(
			@Param("userId") String user, 
			@Param("product") long product,
			@Param("amount") int amount
	);	
	
	@Query(value = "SELECT SUM(quantity)"
			+ "FROM ShoppingCart "
			+ "WHERE ShoppingCart.userID=?1", nativeQuery=true)
	public int getCartAmount(String user);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "UPDATE ShoppingCart "
			+ "SET ShoppingCart.quantity=ShoppingCart.quantity+?3 "
			+ "WHERE ShoppingCart.userID=?1 "
			+ "AND ShoppingCart.productID=?2", nativeQuery = true)
	public void changeProductQuantity(String user, long product, int amount);
	
	@Query(value = "SELECT ShoppingCart.quantity "
			+ "FROM ShoppingCart "
			+ "WHERE ShoppingCart.userID=?1 "
			+ "AND ShoppingCart.productID=?2", nativeQuery = true)
	public int getProductAmount(String user, long product);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "DELETE FROM ShoppingCart "
			+ "WHERE ShoppingCart.userID=?1 "
			+ "AND ShoppingCart.productID=?2", nativeQuery = true)
	public void deleteFromCart(String user, long product);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "DELETE ShoppingCart FROM ShoppingCart "
			+ "INNER JOIN Users on ShoppingCart.userID=Users.userID "
			+ "WHERE Users.userID=?1", nativeQuery = true)
	public void deleteCart(String user);
	
	@Query(value = "SELECT ShoppingCart.quantity from ShoppingCart "
			+ "INNER JOIN Users on ShoppingCart.userID=Users.userID "
			+ "WHERE Users.userID=?1 "
			+ "ORDER BY ShoppingCart.productID", nativeQuery = true)
	public List<Integer> getCartQuantityList(String user);
	
	@Query(value = "SELECT * FROM ShoppingCart "
			+ "INNER JOIN Users on ShoppingCart.userID=Users.userID "
			+ "WHERE Users.userID=?1 "
			+ "ORDER BY ShoppingCart.productID", nativeQuery = true)
	public List<ShoppingCartTemplate> getUserCart(String user);
	
}

package com.example.backendjava.repositories;

import com.example.backendjava.templates.ProductTemplate;

import java.sql.Blob;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<ProductTemplate, Integer> {
	
	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "UPDATE Products SET title=?1, price=?2, category=?3, imageUrl=?4, image=?5 WHERE productID=?6", nativeQuery = true)
	public void updateProduct(String title, float price, 
			String category, String imageUrl, 
			Blob image, long id);
	
	@Transactional
	@Modifying(clearAutomatically = true)
	@Query(value = "DELETE FROM Products WHERE productID=?1", nativeQuery = true)
	public void deleteProduct(long id);
	
	@Query(value="SELECT productID FROM Products WHERE productID=?1", nativeQuery=true)
	public long findProductID(long id);
	
	@Query(value="SELECT productID, title, price, category, imageUrl, image FROM Products WHERE productID=?1", nativeQuery=true)
	public ProductTemplate getProductInfo(long id);
	
	@Query(value="SELECT productID, title, price, category, imageUrl FROM Products", nativeQuery=true)
	public List<ProductTemplate> getAllProductInfo();
	
	@Query(value = "SELECT * FROM Products "
			+ "INNER JOIN ShoppingCart on Products.productID=ShoppingCart.productID "
			+ "INNER JOIN Users on ShoppingCart.userID=Users.userID "
			+ "WHERE Users.userID=?1 "
			+ "ORDER BY Products.productID", nativeQuery = true)
	public List<ProductTemplate> getUserCart(String fname);
}
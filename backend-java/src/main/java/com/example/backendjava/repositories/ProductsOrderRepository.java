package com.example.backendjava.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backendjava.templates.ProductsOrderTemplate;

@Repository
public interface ProductsOrderRepository extends JpaRepository<ProductsOrderTemplate, Integer> {
	
}
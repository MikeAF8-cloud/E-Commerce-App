package com.example.backendjava.repositories;

import com.example.backendjava.templates.CardTemplate;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository extends JpaRepository<CardTemplate, Integer> {
	
	@Query(value = "SELECT * FROM Cards WHERE userID=?1", nativeQuery = true)
	public List<CardTemplate> getUserCards(String user);
}


package com.example.backendjava.repositories;

import com.example.backendjava.templates.SignUpTemplate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignupRepository extends JpaRepository<SignUpTemplate, Integer> {
	
}
package com.example.backendjava.repositories;

import com.example.backendjava.templates.AddressTemplate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface AddressRepository extends JpaRepository<AddressTemplate, Integer> {
	
	@Query(value = "SELECT * FROM Addresses "
			+ "INNER JOIN Users ON Addresses.addressID=Users.addressID "
			+ "WHERE Users.userID=?1", nativeQuery = true)
	public AddressTemplate getUserAddress(String user);
	
}
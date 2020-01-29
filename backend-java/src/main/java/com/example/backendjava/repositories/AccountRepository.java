package com.example.backendjava.repositories;

import com.example.backendjava.templates.AccountInfoTemplate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<AccountInfoTemplate, Integer> {
	
	@Query(value="SELECT AccountInfo.authority FROM AccountInfo "
			+ "INNER JOIN Users ON AccountInfo.accountInfoID=Users.accountInfoID "
			+ "INNER JOIN Names ON Users.nameID=Names.nameID "
			+ "WHERE Names.firstName=?1", nativeQuery = true)
	public String findAuthByFname(String firstname);
	
	
	@Query(value="SELECT AccountInfo.authority FROM AccountInfo WHERE email=?1", nativeQuery = true) 
	public String findAuthByEmail(String email);
}



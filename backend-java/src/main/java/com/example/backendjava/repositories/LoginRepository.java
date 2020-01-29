package com.example.backendjava.repositories;

import com.example.backendjava.templates.SignInTemplate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface LoginRepository extends JpaRepository<SignInTemplate, Integer> {
	
	@Query(value="SELECT * FROM AccountInfo WHERE email=?1 AND password=?2 LIMIT 1", nativeQuery = true)
	public SignInTemplate findByUserName(String email, String password);
	
	@Query(value="SELECT Users.userID FROM Users "
			+ "INNER JOIN AccountInfo on Users.accountInfoID=AccountInfo.accountInfoID "
			+ "WHERE AccountInfo.email=?1", nativeQuery=true)
	public String findUserId(String email);
	
}



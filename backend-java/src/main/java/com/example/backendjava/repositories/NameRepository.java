package com.example.backendjava.repositories;

import com.example.backendjava.templates.NameTemplate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface NameRepository extends JpaRepository<NameTemplate, Integer> {
	
	@Query(value="SELECT Names.firstName FROM Names "
			+ "INNER JOIN Users ON Names.nameID=Users.nameID "
			+ "INNER JOIN AccountInfo ON Users.accountInfoID=AccountInfo.accountInfoID "
			+ "WHERE AccountInfo.email=?1", nativeQuery = true) 
	public String findNameByEmail(String email);
	
	@Query(value = "SELECT * FROM Names "
			+ "INNER JOIN Users ON Names.nameID=Users.nameID "
			+ "WHERE Users.userID=?1", nativeQuery = true)
	public NameTemplate getName(String user);
	
	@Query(value = "SELECT nameID from Users "
			+ "WHERE Users.userID = ?1", nativeQuery = true)
	public long getNameID(String userID);
	
	@Query(value = "SELECT CONCAT(firstName, \" \", lastName) FROM Names "
			+ "WHERE nameID=?1", nativeQuery = true)
	public String getFullName(long nameID);
}

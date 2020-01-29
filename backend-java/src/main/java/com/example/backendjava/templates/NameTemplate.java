package com.example.backendjava.templates;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.JsonObject;

import org.hibernate.annotations.GenericGenerator;

@Entity(name = "Names")
@Table(name = "Names")
public class NameTemplate {
	
	@Id
	@JoinColumn(name = "nameID")
	@GenericGenerator(name = "num_gen", strategy = "com.example.backendjava.utils.NumericGenerator",
			parameters = {
					@Parameter(name = "value", value = "80")
			}
	)
	@GeneratedValue(strategy = GenerationType.AUTO, generator="num_gen")
	private long nameID;
	
	@JsonProperty(value = "firstname")
	@Column(name = "firstName")
	private String firstName;
	
	@JsonProperty(value = "lastname")
	@Column(name = "lastName")
	private String lastName;

	public long getNameID() {
		return nameID;
	}

	public void setNameID(long nameID) {
		this.nameID = nameID;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstname) {
		this.firstName = firstname;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastname) {
		this.lastName = lastname;
	}
	
	public JsonObject toJsonObject() {
		JsonObject jbo = new JsonObject();
		jbo.addProperty("firstname", this.firstName);
		jbo.addProperty("lastname", this.lastName);
		
		return jbo;
	}
	
}

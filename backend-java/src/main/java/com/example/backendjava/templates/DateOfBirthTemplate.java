package com.example.backendjava.templates;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "DOBs")
public class DateOfBirthTemplate {
	
	@Id
	@JoinColumn(name = "dobID")
	@GenericGenerator(name = "num_gen", strategy = "com.example.backendjava.utils.NumericGenerator",
			parameters = {
					@Parameter(name = "value", value = "31")
			}
	)
	@GeneratedValue(strategy = GenerationType.AUTO, generator="num_gen")
	private long dobID;

	@JsonProperty(value = "month")
	@Column(name = "month")
	private int month;
	
	@JsonProperty(value = "day")
	@Column(name = "day")
	private int day;
	
	@JsonProperty(value = "year")
	@Column(name = "year")
	private int year;
	
	public long getDobID() {
		return dobID;
	}

	public void setDobID(long dobID) {
		this.dobID = dobID;
	}

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}

	public int getDay() {
		return day;
	}

	public void setDay(int day) {
		this.day = day;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}
	
}

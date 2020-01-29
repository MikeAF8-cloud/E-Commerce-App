package com.example.backendjava.utils;

import com.example.backendjava.templates.*;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.google.gson.JsonObject;

public class Validators {
	
	private static final String regexEmail = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])";
	//private static final String regexDOB = "^(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])-[0-9]{4}$";
	private static final String regexStreet = "^\\d+\\s[A-z]+\\s[A-z]+\\.?";
	private static final String regexPassword = "^(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{7,30}$";
	private static final String regexPrice = "(\\d+\\.\\d{2,2})";
	private static final String regexImageUrl = "(http)?s?:?(\\/\\/[^\"']*\\.(?:png|jpg|jpeg|gif|png|svg))((\\?.*)?)";
	
	private static Pattern pattern;
	private static Matcher matcher;
	
	public static JsonObject validateLogin(String email, String password) {
		pattern = Pattern.compile(regexEmail);
		matcher = pattern.matcher(email);
		
		JsonObject errors = new JsonObject();
		boolean err = false;
		
		if (email.isBlank()) {
			err = true;
			//errors.addProperty("email", "Field must not be blank");
		} else if (!matcher.matches()) {
			err = true;
			//errors.addProperty("email", "Invalid email");
		}
		
		pattern = Pattern.compile(regexPassword);
		matcher = pattern.matcher(password);
		
		if (password.isBlank()) {
			err = true;
			//errors.addProperty("password", "Field must not be back");
		} else if (password.length() < 7) {
			err = true;
			//errors.addProperty("password", "Field must not be less than 7 characters");
		} else if (!matcher.matches()) {
			err = true;
			//errors.addProperty("password", "Invalid password");
		}
		
		if (err == true) {
			errors.addProperty("general", "Invalid credentials");
		}
		
		return errors;
	}
	
	public static JsonObject validateSignup(SignUpTemplate payload) {
		
		JsonObject errors = new JsonObject();
		
		validateName(errors, payload.getName());
		validateAddress(errors, payload.getAddress());
		validateDOB(errors, payload.getDOB());
		validateEmail(errors, payload.getAccountInfo().getNewEmail());
		validatePassword(errors, payload.getAccountInfo().getNewPassword());
		
		return errors;
	}
	
	private static JsonObject validateName(JsonObject errors, NameTemplate name) {
		if (name.getFirstName().isBlank()) {
			errors.addProperty("firstname", "First name is required");
		}
		if (name.getLastName().isBlank()) {
			errors.addProperty("lastname", "Last name is required");
		}
		
		return errors;
	}
	
	private static JsonObject validateAddress(JsonObject errors, AddressTemplate address) {
		pattern = Pattern.compile(regexStreet);
		matcher = pattern.matcher(address.getStreetAddress());
		
		if (address.getStreetAddress().isBlank()) {
			errors.addProperty("streetAddress", "Street address is required");
		} else if (!matcher.matches()) {
			errors.addProperty("streetAddress", "Invalid street address");
		}
		
		if (address.getCity().isBlank()) {
			errors.addProperty("city", "City is required");
		}
		
		if (address.getState().isEmpty()) {
			errors.addProperty("state", "Please select a state");
		}
		
		if (address.getZipcode().isBlank()) {
			errors.addProperty("zipcode", "Zipcode is required");
		} else if (!address.getZipcode().matches("[0-9]+")) {
			errors.addProperty("zipcode", "Invalid zipcode");
		} else if (address.getZipcode().length() != 5) {
			errors.addProperty("zipcode", "Invalid zipcode");
		}
		
		return errors;
	}
	
	private static JsonObject validateDOB(JsonObject errors, DateOfBirthTemplate dob) {
		int month = dob.getMonth();
		int day = dob.getDay();
		int year = dob.getYear();
		
		if (day == 0 || year == 0) {
			errors.addProperty("dob", "Date of birth must be required");
			
		} 
		else if (month < 0 || month > 11 || day < 0 || year < 1900) {
			errors.addProperty("dob", "Invalid date of birth");
		} else {
			switch(month) {
			case 2:
				if (day > 28) {
					if (day == 29) {	
			            if (year % 4 != 0) {
			            	errors.addProperty("dob", "Invalid date of birth");
			            }
			            if (year % 100 == 0) {
			              if (year % 400 != 0) {
			            	  errors.addProperty("dob", "Invalid date of birth");
			              }
			            }
			          } else {
			        	  errors.addProperty("dob", "Invalid date of birth");
			          }
			        }
				break;
			case 4:
		        if (day > 30) {
		        	errors.addProperty("dob", "Invalid date of birth");
		        }
		        break;
			case 6:
		        if (day > 30) {
		        	errors.addProperty("dob", "Invalid date of birth");
		        }
		        break;
		    case 9:
		        if (day > 30) {
		        	errors.addProperty("dob", "Invalid date of birth");
		        }
		        break;
		    case 11:
		        if (day > 30) {
		        	errors.addProperty("dob", "Invalid date of birth");
		        }
		        break;
		    default:
		        break;
			}
		}
		
		return errors;
	}
	
	private static JsonObject validateEmail(JsonObject errors, NewEmail payload) {
		final String email = payload.getEmail();
		final String confEmail = payload.getConfirmEmail();
		
		Pattern pattern = Pattern.compile(regexEmail);
		Matcher matcher = pattern.matcher(payload.getEmail());
		
		if (email.isBlank()) {
			errors.addProperty("email", "Email address is required");
		} else if (!matcher.matches()) {
			errors.addProperty("email", "Invalid email address");
		}
		
		if (confEmail.isBlank()) {
			errors.addProperty("confirmEmail", "Field is required");
		} else if (!confEmail.equals(email)) {
			errors.addProperty("confirmEmail", "Email addresses do not match up");
		}
		
		return errors;
	}
	
	public static JsonObject validatePassword(JsonObject errors, NewPassword payload) {
		
		final String password = payload.getPassword();
		final String confPassword = payload.getConfirmPassword();
		
		Pattern pattern = Pattern.compile(regexPassword);
		Matcher matcher = pattern.matcher(payload.getPassword());
		
		if (password.isBlank()) {
			errors.addProperty("password", "Password is required");
		} else if (password.length() < 7) {
			errors.addProperty("password", "Password must be at least 7 characters");
		} else if (!matcher.matches()) {
			errors.addProperty("password", "Password must contain 1 uppercase letter, 1 number, and 1 special character");
		}
		
		if (confPassword.isBlank()) {
			errors.addProperty("confirmPassword", "Field is required");
		} else if (!confPassword.equals(password)) {
			errors.addProperty("confirmPassword", "Passwords do not match up");
		}
		
		return errors;
	}
	
	public static JsonObject validateProduct(ProductTemplate payload) {
		JsonObject errors = new JsonObject();
		
		if(payload.getTitle().isBlank()) {
			errors.addProperty("title", "Title is required");
		}
		
		String price = String.format("%.2f", payload.getPrice());		
		
		pattern = Pattern.compile(regexPrice);
		matcher = pattern.matcher(price);
	
		if(price.equals("0.00")) {
			errors.addProperty("price", "Price is required");
		} else if (!matcher.matches()) {
			errors.addProperty("price", "Invalid price");
		}
		
		if(payload.getCategory().isBlank()) {
			errors.addProperty("category", "Category is required");
		}
		
		pattern = Pattern.compile(regexImageUrl);
		matcher = pattern.matcher(payload.getImageUrl());
		if (payload.getImageUrl().isBlank()) {
			errors.addProperty("imageUrl", "Image url is required");
		} else if (!matcher.matches()) {
			errors.addProperty("imageUrl", "Invalid image url");
		}
		
		return errors;
	}
}

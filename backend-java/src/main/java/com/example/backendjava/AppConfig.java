package com.example.backendjava;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@PropertySource("classpath:application.properties")
public class AppConfig {

  @Bean(name = "dataSource")
  public DataSource getDataSource() {	
	DriverManagerDataSource  dataSource = new DriverManagerDataSource();
    dataSource.setDriverClassName("com.mysql.jdbc.Driver");
    dataSource.setUrl("jdbc:mysql://localhost:3306/ecommerce_database");
    dataSource.setUsername("root");
    dataSource.setPassword("v3r1t4s2196!");
    
    return dataSource;
  }
}
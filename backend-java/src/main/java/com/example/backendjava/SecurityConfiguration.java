package com.example.backendjava;

import com.example.backendjava.utils.JwtAuthenticationTokenFilter;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	@Autowired
	DataSource dataSource;
	
	@Autowired
	JwtAuthenticationTokenFilter tokenFilter;
		
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
	    auth
	      .jdbcAuthentication()
	      .dataSource(dataSource)
	      .usersByUsernameQuery("select email, password, enabled from AccountInfo where email=?")
	      .authoritiesByUsernameQuery("select email, authority from AccountInfo where email=?")
	      .passwordEncoder(passwordEncoder());
	    
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		//http.csrf().disable();
		
		http
		.cors()
		.and()
		.csrf().disable()
		.authorizeRequests()
		.antMatchers("/api/signin", "/api/signup")
		.permitAll()
		.antMatchers("/api/admin/**").hasAuthority("ADMIN")
		.antMatchers("/api/user/**").hasAnyAuthority("USER", "ADMIN")
		.anyRequest().authenticated()
		.and()
		.httpBasic()
		.and()
		.sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		http.addFilterBefore(tokenFilter, UsernamePasswordAuthenticationFilter.class);
	}
	
	@Bean
	static BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
	  return super.authenticationManagerBean();
	}
	
	@Bean
	public JdbcUserDetailsManager jdbcUserDetailsManager() throws Exception {
		JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager();
		jdbcUserDetailsManager.setDataSource(dataSource);
		
		jdbcUserDetailsManager.setUserExistsSql("select email from AccountInfo where email = ?");
		jdbcUserDetailsManager.setCreateUserSql("insert into AccountInfo (email, password, enabled) values (?,?,?)");
		jdbcUserDetailsManager.setCreateAuthoritySql("insert into AccountInfo (email, authority) values (?,?)");
		jdbcUserDetailsManager.setUpdateUserSql("update AccountInfo set password = ?, enabled = ? where email = ?");
		jdbcUserDetailsManager.setDeleteUserSql("delete from AccountInfo where email = ?");
		jdbcUserDetailsManager.setDeleteUserAuthoritiesSql("delete from AccountInfo where email = ?");
		
		return jdbcUserDetailsManager;
	}
}

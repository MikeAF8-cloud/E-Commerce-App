package com.example.backendjava.utils;

import java.io.Serializable;
import java.util.Properties;
import java.util.concurrent.ThreadLocalRandom;

import org.hibernate.HibernateException;
import org.hibernate.MappingException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.Configurable;
import org.hibernate.id.IdentifierGenerator;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.type.Type;

public class NumericGenerator implements IdentifierGenerator, Configurable  {
	//private String VALUE_PREFIX_PARAM = "99";
	private long valuePrefix;
	
	@Override
	public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {
		return valuePrefix * 10000000000L + ThreadLocalRandom.current().nextLong(1L, 1000000000L);
	}
	
	@Override
    public void configure(Type type, Properties properties, 
      ServiceRegistry serviceRegistry) throws MappingException {
		valuePrefix = Long.parseLong(properties.getProperty("value"));
    }
}

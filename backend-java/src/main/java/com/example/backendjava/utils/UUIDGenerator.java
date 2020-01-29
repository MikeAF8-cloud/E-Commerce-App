package com.example.backendjava.utils;

import java.io.Serializable;
import java.util.UUID;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

public class UUIDGenerator implements IdentifierGenerator {
	@Override
	public Serializable generate(SharedSessionContractImplementor session, Object object) throws HibernateException {
		//System.out.println(UUID.randomUUID().toString().replace("-", ""));
		return UUID.randomUUID().toString().replace("-", "");
	}
}
package com.sangkhim.spring.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sangkhim.spring.domain.Contact;

@Service
public interface ContactService {
	
	public List<Contact> getAll();
	
	public Contact getById(int contactId);
	
	public int insert(Contact contact);
	
	public int update(Contact contact);
	
	public int deleteById(int contactId);
	
}
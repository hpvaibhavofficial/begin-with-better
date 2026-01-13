package com.example.praxx.repository.impl;

import com.example.praxx.repository.OwnerRepository;

public class OwnerRepoImpl implements OwnerRepository {
	
	public OwnerRepoImpl() {
		System.out.println("OwnerRepoImpl bean is created successfully.");
	}

	@Override
	public String findOwner(int id) {
		return String.format("Found owner with id %s", id);
	}

}

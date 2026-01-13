package com.example.praxx.ownerService.impl;

import com.example.praxx.ownerService.OwnerService;
import com.example.praxx.repository.OwnerRepository;

public class OwnerServiceImpl implements OwnerService{
	
	private OwnerRepository ownerRepository;
	private int ownerId;
	
	public OwnerServiceImpl(OwnerRepository ownerRepository, int ownerId) {
		this.ownerRepository = ownerRepository;
		this.ownerId = ownerId;
		System.out.println("OwnerServiceImpl bean is created successfully.");
	}

	@Override
	public String findOwner() {
		return ownerRepository.findOwner(ownerId);
	}
	
}

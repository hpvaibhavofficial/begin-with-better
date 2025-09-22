package com.quickstart.ecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quickstart.ecommerce.models.Product;
import com.quickstart.ecommerce.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepository productrepo;
	
	@Override
	public List<Product> getAllProducts(){
		return productrepo.findAll();
	}
	

}

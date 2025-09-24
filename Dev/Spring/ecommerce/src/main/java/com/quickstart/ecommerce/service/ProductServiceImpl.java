package com.quickstart.ecommerce.service;

import java.util.List;
import java.util.Optional;

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

	@Override
	public Product getProductById(int id) {
		Optional<Product> opt = productrepo.findById(id);
		Product product = null;
		
		if(opt.isPresent()) {
			product = opt.get();
		} else {
			throw new RuntimeException("Product not found with id "+id);
		}
		return product;	
	}

	@Override
	public void saveProduct(Product product) {
		productrepo.save(product);
		
	}

	@Override
	public void deleteProduct(int id) {
		productrepo.deleteById(id);
	}
	

}

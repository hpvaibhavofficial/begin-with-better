package com.quickstart.ecommerce.service;

import java.util.List;

import com.quickstart.ecommerce.models.Product;

public interface ProductService {
	List<Product> getAllProducts();
	Product getProductById(int id);
	void saveProduct(Product product);
	void deleteProduct(int id);
}

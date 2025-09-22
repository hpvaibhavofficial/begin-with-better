package com.quickstart.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quickstart.ecommerce.models.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

}

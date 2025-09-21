package com.quickstart.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.quickstart.ecommerce.models.Product;

@SpringBootApplication
public class QuickCartApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuickCartApplication.class, args);
		Product esp = new Product(1, "Espresso", 3.22);
		Product latte = new Product(1, "Latte", 3.22);
	
		System.out.println("Espresso Name: " + esp.getName() + " | Price: $" + esp.getPrice());
		System.out.println("Latte Name: " + latte.getName() + " | Price: $" + latte.getPrice());
 
	}

}

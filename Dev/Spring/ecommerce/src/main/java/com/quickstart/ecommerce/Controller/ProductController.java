package com.quickstart.ecommerce.Controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.quickstart.ecommerce.models.Product;

@Controller
@RequestMapping("/products")
public class ProductController {
	
	private List<Product> pl = List.of(
			new Product(1, "Expresso", 23.09),
			new Product(2, "Latte", 12.7),
			new Product(3, "Tea", 7.78)
			);
	
	@RequestMapping(value = {"","/"})
	@ResponseBody
	public String home() {
		return  "Welcome to my coffee shop";
	}

	@RequestMapping("/list")
	public String list(Model obj) {
		obj.addAttribute("pmap", pl);
		return "menu";
	}
	
//	public String list(){
//		String display = "<strong> Products List</strong> <hr>";
//		for(Product x : pl) {
//			display += "Product : "+ x.getId() + " - "+x.getName()+" - $"+x.getPrice()+ "<br>";
//		}
//		return display;	
//	}
	
	@RequestMapping("/details/{id}")
	@ResponseBody
	private String getProductDetailsById(@PathVariable int id){
		for( Product p : pl) {
			if(p.getId() == id) {
				return "<strong> Product Details are </strong> <hr>" + "Product Id : "+p.getId() + " - "+ "Name : "+p.getName()+ " - $" + p.getPrice();
			}
		}
		return "Product Not Found";
		
	}
	
}

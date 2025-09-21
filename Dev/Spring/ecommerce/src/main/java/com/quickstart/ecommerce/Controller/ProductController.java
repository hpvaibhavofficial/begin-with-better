package com.quickstart.ecommerce.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.quickstart.ecommerce.QuickCartApplication;
import com.quickstart.ecommerce.models.Product;


@Controller
@RequestMapping("/")
public class ProductController {

    private final QuickCartApplication quickCartApplication;
	
    private List<Product> productList = new ArrayList<>(List.of(
    	    new Product(1, "Expresso", 23.09),
    	    new Product(2, "Latte", 12.7),
    	    new Product(3, "Tea", 7.78)
    	));


    ProductController(QuickCartApplication quickCartApplication) {
        this.quickCartApplication = quickCartApplication;
    }
	
	@RequestMapping(value = {"","/"})
	public String home(Model obj) {
		obj.addAttribute("products", productList);
		return  "menu";
	}
	
	@RequestMapping("/add")
	public String requestMethodName() {
		return "form";
	}
	
	@PostMapping("/addNewProduct")
	public String addProductsToList(Product product) {
		productList.add(product);
		System.out.println(productList);
		return "redirect:/";
	}
	

	
	
	
	
	

//	public String list(){
//		String display = "<strong> Products List</strong> <hr>";
//		for(Product x : pl) {
//			display += "Product : "+ x.getId() + " - "+x.getName()+" - $"+x.getPrice()+ "<br>";
//		}
//		return display;	
//	}
	
//	@RequestMapping("/details/{id}")
//	@ResponseBody
//	private String getProductDetailsById(@PathVariable int id){
//		for( Product p : pl) {
//			if(p.getId() == id) {
//				return "<strong> Product Details are </strong> <hr>" + "Product Id : "+p.getId() + " - "+ "Name : "+p.getName()+ " - $" + p.getPrice();
//			}
//		}
//		return "Product Not Found";
//		
//	}
//	
//	
//	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

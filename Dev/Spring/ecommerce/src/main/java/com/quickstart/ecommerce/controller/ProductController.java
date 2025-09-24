package com.quickstart.ecommerce.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.quickstart.ecommerce.models.Product;
import com.quickstart.ecommerce.service.ProductService;



@Controller
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/")
	public String viewHomePage(Model map) {
		map.addAttribute("products",productService.getAllProducts());
		return "menu";
	}

	@GetMapping("/showFormUpdate/{id}")
	public String showFormUpdate(@PathVariable int id , Model model) {
		Product product = productService.getProductById(id);
		model.addAttribute("product",product);
		return "updated";
	}
	
	@PostMapping(value = {"/saveProduct","/addNewProduct"})
	public String saveProduct(Product product) {
		productService.saveProduct(product);
		return "redirect:/";

	}
	
	@GetMapping("/deleteProduct/{id}")
	public String deleteProduct(@PathVariable int id) {
		productService.deleteProduct(id);
		return "redirect:/";
	}
	
//	@PostMapping("")
//	public String addNewProduct(Product product) {
//		productService.saveProduct(product);
//		return "redirect:/";
//	}
//	
	@GetMapping("/showFormAdd")
	public String showForm() {
		return "form";
	}
	
	
	
	
}


















//    private final QuickCartApplication quickCartApplication;
//	
//    private List<Product> productList = new ArrayList<>(List.of(
//    	    new Product(1, "Expresso", 23.09),
//    	    new Product(2, "Latte", 12.7),
//    	    new Product(3, "Tea", 7.78)
//    	));
//
//
//    ProductController(QuickCartApplication quickCartApplication) {
//        this.quickCartApplication = quickCartApplication;
//    }
//	
//	@RequestMapping(value = {"","/"})
//	public String home(Model obj) {
//		obj.addAttribute("products", productList);
//		return  "menu";
//	}
//	
//	@RequestMapping("/add")
//	public String requestMethodName() {
//		return "form";
//	}
//	
//	@PostMapping("/addNewProduct")
//	public String addProductsToList(Product product) {
//		productList.add(product);
//		System.out.println(productList);
//		return "redirect:/";
//	}
//	

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

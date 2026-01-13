package com.example.praxx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.example.praxx.config.SpringConfig;
import com.example.praxx.ownerService.OwnerService;

@SpringBootApplication
public class PraxxApplication {

	public static void main(String[] args) {
//		SpringApplication.run(PraxxApplication.class, args);
//		
		ApplicationContext context = new AnnotationConfigApplicationContext(SpringConfig.class);
		OwnerService ownerService = context.getBean("ownerService",OwnerService.class);
		System.out.println(ownerService.findOwner());
		((AnnotationConfigApplicationContext)context).close();
		
	}

}

package com.bookShopping.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins={"http://localhost:4200"})
@RequestMapping(path="/validations")
public class ValidationRestController {
	
	@GetMapping
	public Boolean validateUser(){
		return true;
	}

}

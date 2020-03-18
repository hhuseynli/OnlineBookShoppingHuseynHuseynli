package com.bookShopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookShopping.dao.OrderDAO;
import com.bookShopping.model.OrderModel;

@RestController
@CrossOrigin(origins={"http://localhost:4200"})
@RequestMapping(path="/orders")
public class OrderRestController {
	
	@Autowired
	OrderDAO orderDao;
	
	@GetMapping(path="/order/{username}/{begin}")
	public List<OrderModel> getOrders(@PathVariable(name="username") String username, @PathVariable(name="begin") Integer begin){
		return orderDao.findByUsername(username, begin, 10);
	}
	
	@PostMapping(path="/order")
	public OrderModel createOrder(@RequestBody OrderModel order){
		return orderDao.save(order);
	}

}

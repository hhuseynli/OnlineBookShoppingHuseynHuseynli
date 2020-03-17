package com.bookShopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookShopping.dao.AuthDAO;
import com.bookShopping.dao.UserDAO;
import com.bookShopping.model.User;

@RestController
@RequestMapping(path="/users")
@CrossOrigin(origins={"http://localhost:4200"})
public class UserRestController {
	@Autowired
	UserDAO userDao;
	
	@Autowired 
	AuthDAO authDao;
	
	
	@PostMapping
	public User createUser(@RequestBody User user){
		user.setPassword("{noop}"+user.getPassword());
		user.setEnabled(Byte.valueOf((byte) 1));
		User savedUser=userDao.save(user);
		authDao.addAuthority(user.getUsername());
		return savedUser;
	}

}

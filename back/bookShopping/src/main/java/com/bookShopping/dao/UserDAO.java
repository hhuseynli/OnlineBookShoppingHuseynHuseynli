package com.bookShopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookShopping.model.User;

public interface UserDAO extends JpaRepository<User, String>{

}

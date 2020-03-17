package com.bookShopping.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="users")
public class User {
	@Id
	private String username;
	private String password;
	private Byte enabled;
	private String email;
	private String name;
	private String surname;

}

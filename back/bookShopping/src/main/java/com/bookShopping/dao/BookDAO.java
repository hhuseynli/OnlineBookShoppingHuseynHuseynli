package com.bookShopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bookShopping.model.Book;

public interface BookDAO extends JpaRepository<Book, Integer>{
	
	@Query(value="select * from book where username=?1 limit ?2,?3", nativeQuery=true)
	public List<Book> findByUsername(String username, Integer begin, Integer length);
	
	@Query(value="select * from book where name like %?1% limit ?2,?3", nativeQuery=true)
	public List<Book> searchBook(String search, Integer begin, Integer length);
	
	@Query(value="select * from book where username not like ?1 limit ?2,?3", nativeQuery=true)
	public List<Book> findRange(String username, Integer begin, Integer length);
	
}

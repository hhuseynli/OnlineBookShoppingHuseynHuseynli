package com.bookShopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bookShopping.dao.BookDAO;
import com.bookShopping.model.Book;
import com.bookShopping.model.SearchModel;




@RestController
@CrossOrigin(origins={"http://localhost:4200"})
@RequestMapping(path="/books")
public class BookRestController {
	@Autowired
	BookDAO bookDao;



	@GetMapping(path="/findRange/{username}/{begin}")
	public List<Book> findInRange(@PathVariable(name="begin") Integer begin, @PathVariable(name="username") String username){
		return bookDao.findRange(username, begin, 10);
	}

	@GetMapping(path="/findUsername/{begin}/{username}")
	public List<Book> getByUsername(@PathVariable(name="begin") Integer begin, @PathVariable String username){
		return bookDao.findByUsername(username, begin, 10 );
	}

	
	
@PostMapping(path="/book")
public Book saveBook(@RequestBody Book book) {
	
	return bookDao.save(book);
 
}

@DeleteMapping(path="/delete/{id}")
public void deleteBookById(@PathVariable(name="id") Integer id){
			bookDao.deleteById(id);

	
}
@PostMapping(path="/searchRange")
public List<Book> searchRange(@RequestBody SearchModel search){
	return bookDao.searchBook(search.getSearch(), search.getBegin(), search.getLength());
}


}

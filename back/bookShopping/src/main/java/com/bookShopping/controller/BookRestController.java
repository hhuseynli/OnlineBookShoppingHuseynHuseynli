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




@RestController
@CrossOrigin(origins={"http://localhost:4200"})
@RequestMapping(path="/books")
public class BookRestController {
	@Autowired
	BookDAO bookDao;



@RequestMapping(path="/book", method=RequestMethod.POST)
public Book saveBook(@RequestBody Book book) {
	
	return bookDao.save(book);
 
}

@DeleteMapping(path="/delete/{id}")
public void deleteBookById(@PathVariable(name="id") Integer id){
			bookDao.deleteById(id);

	
}
//@GetMapping(path="/findRange/{begin}")
//public List<Product> findInRange(@PathVariable(name="begin") Integer begin){
//	return productDAO.findRange(begin, 12);
//}
@GetMapping(path="/find/{begin}/{username}")
public List<Book> getByUsername(@PathVariable(name="begin") Integer begin, @PathVariable String username){
	return bookDao.findByUsername(username, begin, 12 );
}

//@PostMapping(path="/searchRange")
//public List<Book> searchInRange(@RequestBody SearchModel search){
//	return productDAO.findSearchInRange(search.getSearch(), search.getBegin(), search.getLength());
//}

}

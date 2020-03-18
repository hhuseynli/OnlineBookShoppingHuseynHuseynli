package com.bookShopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bookShopping.model.OrderModel;

public interface OrderDAO extends JpaRepository<OrderModel, Integer> {
	@Query(value="select * from orders where username=?1 order by id DESC limit ?2,?3 ", nativeQuery=true)
	public List<OrderModel> findByUsername(String username, Integer begin, Integer length);

}

package study.mangodemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import study.mangodemo.entity.CustomerOrder;
@Repository
public interface CustomerProductRepository  extends JpaRepository<CustomerOrder, Integer>{

	
	@Query(value=" from CustomerOrder where farmerid= :id ")
	 List<CustomerOrder> getFarmerOrders(int id);
}

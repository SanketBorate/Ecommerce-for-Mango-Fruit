package study.mangodemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import study.mangodemo.entity.Cart;
import study.mangodemo.entity.CustomerOrder;
import study.mangodemo.entity.FarmerProducts;
@Repository
public interface FarmerProductRepository extends JpaRepository<FarmerProducts, Integer> {

	


	
}

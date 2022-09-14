package study.mangodemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import study.mangodemo.entity.CustomerInfo;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerInfo, Integer> {

	@Query(value="select * from customer_info where email_id=:email and password=:pass",nativeQuery = true)
	public CustomerInfo CheckcustomerLogin(String email,String pass);
	
}

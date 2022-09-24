package study.mangodemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import study.mangodemo.entity.FarmerInfo;
import study.mangodemo.entity.MangoInfo;

@Repository
public interface FarmerRepository extends JpaRepository<FarmerInfo, Integer>  {

	@Query(value="select * from farmer_info where email_id=:email and password=:pass",nativeQuery = true)
	public FarmerInfo CheckfarmerLogin(String email,String pass);
	
	FarmerInfo findByEmailid(String email);
	
	
	//@Query("from FarmerInfo r where r.mango.mangoid= :id")
	// public abstract FarmerInfo findByFarmerid(int id);
	
}

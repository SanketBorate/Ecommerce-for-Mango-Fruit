package study.mangodemo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import study.mangodemo.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, String> {

	@Query(value="select * from admin where email_id=:email and password=:pass",nativeQuery = true)
	public Admin CheckadminLogin( String email, String pass);
	
	 
	
}

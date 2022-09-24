package study.mangodemo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import study.mangodemo.entity.MangoInfo;

@Repository
public interface MangoRepository extends JpaRepository<MangoInfo, Integer> {

//	@Modifying
	@Query(value=" FROM mango_info WHERE variety = ?2",nativeQuery = true)
    List<MangoInfo> findByVariety(String variety);
	
	
	

	
}

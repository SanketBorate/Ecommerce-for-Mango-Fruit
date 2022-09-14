package study.mangodemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import study.mangodemo.entity.AddressInfo;
public interface AddressInfoRepository extends JpaRepository<AddressInfo, Integer> {

}

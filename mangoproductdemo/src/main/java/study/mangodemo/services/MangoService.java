package study.mangodemo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import study.mangodemo.entity.MangoInfo;
import study.mangodemo.repository.MangoRepository;

@Service
public class MangoService {

	@Autowired MangoRepository mangorepo;
	
	public boolean addmango(MangoInfo m)
	{
		MangoInfo m1=new MangoInfo(m.getMango_id(),m.getVariety(),m.getDescription(),m.getPrice_per_dozen());
		mangorepo.save(m1);
		return true;
	}
	
	public List< MangoInfo> getAll()
	{
		return mangorepo.findAll();
		
	}
	
	public List<MangoInfo> findByVariety(String variety)
	{
		return mangorepo.findAllByName(variety);
	}
	
	public boolean deleteById(int mangoId)
	{
		mangorepo.deleteById(mangoId);
		return true;
	}
}

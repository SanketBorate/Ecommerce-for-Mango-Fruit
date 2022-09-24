package study.mangodemo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.mangodemo.entity.FarmerInfo;
import study.mangodemo.entity.MangoInfo;
import study.mangodemo.repository.FarmerRepository;
import study.mangodemo.repository.MangoRepository;

@Service
public class MangoService {

	@Autowired MangoRepository mangorepo;
	
	@Autowired
	FarmerRepository frepo;
	
	public boolean addmango(MangoInfo m)
	{
		//MangoInfo m1=new MangoInfo(m.getMango_id(),m.getVariety(),m.getDescription(),m.getPrice_per_dozen());
		String email=m.getFarmer().getEmailid();
		FarmerInfo m1=frepo.findByEmailid(email);
		m.setFarmer(m1);
		mangorepo.save(m);
		return true;
	}
	
	public List< MangoInfo> getAll()
	{
		
		List<MangoInfo> list= mangorepo.findAll();
		return  list;
	}
	
	public List<MangoInfo> findByVariety(String variety)
	{
		return mangorepo.findByVariety(variety);
	}
	
	public boolean deleteById(int mangoId)
	{
		mangorepo.deleteById(mangoId);
		return true;
	}
	
	
	
	public List<MangoInfo> GetByMail(String email) 
	  { 
			System.out.println(email);
		
			List<MangoInfo> list= mangorepo.findAll();
			
			List<MangoInfo> l1=new ArrayList<MangoInfo>();
			
			FarmerInfo finfo  =   frepo.findByEmailid(email);
			System.out.println(finfo.getEmailid());
			for(MangoInfo m: list)
			{
				if(m.getFarmer().getFarmerid()==finfo.getFarmerid())
				{
					System.out.println(m.getMangoid());
					l1.add(m);
				}
			}
			
			return l1;
			
	  }
			
//			if(finfo!=null) {
//			for (Ma m : finfo.getFarmerid())
//			{
//						if(id == m.getMangoid())	
//			            	  mangorepo.deleteById((long) m.getMangoid());
//					}
//			}	
//			mangorepo.deleteAll( finfo.getMango());
//
//			return true;
			
			
			
	  }





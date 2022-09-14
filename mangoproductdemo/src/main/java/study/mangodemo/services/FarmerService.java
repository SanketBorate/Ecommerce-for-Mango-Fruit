package study.mangodemo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.mangodemo.entity.CustomerInfo;
import study.mangodemo.entity.FarmerInfo;
import study.mangodemo.repository.FarmerRepository;

@Service
public class FarmerService {

	@Autowired 
	FarmerRepository frepo;
	
	public boolean registerFarmer(FarmerInfo f)
	{
		FarmerInfo finfo=new FarmerInfo(f.getFarmer_id(), f.getFirst_name(), f.getLast_name(), f.getEmail_id(), f.getContact_no(), f.getUsername(), f.getPassword());
		frepo.save(finfo);
		return true;
	}
	
	
	public boolean checkFarmerLogin(String email,String pass)
	{
		FarmerInfo farmer= frepo.CheckfarmerLogin(email,pass);
		if(farmer==null)
		{
			return false;
		}
		
		else 
			return true;	
		
	}
	
	
	
}

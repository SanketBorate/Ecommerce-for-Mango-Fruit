package study.mangodemo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.mangodemo.entity.FarmerInfo;
import study.mangodemo.entity.CustomerInfo;
import study.mangodemo.repository.FarmerRepository;

@Service
public class FarmerService {

	@Autowired 
	FarmerRepository frepo;
	
	public boolean registerFarmer(FarmerInfo f)
	{
		FarmerInfo finfo=new FarmerInfo(f.getFarmerid(), f.getFirstname(), f.getLastname(), f.getEmailid(), f.getContactno(), f.getPassword());
		frepo.save(finfo);
		return true;
	}
	
	
	public Object checkFarmerLogin(String email,String pass)
	{
		FarmerInfo farmer= frepo.CheckfarmerLogin(email,pass);
		if(farmer!=null)
		{
			return farmer;
		}
		else
		{
		 
			return "Wrong Password";	
		}
		
	}
	
		//show all farmers
	public List<FarmerInfo> getAllFarmers()
	{
		return frepo.findAll();
	}
	
}

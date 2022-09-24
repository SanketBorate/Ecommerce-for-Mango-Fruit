package study.mangodemo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.mangodemo.entity.FarmerInfo;
import study.mangodemo.entity.MangoInfo;
import study.mangodemo.services.FarmerService;
import study.mangodemo.services.MangoService;
@CrossOrigin("*")
@RestController
@RequestMapping("/farmer")
public class FarmerController {

	@Autowired
	FarmerService fservice;
	
	@Autowired
	MangoService mangoservice;
	
	@PostMapping("/farmerlogin")
	public Object FarmerLogin(@RequestBody FarmerInfo farmer)
	{
		 
		return fservice.checkFarmerLogin(farmer.getEmailid(), farmer.getPassword());
//		if(c==true)
//		{
//			// first name disat nahye
//			return    "Successfull-Welcome" ;
//		}
//		return " wrong password , try again ";
		
	}
	
	@PostMapping("/farmerregistration")
	public String createFarmer(@RequestBody FarmerInfo farmer)
	{
		fservice.registerFarmer(farmer);
		return "Farmer Registered";
	}
	
	@PostMapping("/addmango") 
	public String createMango(@RequestBody MangoInfo mango)
	{
		
		
		mangoservice.addmango(mango);
		return "record inserted";
	}
	
	
//	@GetMapping("/getAllvarieties")
//	public List<MangoInfo> GetAllVarieties()
//	{
//		return mangoservice.getAll();
//	}
	
	@GetMapping("/getByVariety/{variety}")
	public List<MangoInfo> findByVariety(@PathVariable String variety)
	{
		return mangoservice.findByVariety(variety);
	
	}
	
	
//	@DeleteMapping("/removemango/{id}")
//	public String RemoveMangoes(@RequestBody FarmerInfo farmer,@PathVariable long id)
//	{
//		mangoservice.RemoveMangoes(farmer, id);
//		
//		return "Record Deleted";
//	}
//	
	
	
//	
//	@DeleteMapping("/remove/{mangoid}")
//	public String delete(@PathVariable int mangoid)
//	{
//		mangoservice.deleteById(mangoid);
//		return "record deleted";
//	}
	
	@GetMapping("/getmango/{email}")
	public List<MangoInfo> GetByMail(@PathVariable String email)
	{
		return mangoservice.GetByMail(email);		
		
	}
	
	
	
	
	

	
	
	
	
}




//
//@GetMapping("/getallfarmers")
//public List<FarmerInfo> GetAllFarmers()
//{
//	return fservice.getAllFarmers();
//}
//
package study.mangodemo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import study.mangodemo.entity.Admin;
import study.mangodemo.entity.CustomerInfo;
import study.mangodemo.entity.FarmerInfo;
import study.mangodemo.services.AdminService;
import study.mangodemo.services.CustomerService;
import study.mangodemo.services.FarmerService;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	AdminService adservice;
	
	@Autowired
	CustomerService cservice;

	
	@Autowired
	FarmerService fservice;
	
	@GetMapping("/adminlogin")
	public String AdminLogin(@RequestBody Admin admin)
	{
		
		boolean a=adservice.checkAdminLogin(admin.getEmail_id(), admin.getPassword());
		if(a==true)
		{
			return " AdminLogin Successfull-Welcome";
		}
		return " wrong password";
		
	}
	
	
	@GetMapping("/customerlogin")
	public String CustomerLogin(@RequestBody CustomerInfo customer)
	{
		
		boolean c=cservice.checkCustomerLogin(customer.getEmail_id(), customer.getPassword());
		if(c==true)
		{
			return    "Successfull-Welcome" ;//+ customer.getFirst_name();//double records
			
		}
		return " wrong password , try again ";
		
	}
	
	@GetMapping("/farmerlogin")
	public String FarmerLogin(@RequestBody FarmerInfo farmer)
	{
		 
		boolean c=fservice.checkFarmerLogin(farmer.getEmail_id(), farmer.getPassword());
		if(c==true)
		{
			// first name disat nahye
			return    "Successfull-Welcome" ;
		}
		return " wrong password , try again ";
		
	}
	
//	@PostMapping("/add")
//	public String create(@RequestBody Admin a)
//	{
//		//Admin a =new Admin();
//		adrepo.save(a);
//		
//		return "Done";
//	}
}













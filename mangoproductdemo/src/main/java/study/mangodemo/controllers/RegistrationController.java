package study.mangodemo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.mangodemo.entity.CustomerInfo;
import study.mangodemo.entity.FarmerInfo;
import study.mangodemo.services.CustomerService;
import study.mangodemo.services.FarmerService;

@RestController
@RequestMapping("/register")
public class RegistrationController {

	@Autowired
	CustomerService cservice;
	
	@Autowired
	FarmerService fService;
	
	@PostMapping("/customerregistration")
	public String createCustomer(@RequestBody CustomerInfo customer)
	{
		
		cservice.registerCustomer(customer);
		return "Customer registered";
	}
	
	@PostMapping("/farmerregistration")
	public String createFarmer(@RequestBody FarmerInfo farmer)
	{
		fService.registerFarmer(farmer);
		return "Farmer Registered";
	}
	
}

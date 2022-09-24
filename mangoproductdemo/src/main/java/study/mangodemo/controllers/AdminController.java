package study.mangodemo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.mangodemo.entity.Admin;
import study.mangodemo.entity.CustomerInfo;
import study.mangodemo.entity.FarmerInfo;
import study.mangodemo.entity.MangoInfo;
import study.mangodemo.services.AdminService;
import study.mangodemo.services.CustomerService;
import study.mangodemo.services.FarmerService;
import study.mangodemo.services.MangoService;
@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class AdminController {

	
	@Autowired
	AdminService adservice;
	
	@Autowired
	CustomerService cservice;
	
	@Autowired
	FarmerService fservice;
	
	@Autowired
	MangoService mangoservice;
	
	@PostMapping("/adminlogin")
	public String AdminLogin(@RequestBody Admin admin)
	{
		
		return  adservice.checkAdminLogin(admin.getEmailid(), admin.getPassword());
		
	}
	
	@GetMapping("/getallcustomers")
	public List<CustomerInfo> GetAllcustomers()
	{
		return cservice.getAllCustomers();
	}
	

	@GetMapping("/getallfarmers")
	public List<FarmerInfo> GetAllFarmers()
	{
		return fservice.getAllFarmers();
	}
	
	
	@GetMapping("/getAllvarieties")
	public List<MangoInfo> GetAllVarieties()
	{
		List<MangoInfo> list= mangoservice.getAll();
		
		return list;
	}
	
	
}

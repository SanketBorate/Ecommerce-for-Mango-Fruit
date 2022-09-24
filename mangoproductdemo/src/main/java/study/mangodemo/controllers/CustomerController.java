package study.mangodemo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.mangodemo.DO.CustomerInfoDO;
import study.mangodemo.entity.CustomerInfo;
import study.mangodemo.services.CustomerService;
@CrossOrigin("*")
@RestController
@RequestMapping(path="customer")
public class CustomerController {

	
	@Autowired
	CustomerService cservice;


	@PostMapping("/customerregistration")
	public String createCustomer(@RequestBody CustomerInfo customer)
	{
		
		cservice.registerCustomer(customer);
		return "Customer registered";
	}
	
	
	
	@PostMapping("/customerlogin")
	public Object CustomerLogin(@RequestBody CustomerInfoDO customer)
	{
		
		return  cservice.checkCustomerLogin(customer.getEmailid(),customer.getPassword() );
		
		
//		boolean c=cservice.checkCustomerLogin(customer.getEmail_id(), customer.getPassword());
//		if(c==true)
//		{
//			return    "Successfull-Welcome" ;//+ customer.getFirst_name();//double records
//			
//		}
//		return " wrong password , try again ";
		
	}
	
	
	

//	@GetMapping("/getallcustomers")
//	public List<CustomerInfo> GetAllcustomers()
//	{
//		return cservice.getAllCustomers();
//	}
}

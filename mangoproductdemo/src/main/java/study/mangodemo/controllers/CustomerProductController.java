package study.mangodemo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.mangodemo.DO.Orderdetails;
import study.mangodemo.entity.Cart;
import study.mangodemo.entity.CustomerInfo;
import study.mangodemo.entity.CustomerOrder;
import study.mangodemo.entity.FarmerProducts;
import study.mangodemo.services.CustomerProductService;
import study.mangodemo.services.CustomerService;
@CrossOrigin("*")

@RestController
@RequestMapping("/customerproduct")
public class CustomerProductController {

	@Autowired
	CustomerProductService cpservice;
	
	@Autowired
	CustomerService cservice;
	
	@PostMapping("/add")
	public CustomerOrder AddProduct(@RequestBody CustomerOrder cproduct)
	{
		return	cpservice.AddProduct(cproduct);
		
		
	}
	
	@GetMapping("/getproduct/{id}")
	public CustomerOrder GetProduct(@PathVariable int id)
	{
		return cpservice.GetProduct(id);
		
	}
	
	@DeleteMapping("/delete/{id}")
	public String  DeleteProduct(@PathVariable int id)
	{
		return cpservice.DeleteProduct(id);
	}
	
	@PutMapping("/update")
	public CustomerOrder UpdateProduct(@RequestBody CustomerOrder customer)
	{
		return cpservice.UpdateProduct(customer);
		
	}
 	
	@GetMapping("/getfarmerorders/{id}")
	public 	List<CustomerOrder>	getFarmerOrders(@PathVariable int id)
	{
		return cpservice.getFarmerOrders(id);
		
	}
	
	@PostMapping("/placeorder/{id}")
	public List<Cart> Order(@PathVariable int id)
	{
		return cpservice.PlaceOrder(id);
	}
		
	@GetMapping("/farmer/placeorder/{id}")
	public List<Orderdetails> Orderdetails(@PathVariable int id)
	{
		List<CustomerOrder>list=cpservice.getFarmerOrders(id);
		List<Orderdetails>order=new ArrayList<Orderdetails>();
		
		for(CustomerOrder ord:list)
		{
			System.out.println(ord.getCustomerid());
			Orderdetails neworder= new Orderdetails();
			neworder.setQuantity(ord.getQuantity());
			neworder.setMangoname(ord.getMangoname());
			CustomerInfo cust=cservice.getfindbyid(ord.getCustomerid());
			neworder.setCustomername(cust.getFirstname()+" "+cust.getLastname());
			neworder.setAddress(cust.getAddress().getFlatno()+","+cust.getAddress().getStreetname()+","+cust.getAddress().getCity()+","
					+cust.getAddress().getCity()+","+cust.getAddress().getDistrict()+","+cust.getAddress().getState());
			order.add(neworder);
		}
		return order;
	}
}

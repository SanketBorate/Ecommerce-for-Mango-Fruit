package study.mangodemo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.mangodemo.entity.CustomerOrder;
import study.mangodemo.entity.FarmerProducts;
import study.mangodemo.services.CustomerProductService;
import study.mangodemo.services.FarmerProductService;

@RestController
@RequestMapping("/farmerproduct")
public class FarmerProductController {

	@Autowired
	FarmerProductService fpservice;
	
	
	@PostMapping("/add")
	public FarmerProducts AddProduct(@RequestBody FarmerProducts fproduct)
	{
		return	fpservice.AddProduct(fproduct);
		
		
	}
	
	
	
	
	@GetMapping("/getproduct/{id}")
	public FarmerProducts GetProduct(@PathVariable int id)
	{
		return fpservice.GetProduct(id);
		
	}
	
	@DeleteMapping("/delete/{id}")
	public String  DeleteProduct(@PathVariable int id)
	{
		return fpservice.DeleteProduct(id);
	}
	
	@PutMapping("/update")
	public FarmerProducts UpdateProduct(@RequestBody FarmerProducts farmer)
	{
		return fpservice.UpdateProduct(farmer);
		
	}

	
}

package study.mangodemo.controllers;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import study.mangodemo.entity.MangoInfo;

import study.mangodemo.services.MangoService;

@RestController
@RequestMapping("/mangoinfo")
public class MangoController {

	@Autowired
	MangoService mangoservice;
	
	@PostMapping("/addmango") 
	public String createMango(@RequestBody MangoInfo mango)
	{
		mangoservice.addmango(mango);
		return "record inserted";
	}
	
	@GetMapping("/getAllvarieties")
	public List<MangoInfo> GetAllVarieties()
	{
		return mangoservice.getAll();
	}
	
//	@GetMapping("/getByVariety/{variety}")
//	public List<MangoInfo> findByVariety(@PathVariable String variety)
//	{
//		return mangoservice.findByVariety(variety);
//	
//	}
	
	@DeleteMapping("/remove/{mangoid}")
	public String delete(@PathVariable int mangoid)
	{
		mangoservice.deleteById(mangoid);
		return "record deleted";
	}
}

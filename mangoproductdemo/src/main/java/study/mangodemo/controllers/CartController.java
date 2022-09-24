package study.mangodemo.controllers;

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

import study.mangodemo.entity.Cart;
import study.mangodemo.entity.Cart;
import study.mangodemo.entity.MangoInfo;
import study.mangodemo.services.CartService;
import study.mangodemo.services.CustomerService;

import study.mangodemo.services.MangoService;
@CrossOrigin("*")
@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	CartService cartservice;
	
	
	@PostMapping("/add")
	public List<Cart> AddCart(@RequestBody Cart cart)
	{
		return	cartservice.AddtoCart(cart);
		
		
	}
	
	
	
	
	@GetMapping("/getCart/{id}")
	public List<Cart> GetCartProducts(@PathVariable int id)
	{
		return cartservice.getCartProducts(id);
		
	}
	
	@DeleteMapping("/delete/{id}")
	public String  DeleteCart(@PathVariable int id)
	{
		return cartservice.DeleteCart(id);
	}
	
	@PutMapping("/update")
	public Cart UpdateCart(@RequestBody Cart cart)
	{
		return cartservice.UpdateCart(cart);
		
	}
				
	
	
	
}

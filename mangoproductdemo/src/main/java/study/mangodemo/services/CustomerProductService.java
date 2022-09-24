package study.mangodemo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.mangodemo.entity.Cart;
import study.mangodemo.entity.CustomerOrder;
import study.mangodemo.repository.CartRepository;
import study.mangodemo.repository.CustomerProductRepository;

@Service
public class CustomerProductService {

	@Autowired
	CustomerProductRepository customerrepo;
	
	@Autowired
	CartService cartservice;
	
	@Autowired
	CartRepository cartrepo;
	
	public CustomerOrder AddProduct(CustomerOrder product)
	{
		return customerrepo.save(product);
		
	}
	
	public CustomerOrder UpdateProduct(CustomerOrder product)
	{
		
		
		
		return customerrepo.save(product);
		
	}
	
	
	public String DeleteProduct(int id)
	{
		 customerrepo.deleteById(id);
		 
		 return "Deleted";
		
	}
	
	public CustomerOrder GetProduct(int id)
	{
		return customerrepo.getReferenceById(id);
		
	}
	
	
	public List<CustomerOrder> getFarmerOrders(int id)
	{
		
		return customerrepo.getFarmerOrders(id);
		
	}
	
	
	public List<Cart> PlaceOrder(int id)
	{
		Cart cart=cartservice.GetCart(id);
		CustomerOrder cust= new CustomerOrder();
		cust.setCustomerid(cart.getCustomerid());
		cust.setDate(cart.getDate());
		cust.setDescription(cart.getDescription());
		cust.setFarmerid(cart.getFarmerid());
		cust.setMangoname(cart.getMangoname());
		cust.setPriceperdozen(cart.getPriceperdozen());
		cust.setQuantity(cart.getQuantity());
		customerrepo.save(cust);
		
		cartservice.DeleteCart(id);
		return cartrepo.getCartItembyCust(cart.getCustomerid());
		
	}
	
 }

package study.mangodemo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.mangodemo.entity.Cart;
import study.mangodemo.entity.FarmerInfo;
import study.mangodemo.entity.MangoInfo;
import study.mangodemo.repository.CartRepository;
import study.mangodemo.repository.FarmerRepository;
import study.mangodemo.repository.MangoRepository;

@Service
public class CartService {

	
	@Autowired
	CartRepository cartrepo;
	
//	@Autowired
//	MangoService mrepo;
	
	@Autowired
	FarmerRepository frepo;
	
	public List<Cart> AddtoCart(Cart product)
	{
		int fid=0;
		List<FarmerInfo> finfo= frepo.findAll();
		for(FarmerInfo far:finfo)
		{
			List<MangoInfo> mango =far.getMango();
			System.out.println(far.getFarmerid());
			for(MangoInfo m : mango)
			{
				if(m.getMangoid()==product.getMangoid())
				{
					fid=far.getFarmerid();
					System.out.println(fid);
					System.out.println(far.getFarmerid());
					break;
				}
			}
			
		}
		
		product.setFarmerid(fid);
		Cart ct=cartrepo.save(product);
		return cartrepo.getCartItembyCust(product.getCustomerid());
		
	}
	
	public Cart UpdateCart(Cart product)
	{
		
		
		
		return cartrepo.save(product);
		
	}
	
	
	public String DeleteCart(int id)
	{
		 cartrepo.deleteById(id);
		 
		 return "Deleted";
		
	}
	
	public Cart GetCart(int id)
	{
		return cartrepo.getReferenceById(id);
		
	}

	
	public List<Cart> getCartProducts(int id)
	{
		return cartrepo.getCartItems(id);
	}
	
	
	
	
	
	
//	public boolean addtoCart(Cart c)
//	{
//		Cart c1= cartrepo.CustomerCart(c.getCustomerid(),c.getMangoid() );
//		cartrepo.save(c1);
//		
//		return true;
//		
//	}
	
	
}

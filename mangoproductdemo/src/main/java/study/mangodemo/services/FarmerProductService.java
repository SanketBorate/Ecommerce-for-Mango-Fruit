package study.mangodemo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.mangodemo.entity.FarmerProducts;
import study.mangodemo.repository.FarmerProductRepository;

@Service
public class FarmerProductService {

	
	

		@Autowired
		FarmerProductRepository farmerrepo;
		
		public FarmerProducts AddProduct(FarmerProducts product)
		{
			return farmerrepo.save(product);
			
		}
		
		public FarmerProducts UpdateProduct(FarmerProducts product)
		{
			
			
			
			return farmerrepo.save(product);
			
		}
		
		
		public String DeleteProduct(int id)
		{
			 farmerrepo.deleteById(id);
			 
			 return "Deleted";
			
		}
		
		public FarmerProducts GetProduct(int id)
		{
			return farmerrepo.getReferenceById(id);
			
		}
		
		
	 }



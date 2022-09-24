package study.mangodemo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.mangodemo.entity.AddressInfo;
import study.mangodemo.entity.CustomerInfo;
import study.mangodemo.repository.AddressInfoRepository;
import study.mangodemo.repository.CustomerRepository;

@Service
public class CustomerService {

		@Autowired
		CustomerRepository crepo;

		
		public boolean registerCustomer(CustomerInfo c)
		{
			
		    AddressInfo add= new AddressInfo();
			add.setFlatno(c.getAddress().getFlatno());
			add.setStreetname(c.getAddress().getStreetname());
			add.setCity(c.getAddress().getCity());
			add.setDistrict(c.getAddress().getDistrict());
			add.setState(c.getAddress().getState());
			add.setPincode(c.getAddress().getPincode());
			System.out.println(c.getAddress().getCity()+ " " +c.getAddress().getState());
		
			add.setCustomer(c);
		
			
			c=crepo.save(c);
			
			return true;
		}
	
		
		public Object checkCustomerLogin(String email,String pass)
		{
			
			System.out.println(email +" "+ pass);
			
			CustomerInfo customer= crepo.CheckcustomerLogin(email,pass);
			if(customer!=null)
			{
				return customer;
			}else
			{
				return "NOT-OK";
			}
						
			
		}
		
		//show all customers
		public List<CustomerInfo> getAllCustomers()
		{
			
			return crepo.findAll();
		}
		
		public CustomerInfo getfindbyid(int id)
		{
			return crepo.findById(id).get();
		}
		
		
}

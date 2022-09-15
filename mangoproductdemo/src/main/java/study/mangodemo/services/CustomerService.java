package study.mangodemo.services;

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
			add.setFlat_no(c.getAddress().getFlat_no());
			add.setStreet_name(c.getAddress().getStreet_name());
			add.setCity(c.getAddress().getCity());
			add.setDistrict(c.getAddress().getDistrict());
			add.setState(c.getAddress().getState());
			add.setPincode(c.getAddress().getPincode());
			System.out.println(c.getAddress().getCity()+ " " +c.getAddress().getState());
		
			add.setCustomer(c);
		
			
			c=crepo.save(c);
			
			return true;
		}
	
		
		public boolean checkCustomerLogin(String email,String pass)
		{
			CustomerInfo customer= crepo.CheckcustomerLogin(email,pass);
			if(customer==null)
			{
				return false;
			}
			
			else 
				return true;	
			
		}
		
	
		
		//show all customers
		public List<CustomerInfo> getAllCustomers()
		{
			
			return crepo.findAll();
		}
		
		
}

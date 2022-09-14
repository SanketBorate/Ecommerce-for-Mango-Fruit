package study.mangodemo.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.mangodemo.entity.Admin;
import study.mangodemo.repository.AdminRepository;

@Service
public class AdminService {

	
	@Autowired
	AdminRepository adrepo;
	
	
	

	public boolean checkAdminLogin(String email, String pass) {
		Admin admin= adrepo.CheckadminLogin(email, pass);
			if(admin==null)
			{
				return false;
			}
			
			else 
				return true;
			
	}
	
	//show all customers
	//show all farmers
	
}

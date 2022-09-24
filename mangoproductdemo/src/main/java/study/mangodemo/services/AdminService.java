package study.mangodemo.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import study.mangodemo.entity.Admin;
import study.mangodemo.repository.AdminRepository;

@Service
public class AdminService {

	
	@Autowired
	AdminRepository adrepo;
	
	
	

	public String checkAdminLogin(String email, String pass) {
		System.out.println(email +" "+ pass);
		Admin admin= adrepo.CheckadminLogin(email, pass);
		System.out.println(email +" "+ pass);
			if(admin!=null)
			{
				return "authorized";
			}
			
			 
				return "not-ok";
			
	}
	
	
	
}

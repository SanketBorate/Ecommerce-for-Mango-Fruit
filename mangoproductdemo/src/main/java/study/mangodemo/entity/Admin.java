package study.mangodemo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name="email_id")
	private String emailid;
	
	@Column(name="password")
	private String password;

	public Admin(String emailid, String password) {
		super();
		this.emailid = emailid;
		this.password = password;
	}
	public Admin() {
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Admin(int id, String emailid, String password) {
		super();
		this.id = id;
		this.emailid = emailid;
		this.password = password;
	}

	
	
	
	
	
//	public String getEmail_id() {
//		return emailid;
//	}
//
//	public void setEmail_id(String email_id) {
//		this.emailid = email_id;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	@Override
//	public String toString() {
//		return "Admin [email_id=" + email_id + ", password=" + password + "]";
//	}
	
	
	
	
	
}

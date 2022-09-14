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
	private String email_id;
	
	@Column(name="password")
	private String password;

	public Admin(String email_id, String password) {
		super();
		this.email_id = email_id;
		this.password = password;
	}
	public Admin() {
		// TODO Auto-generated constructor stub
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Admin [email_id=" + email_id + ", password=" + password + "]";
	}
	
	
	
	
	
}

package study.mangodemo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="farmer_info")
public class FarmerInfo {

	@Id
	@Column(name="farmer_id")
	private int farmer_id ;
	
	@Column(name="first_name")
	private String first_name;
	
	@Column(name="last_name")
	private String last_name;
	
	@Column(name="email_id")
	private String email_id;
	

	@Column(name="contact_no")
	private String contact_no;
	
	@Column(name="username")
	private String username;
	
	
	@Column(name="password")
	private String password;


	public FarmerInfo() {
		// TODO Auto-generated constructor stub
	}
	
	public FarmerInfo(int farmer_id, String first_name, String last_name, String email_id, String contact_no,
			String username, String password) {
		super();
		this.farmer_id = farmer_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email_id = email_id;
		this.contact_no = contact_no;
		this.username = username;
		this.password = password;
	}


	public int getFarmer_id() {
		return farmer_id;
	}


	public void setFarmer_id(int farmer_id) {
		this.farmer_id = farmer_id;
	}


	public String getFirst_name() {
		return first_name;
	}


	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}


	public String getLast_name() {
		return last_name;
	}


	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}


	public String getEmail_id() {
		return email_id;
	}


	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}


	public String getContact_no() {
		return contact_no;
	}


	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "FarmerInfo [farmer_id=" + farmer_id + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", email_id=" + email_id + ", contact_no=" + contact_no + ", username=" + username + ", password="
				+ password + "]";
	}

	
	
	
	
	
}

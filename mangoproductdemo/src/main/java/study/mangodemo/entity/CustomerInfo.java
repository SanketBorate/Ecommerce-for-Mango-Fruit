package study.mangodemo.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="customer_info")
public class CustomerInfo {


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="customer_id")
	private int customer_id ;
	
	
	
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

	@OneToOne(cascade = CascadeType.ALL,mappedBy = "customer")
	@JsonManagedReference
	private AddressInfo address;


	
	public AddressInfo getAddress() {
		return address;
	}

	public void setAddress(AddressInfo address) {
		this.address = address;
	}

	public CustomerInfo() {
		// TODO Auto-generated constructor stub
	}


	
	
	



	public CustomerInfo(int customer_id, String first_name, String last_name, String email_id, String contact_no,
			String username, String password,AddressInfo address) {
		super();
		this.customer_id = customer_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email_id = email_id;
		this.contact_no = contact_no;
		this.username = username;
		this.password = password;
		this.address = address;
	}
	
	
	
	
	public int getCustomer_id() {
		return customer_id;
	}

	

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
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
		return "CustomerInfo [customer_id=" + customer_id + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", email_id=" + email_id + ", contact_no=" + contact_no + ", username=" + username + ", password="
				+ password + ", address=" + address + "]";
	}



	

	


	
}

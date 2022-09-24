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
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="customer_id")
	private int customerid ;
	
	
	
	@Column(name="first_name")
	private String firstname;
	
	@Column(name="last_name")
	private String lastname;
	

	
	@Column(name="email_id")
	private String emailid;
	
	@Column(name="contact_no")
	private String contactno;
	
	
	
	
	
	
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

	public int getCustomerid() {
		return customerid;
	}

	public void setCustomerid(int customerid) {
		this.customerid = customerid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public CustomerInfo(int customerid, String firstname, String lastname, String emailid, String contactno,
			String password, AddressInfo address) {
		super();
		this.customerid = customerid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailid = emailid;
		this.contactno = contactno;
		this.password = password;
		this.address = address;
	}

	
	
	
	


//public CustomerInfo(int customer_id, String first_name, String last_name, String email_id, String contact_no,
//		String password) {
//	super();
//	this.customer_id = customer_id;
//	this.first_name = first_name;
//	this.last_name = last_name;
//	this.email_id = email_id;
//	this.contact_no = contact_no;
//	this.password = password;
//}








//	public CustomerInfo(int customer_id, String first_name, String last_name, String email_id, String contact_no, String password,AddressInfo address) {
//		super();
//		this.customer_id = customer_id;
//		this.first_name = first_name;
//		this.last_name = last_name;
//		this.email_id = email_id;
//		this.contact_no = contact_no;
//		this.password = password;
//		this.address = address;
//	}
//	
//	
//	
//	
//	public int getCustomer_id() {
//		return customer_id;
//	}
//
//	
//
//	public void setCustomer_id(int customer_id) {
//		this.customer_id = customer_id;
//	}
//
//	public String getFirst_name() {
//		return first_name;
//	}

//	public void setFirst_name(String first_name) {
//		this.first_name = first_name;
//	}
//
//	public String getLast_name() {
//		return last_name;
//	}
//
//	public void setLast_name(String last_name) {
//		this.last_name = last_name;
//	}
//
//	public String getEmail_id() {
//		return email_id;
//	}
//
//	public void setEmail_id(String email_id) {
//		this.email_id = email_id;
//	}
//
//	public String getContact_no() {
//		return contact_no;
//	}
//
//	public void setContact_no(String contact_no) {
//		this.contact_no = contact_no;
//	}
//
//
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	

	

	


	
}

package study.mangodemo.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="farmer_info")
public class FarmerInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="farmer_id")
	private int farmerid ;
	
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
	@JsonManagedReference
	@OneToMany(mappedBy = "farmer",cascade = CascadeType.ALL)
	private List<MangoInfo> mango;
	
	
	public FarmerInfo() {
		// TODO Auto-generated constructor stub
	}


	public int getFarmerid() {
		return farmerid;
	}


	public void setFarmerid(int farmerid) {
		this.farmerid = farmerid;
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


	public List<MangoInfo> getMango() {
		return mango;
	}


	public void setMango(List<MangoInfo> mango) {
		this.mango = mango;
	}


	
	
	
	public FarmerInfo(int farmerid, String firstname, String lastname, String emailid, String contactno,
			String password) {
		super();
		this.farmerid = farmerid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailid = emailid;
		this.contactno = contactno;
		this.password = password;
	}


	public FarmerInfo(int farmerid, String firstname, String lastname, String emailid, String contactno,
			String password, List<MangoInfo> mango) {
		super();
		this.farmerid = farmerid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailid = emailid;
		this.contactno = contactno;
		this.password = password;
		this.mango = mango;
	}
	
	
	
	
	


//	public List<MangoInfo> getMango() {
//		return mango;
//	}
//
//	public void setMango(List<MangoInfo> mango) {
//		this.mango = mango;
//	}
//
//
//	@Override
//	public String toString() {
//		return "FarmerInfo [farmer_id=" + farmer_id + ", first_name=" + first_name + ", last_name=" + last_name
//				+ ", email_id=" + email_id + ", contact_no=" + contact_no + ", username=" + username + ", password="
//				+ password + "]";
//	}
//
//	
	
	
	
	
}

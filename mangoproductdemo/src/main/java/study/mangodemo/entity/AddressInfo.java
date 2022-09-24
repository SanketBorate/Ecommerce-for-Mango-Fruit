package study.mangodemo.entity;



import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="address_info")
public class AddressInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="address_id")
	private int addressid;
	
	@OneToOne(cascade = CascadeType.ALL)
	//@JoinColumn(name="customer_id")
	@JsonBackReference
	private CustomerInfo customer;
	
	
	@Column(name="flat_no")
	private int  flatno;
	
	@Column(name="street_name")
	private String streetname;
	
	
	@Column(name="city")
	private String city;
	
	@Column(name="district")
	private String district;
	
	@Column(name="state")
	private String state;
	
	
	@Column(name="pincode")
	private int pincode;


	
//	public int getAddress_id() {
//		return address_id;
//	}
//
//
//
//	public void setAddress_id(int address_id) {
//		this.address_id = address_id;
//	}
//


	public CustomerInfo getCustomer() {
		return customer;
	}



	public void setCustomer(CustomerInfo customer) {
		this.customer = customer;
	}


//
//	public int getFlat_no() {
//		return flat_no;
//	}
//
//
//
//	public void setFlat_no(int flat_no) {
//		this.flat_no = flat_no;
//	}
//
//
//
//	public String getStreet_name() {
//		return street_name;
//	}
//
//
//
//	public void setStreet_name(String street_name) {
//		this.street_name = street_name;
//	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getDistrict() {
		return district;
	}



	public void setDistrict(String district) {
		this.district = district;
	}



	public String getState() {
		return state;
	}



	public void setState(String state) {
		this.state = state;
	}



	public int getPincode() {
		return pincode;
	}



	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public AddressInfo() {
		// TODO Auto-generated constructor stub
	}



	public int getAddressid() {
		return addressid;
	}



	public void setAddressid(int addressid) {
		this.addressid = addressid;
	}



	public int getFlatno() {
		return flatno;
	}



	public void setFlatno(int flatno) {
		this.flatno = flatno;
	}



	public String getStreetname() {
		return streetname;
	}



	public void setStreetname(String streetname) {
		this.streetname = streetname;
	}



	public AddressInfo(int addressid, CustomerInfo customer, int flatno, String streetname, String city,
			String district, String state, int pincode) {
		super();
		this.addressid = addressid;
		this.customer = customer;
		this.flatno = flatno;
		this.streetname = streetname;
		this.city = city;
		this.district = district;
		this.state = state;
		this.pincode = pincode;
	}



	

//	public AddressInfo(int address_id, CustomerInfo customer, int flat_no, String street_name, String city,
//			String district, String state, int pincode) {
//		super();
//		this.address_id = address_id;
//		this.customer = customer;
//		this.flat_no = flat_no;
//		this.street_name = street_name;
//		this.city = city;
//		this.district = district;
//		this.state = state;
//		this.pincode = pincode;
//	}
//
//	
//
//	
//
//
	@Override
	public String toString() {
		return "AddressInfo [address_id=" + address_id + ", customer=" + customer + ", flat_no=" + flat_no
				+ ", street_name=" + street_name + ", city=" + city + ", district=" + district + ", state=" + state
				+ ", pincode=" + pincode + "]";
	}


	


	
		
	
	
	
	
	

}

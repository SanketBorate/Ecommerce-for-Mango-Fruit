package study.mangodemo.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
@Entity
@Table(name="cart")
public class Cart {

	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	
	private int farmerid;
	
	private String description;
	
	private int priceperdozen;
	
	private int mangoid;
	

	private int customerid;
	
	
	private String mangoname;
	
	private int quantity;
	
	private Date date;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public int getMangoid() {
		return mangoid;
	}

	public void setMangoid(int mangoid) {
		this.mangoid = mangoid;
	}

	public int getFarmerid() {
		return farmerid;
	}

	public void setFarmerid(int farmerid) {
		this.farmerid = farmerid;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPriceperdozen() {
		return priceperdozen;
	}

	public void setPriceperdozen(int priceperdozen) {
		this.priceperdozen = priceperdozen;
	}

	public int getCustomerid() {
		return customerid;
	}

	public void setCustomerid(int customerid) {
		this.customerid = customerid;
	}

	public String getMangoname() {
		return mangoname;
	}

	public void setMangoname(String mangoname) {
		this.mangoname = mangoname;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Cart(int id, int farmerid, String description, int priceperdozen, int customerid, String mangoname,
			int quantity, Date date) {
		super();
		this.id = id;
		this.farmerid = farmerid;
		this.description = description;
		this.priceperdozen = priceperdozen;
		this.customerid = customerid;
		this.mangoname = mangoname;
		this.quantity = quantity;
		this.date = date;
	}
	
	public Cart() {
		//  TODO Auto-generated constructor stub
	}
	
	
	
	
	
	

}

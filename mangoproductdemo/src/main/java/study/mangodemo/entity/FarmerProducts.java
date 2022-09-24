package study.mangodemo.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FarmerProducts {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private int farmerid;
	
	private String description;
	
	private int priceperdozen;
	
	private String mangoname;
	
	private int quantity;
	
	private Date date;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getFarmerid() {
		return farmerid;
	}

	public void setFarmerid(int farmerid) {
		this.farmerid = farmerid;
	}

	public String getdescription() {
		return description;
	}

	public void setdescription(String description) {
		this.description = description;
	}

	public int getPriceperdozen() {
		return priceperdozen;
	}

	public void setPriceperdozen(int priceperdozen) {
		this.priceperdozen = priceperdozen;
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

	public FarmerProducts(int id, int farmerid, String description, int priceperdozen, String mangoname, int quantity,
			Date date) {
		super();
		this.id = id;
		this.farmerid = farmerid;
		this.description = description;
		this.priceperdozen = priceperdozen;
		this.mangoname = mangoname;
		this.quantity = quantity;
		this.date = date;
	}
	
	public FarmerProducts() {
	// TODO Auto-generated constructor stub
	};
	
	
}

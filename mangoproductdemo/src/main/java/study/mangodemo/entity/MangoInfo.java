package study.mangodemo.entity;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="mango_info")
public class MangoInfo {

	


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="mango_id")
	private int mangoid;
	@Column(name="variety")
	private String variety;
	@Column(name="description")
	private String description;
	@Column(name="price_per_dozen")
	private int priceperdozen;
	@JsonBackReference
	@ManyToOne(cascade =CascadeType.ALL )
	@JoinColumn(name="farmer_id")
	private FarmerInfo farmer;
	
	
	public MangoInfo() {
		// TODO Auto-generated constructor stub
	}

	
	
	

public MangoInfo(int mangoid, String variety, String description, int priceperdozen, FarmerInfo farmer) {
		super();
		this.mangoid = mangoid;
		this.variety = variety;
		this.description = description;
		this.priceperdozen = priceperdozen;
		this.farmer = farmer;
	}





//	public MangoInfo(int mango_id, String variety, String description, int price_per_dozen) {
//		super();
//		this.mango_id = mango_id;
//		this.variety = variety;
//		this.description = description;
//		this.price_per_dozen = price_per_dozen;
//	}
//
//
//	public int getMango_id() {
//		return mango_id;
//	}
//
//
//	public void setMango_id(int mango_id) {
//		this.mango_id = mango_id;
//	}
//
//
//	public String getVariety() {
//		return variety;
//	}
//
//
//	public void setVariety(String variety) {
//		this.variety = variety;
//	}
//
//
//	public String getDescription() {
//		return description;
//	}
//
//
//	public void setDescription(String description) {
//		this.description = description;
//	}
//
//
//	public int getPrice_per_dozen() {
//		return price_per_dozen;
//	}
//
//
//	public void setPrice_per_dozen(int price_per_dozen) {
//		this.price_per_dozen = price_per_dozen;
//	}
//
//
//	@Override
//	public String toString() {
//		return "MangoInfo [mango_id=" + mango_id + ", variety=" + variety + ", description=" + description
//				+ ", price_per_dozen=" + price_per_dozen + "]";
//	}


	public int getMangoid() {
		return mangoid;
	}





	public void setMangoid(int mangoid) {
		this.mangoid = mangoid;
	}





	public String getVariety() {
		return variety;
	}





	public void setVariety(String variety) {
		this.variety = variety;
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





	public FarmerInfo getFarmer() {
		return farmer;
	}


	public void setFarmer(FarmerInfo farmer) {
		this.farmer = farmer;
	}
	
	
	
	



	
	



	
	
	
	
}


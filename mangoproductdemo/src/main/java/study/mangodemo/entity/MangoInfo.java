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


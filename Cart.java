
package study.mangodemo.entity;

//import java.util.ArrayList;
//import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Cart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "cart_id")
	private long cartid;
	
	
	@Column(name = "email_id")
	private String emailid;
	
	@Column(name = "mango_id")
	private long mangoid;
	
	@Column(name = "qty")
	private long qty;
	
	
	

	 @OneToOne(cascade = CascadeType.ALL,mappedBy = "info")
	private Orders orders;
	

	public Cart(long cartid, String emailid, long mangoid, long qty) {
		super();
		this.cartid = cartid;
		this.emailid = emailid;
		this.mangoid = mangoid;
		this.qty = qty;
	}

	public long getCartid() {
		return cartid;
	}

	public void setCartid(long cartid) {
		this.cartid = cartid;
	}

	

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public long getMangoid() {
		return mangoid;
	}

	public void setMangoid(long mangoid) {
		this.mangoid = mangoid;
	}

	public long getQty() {
		return qty;
	}

	public void setQty(long qty) {
		this.qty = qty;
	}

	public Orders getOrders() {
		return orders;
	}

	public void setOrders(Orders orders) {
		this.orders = orders;
	}


	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
}









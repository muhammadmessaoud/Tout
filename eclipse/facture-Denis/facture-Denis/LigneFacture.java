package exoFacture;

import java.util.ArrayList;
import java.util.List;

public class LigneFacture {

	private float totalFacture = 0;
	private List<Facture> factures = new ArrayList<>();
	
	public LigneFacture() {
		super();
		// TODO Auto-generated constructor stub
	}

	public LigneFacture(List<Facture> factures) {
		super();
		this.factures = factures;
	}

	public List<Facture> getFactures() {
		return factures;
	}

	public void setFactures(Facture facture) {
		this.factures.add(facture);
	}

	
	public String toString() {
		String str = "";
		
		for (Facture facture : this.getFactures()) {
			str += facture.toString()+ "\r";
			this.totalFacture += facture.getTotal();
		}
		str += "***************************************************\r";
		str	+= "Total des factures : " + this.totalFacture + " €";
		str += "\r**************************************************";
		
		return str;
		
	}
}

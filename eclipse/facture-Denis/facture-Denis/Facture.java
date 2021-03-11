package exoFacture;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Facture {

	private int numeroFacture;
	private float total = 0;
	private LocalDate dateFacture;
	private Client client;
	private List<Produit> produits = new ArrayList<>();
	
	public Facture() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Facture(int numeroFacture, LocalDate dateFacture) {
		super();
		this.numeroFacture = numeroFacture;
		this.dateFacture = dateFacture;
	}

	public int getNumeroFacture() {
		return numeroFacture;
	}
	public void setNumeroFacture(int numeroFacture) {
		this.numeroFacture = numeroFacture;
	}
	public float getTotal() {
		return total;
	}
	public void setTotal(float total) {
		this.total = total;
	}
	public LocalDate getDateFacture() {
		return dateFacture;
	}
	public void setDateFacture(LocalDate dateFacture) {
		this.dateFacture = dateFacture;
	}
	public Client getClient() {
		return client;
	}
	public void setClient(Client client) {
		this.client = client;
	}
	public List<Produit> getProduits() {
		return produits;
	}
	public void setProduits(Produit produit) {
		this.produits.add(produit); // c'est un tableau et on lui rajoute des produits 
	}

	public String toString() { /* cette méthode permet d'éviter les multiples sysout dans la classe c*/
		String str = "========================================================\r"
				+ "\t\tFacture N° : " + this.getNumeroFacture() 
				+ "\r========================================================\r"
				+ "Date de création : " + this.getDateFacture()
				+ "\rNom Client : " + this.client.getNom()
				+ "\r--------------------------------------------------------";
		
				for (Produit produit : this.getProduits()) {
					this.total += produit.getPrix();
					
					str += "\r - " + produit.getNom() + " (" + produit.getPrix() + " €) construit par " + produit.getFournisseur().getNom();
					
				}
				str += "\r--------------------------------------------------------\r";
				str += "Total : " + this.getTotal() + " €\r";
				return str;
				
	}
}

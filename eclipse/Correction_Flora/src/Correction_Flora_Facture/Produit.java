package Correction_Flora_Facture;

public class Produit {
	private String nomProduit;
	private Fournisseur fournisseur;
	private float prix;
	private int tva = 20;
	
	public Fournisseur getFournisseur() {
		return fournisseur;
	}
	public void setFournisseur(Fournisseur fournisseur) {
		this.fournisseur = fournisseur;
	}

	public int getTva() {
		return tva;
	}
	public void setTva(int tva) {
		this.tva = tva;
	}
	public String getNomProduit() {
		return nomProduit;
	}
	public void setNomProduit(String nomProduit) {
		this.nomProduit = nomProduit;
	}
	
	public float getPrix() {
		return prix;
	}
	public void setPrix(Float prix) {
		this.prix = prix;
	}
}

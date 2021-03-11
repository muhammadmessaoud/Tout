package exoFacture;

public class Produit {

	private String nom;
	private float prix;
	private Fournisseur fournisseur;
	

	public Produit() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Produit(String nom, float prix) {
		super();
		this.nom = nom;
		this.prix = prix;
	}

	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public float getPrix() {
		return prix;
	}
	public void setPrix(float prix) {
		this.prix = prix;
	}
	public Fournisseur getFournisseur() {
		return fournisseur;
	}
	public void setFournisseur(Fournisseur fournisseur) {
		this.fournisseur = fournisseur;
	}
	
}

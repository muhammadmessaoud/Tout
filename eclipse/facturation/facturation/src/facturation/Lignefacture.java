package facturation;

public class Lignefacture {
	private Produit produit;
	private Fournisseur fournisseur;


	public Produit getProduit() {
		return produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	public Fournisseur getFournisseur() {
		return fournisseur;
	}

	public void setFournisseur(Fournisseur fournisseur) {
		this.fournisseur = fournisseur;
	}
	

	public String toString() {
		   return  "- " + produit.getNomProduit() + " (" + produit.getPrix() + " €) construit par " + fournisseur.getNomFournisseur();
	}
}

package Correction_Charly_Facture;
public class LigneFacture {

    private Fournisseur fournisseur;
    private Produit produit;

    public Fournisseur getFournisseur() {
	return fournisseur;
    }

    public void setFournisseur(Fournisseur fournisseur) {
	this.fournisseur = fournisseur;
    }

    public Produit getProduit() {
	return produit;
    }

    public void setProduit(Produit produit) {
	this.produit = produit;
    }

    public void afficherDansConsole() {
	System.out.println(
		"- " + produit.getNom() + " (" + produit.getPrix() + " €) construit par " + fournisseur.getNom());
    }

}

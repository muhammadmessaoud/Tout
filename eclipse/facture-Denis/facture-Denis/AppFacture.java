package exoFacture;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class AppFacture {

	public static void main(String[] args) {
		System.out.println("App Facturation sans classe 👉 pas organisé et on s'y perd dans toutes ces lignes de code");
		
		Client denis = new Client("Denis");
		// denis.setNom("Denis");
		
		Fournisseur fournisseurApple = new Fournisseur("Apple");
		// fournisseurApple.setNom("Apple");
		
		Fournisseur fournisseurSamsung = new Fournisseur("Samsung");
		// fournisseurSamsung.setNom("Samsung");
		
		Produit nomIphone11 = new Produit("Iphone 11", 689.0f);
		// nomIphone11.setNom("Iphone 11");
		// nomIphone11.setPrix(689.0f);
		nomIphone11.setFournisseur(fournisseurApple);
		
		Produit nomSamsung = new Produit("galaxy S20", 799.0f);
		// nomSamsung.setNom("galaxy S20");
		// nomSamsung.setPrix(799.0f);
		nomSamsung.setFournisseur(fournisseurSamsung);
		
		Facture factureDenis = new Facture(1, LocalDate.parse("2020-03-07"));
		// factureDenis.setNumeroFacture(1);
		// factureDenis.setDateFacture(LocalDate.parse("2020-03-07"));
		factureDenis.setClient(denis);
		factureDenis.setProduits(nomIphone11);
		factureDenis.setProduits(nomSamsung);
		
		Client momo = new Client("Momo");
		// momo.setNom("Momo");
		
		Fournisseur fournisseurWhirpool = new Fournisseur("Whirpool");
		// fournisseurWhirpool.setNom("Whirpool");
		
		Produit produitWhirlpoolFreshCare= new Produit("Whirlpool Fresh Care", 378.95f);
		// produitWhirlpoolFreshCare.setNom("Whirlpool Fresh Care");
		// produitWhirlpoolFreshCare.setPrix(378.95f);
		produitWhirlpoolFreshCare.setFournisseur(fournisseurWhirpool);
		
		Facture factureMomo = new Facture(2, LocalDate.parse("2020-03-08"));
		// factureMomo.setNumeroFacture(2);
		// factureMomo.setDateFacture(LocalDate.parse("2020-03-08"));
		factureMomo.setClient(momo);
		factureMomo.setProduits(produitWhirlpoolFreshCare);
		factureMomo.setProduits(produitWhirlpoolFreshCare);
		factureMomo.setProduits(produitWhirlpoolFreshCare);
	
		List<Facture> factures = new ArrayList<Facture>();
		factures.add(factureDenis);
		factures.add(factureMomo);
		LigneFacture ligneFacture = new LigneFacture(factures);
		// ligneFacture.setFactures(factureDenis);
		// ligneFacture.setFactures(factureMomo);
		
		System.out.println(ligneFacture);
	}
}

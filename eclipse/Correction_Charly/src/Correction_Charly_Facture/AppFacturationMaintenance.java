package Correction_Charly_Facture;
import java.time.LocalDate;

public class AppFacturationMaintenance {

    public static void main(String[] args) {
	System.out.println("App Facturation sans classe 👉 difficile à maintenir");

	// Contexte : logiciel de facturation
	// ==================================
	//
	// Objectif #2 : Plus facile à maintenir
	// =====================================
	//
	// Problème : difficile de savoir où on doit modifier le code
	// ----------------------------------------------------------
	// S'il y a un bout de code à corriger/modifier, mais que le code n'est pas
	// organisé alors c'est difficile de trouver l'endroit exacte où on doit faire
	// la modification.
	// Il faudra alors parcourir le code dans son intégralité pour trouver ce qu'on
	// doit modifier.
	//
	// Problème : difficile de ne pas oublier un code à modifié (redondance)
	// ---------------------------------------------------------------------
	// Si on doit modifier le titre des factures pour remplacer "Facture numéro "
	// par "Facture n°" alors il faudra repérer chaque bout de code qui affiche le
	// titre de la facture et y faire la modification.
	// Donc au lieu de modifier une fois, on doit modifier plusieurs fois, c'est
	// lourd, on va perdre un temps fou pour tout modifier et en plus on peut se
	// tromper en modifiant le code (mauvais copier/coller, majuscule,...).
	//
	// Est-ce qu'il y a un moyen de :
	// ------------------------------
	// - changer une bonne fois pour toute un bout de code au lieu de faire
	// plusieurs fois la même modification et gagner du temps ?
	// - éviter d'oublier un bout de code qu'il fallait modifié ?
	// - repérer rapidement et facilement le bout de code à modifier plutôt que de
	// fouille dans des centaines de lignes de code ou le code est en vrac ?
	//
	// Solution : créer des classes qui permettent de définir un code unique qu'on
	// pourra plus facilement maintenir
	//
	// Modifier le code ci-dessous avec les éléments suivants :
	// 1. modifier le titre des factures en remplaçant "Facture numéro " par
	// "Facture n°"
	// 2. remplacer les tirets par des underscore pour les lignes de séparation.
	// 3. ajouter le symboles € à côté du prix total des factures
	// 4. ajouter sur chaque ligne de produit la TVA, le prix HT et le TTC (la TVA
	// est de 20% pour tous les produits, et le prix actuellement affiché est le
	// TTC)
	//
	// Faire les même modification sur la version du code en classe créé
	// précédemment
	//

	// FactureA

	System.out.println("========================================================");
	int numeroFactureA = 1;
	System.out.println("                      Facture numéro " + numeroFactureA);
	System.out.println("========================================================");

	LocalDate dateFactureA = LocalDate.parse("2020-03-07");
	System.out.println("Date de création : " + dateFactureA);

	String nomClient1 = new String("Toto");
	System.out.println("Nom client : " + nomClient1);

	System.out.println("--------------------------------------------------------");

	float total = 0;

	String nomIphone11 = new String("iPhone 11");
	float prixIphone11 = 689.0f;
	total += prixIphone11;
	String fournisseurApple = new String("Apple");
	System.out.println("- " + nomIphone11 + " (" + prixIphone11 + " €) construit par " + fournisseurApple);

	String nomGalaxyS20 = new String("Galaxy S20");
	float prixGalaxyS20 = 799.0f;
	total += prixGalaxyS20;
	String fournisseurSamsung = new String("Samsung");
	System.out.println("- " + nomGalaxyS20 + " (" + prixGalaxyS20 + " €) construit par " + fournisseurSamsung);

	System.out.println("--------------------------------------------------------");

	System.out.println("Total : " + total);

	System.out.println("");

	// FactureB

	System.out.println("========================================================");
	int numeroFactureB = 2;
	System.out.println("                      Facture numéro " + numeroFactureB);
	System.out.println("========================================================");

	LocalDate dateFactureB = LocalDate.parse("2020-03-08");
	System.out.println("Date de création : " + dateFactureB);

	String nomClient2 = new String("Lala");
	System.out.println("Nom client : " + nomClient2);

	System.out.println("--------------------------------------------------------");

	total = 0;

	String nomWhirlpoolFreshCare = new String("Whirlpool Fresh Care");
	float prixWhirlpoolFreshCare = 378.95f;
	total += prixWhirlpoolFreshCare;
	String fournisseurWhirlpool = new String("Whirlpool");
	System.out.println("- " + nomWhirlpoolFreshCare + " (" + prixWhirlpoolFreshCare + " €) construit par "
		+ fournisseurWhirlpool);

	total += prixIphone11;
	System.out.println("- " + nomIphone11 + " (" + prixIphone11 + " €) construit par " + fournisseurApple);

	System.out.println("--------------------------------------------------------");

	System.out.println("Total : " + total);

    }
}

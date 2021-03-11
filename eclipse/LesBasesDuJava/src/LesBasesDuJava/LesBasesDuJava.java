package LesBasesDuJava;

public class LesBasesDuJava {
	
	public static void main(String[] args) {
		//methode de démarrage de l'application
		
		//creation de l'instance de la classe Personne
		Personnes nasser = new Personnes();
		nasser.setPrenom("Nasser"); // OK car la méthode setPrenom est accessible/visible
		//nasser.prenom = "Nasser" // INTERDIT car la propriété est cachée/privée
		
		Personnes gaelle = new Personnes();
		gaelle.setPrenom("Gaëlle");
		
		Personnes flora = new Personnes();
		flora.setPrenom("Flora");
		
		System.out.println(flora.getPrenom());
	}
}

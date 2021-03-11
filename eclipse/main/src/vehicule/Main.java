package vehicule;

public class Main {
	
	public static void main(String[] args) {
		Voiture peugeot = new Voiture();
		peugeot.setNom("206");
		peugeot.setCouleur(null);
		
		Velo bike = new Velo();
		bike.setNbRoues(2);
		bike.setCouleur(null);
		
		
		System.out.println("Nom de la voiture : " + peugeot.getNom());
		
		System.out.println("Couleur du vélo : " + bike.getCouleur());
		System.out.println("Nombre de roues du vélo : " +bike.getNbRoues());
	}

}

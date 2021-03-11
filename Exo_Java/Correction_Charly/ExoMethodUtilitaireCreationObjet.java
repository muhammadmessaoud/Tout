public class ExoMethodUtilitaireCreationObjet {

	public static void main(String[] args) {
		Habitant habitant = creerHabitant(1, "asterix");
		System.out.println("habitant " + habitant.nom);
		
		habitant = creerHabitant(2, "obelix");
		System.out.println("habitant " + habitant.nom);
		
		habitant = creerHabitant(3, "panoramix");
		System.out.println("habitant " + habitant.nom);
		
		habitant = creerHabitant(4, "assurancetourix");
		System.out.println("habitant " + habitant.nom);
		
		habitant = creerHabitant(5, "homéopathix");
		System.out.println("habitant " + habitant.nom);
	}
	
	static Habitant creerHabitant(int numHab, String nom) {
		Habitant habitant = new Habitant();
		habitant.nom = nom;
		return habitant;
	}

}

class Habitant {
	int numHab;
	String nom;
}

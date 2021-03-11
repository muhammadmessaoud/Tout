public class ExoReference {
	 
	public static void main(String[] args) {
		Habitant asterix = new Habitant();
		asterix.nom = "Astérix";
		
		Habitant obelix = new Habitant();
		obelix.nom = "Obélix";
		
		Habitant variableHabitant = asterix; // créer une référence qui fait référence à l'objet asterix
		System.out.println("nom de l'objet référencé par la référence \"variableHabitant\" : " + variableHabitant.nom);
		System.out.println("nom de l'objet référencé par la référence \"asterix\" : " + asterix.nom);
		
		Habitant ref = obelix;
		System.out.println("nom de l'objet référencé par la référence \"ref\" : " + ref.nom);
		
		ref = asterix;
		System.out.println("nom de l'objet référencé par la référence \"ref\" : " + ref.nom);
		
		Potion potionMagique1 = new Potion();
		potionMagique1.nom = "Ma potion magique de ouf";
		
		Absorber absAsterixPotion1 = new Absorber();
		absAsterixPotion1.habitant = asterix;
		absAsterixPotion1.potion = potionMagique1;
		System.out.println(absAsterixPotion1.habitant.nom + " a absorbé la potion " + absAsterixPotion1.potion.nom);
		
		
	}
	 
}

class Habitant {
	int numHab;
	String nom;
}

class Potion {
	int numPotion;
	String nom;
}

class Absorber {
	Habitant habitant;
	Potion potion;
}

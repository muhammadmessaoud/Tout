package sqlix;

public class Main {

	public static void main(String[] args) {
		
		int age;
		
		System.out.println("age");

	}

}

public class Potion {
    int numPotion;
    String libPotion;
    String formule;
    String constituantPrincipale;
}
public class Qualite {
    int numQualite;
    String libQualite;
}
public class Province {
    int numProvince;
    String nomProvince;
    String nomGouverneur;
}
public class Village {
    int numVillage;
    String nomVillage;
    int nbHuttes;
    int numProvince;
}
public class Fabriquer {
    int id;
    int numHabitant;
}
public class Habitant {
    int numHabitant;
    String nom;
    int age;
    int numQualite;
    int numVillage;
}
public class Absorber {
    int numPotion;
    String date;
    int numHabitant;
    int quantite;
}
public class Resserre {
    int numResserre;
    String nomResserre;
    int superficie;
    int numVillage;
}
public class Categorie {
    String codeCat;
    String nom;
    int points;
}
public class Trophee {
    int numTrophee;
    String date;
    String codeCategorie;
    int numPreneur;
    int numResserre;
}
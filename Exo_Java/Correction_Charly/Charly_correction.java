/*
 * Licence Charly autorise tous les apprenants de la DWWM ne revendre mon code et me payer un café en échange.
 */

/*
 * HelloWorld
 * 
 * Une classe qui écrit "helloworld" dans la console.
 *
 * @version 1.0 25/02/2021
 * @author Charalambos ANASTASSOPOULOS
 */
public class HelloWorld {
    
    /* Méthode principale appelée au démarrage de l'application */
    public static void main(String[] args) {

        {
            int compteur = 1;
            int id = ++compteur; /* 2 */
    
            System.out.println("compteur = 1");
            System.out.println("id = ++compteur");
            System.out.println("valeur de id : " + id);
        
        }
        
        {
            int compteur = 1;
            int id = compteur++; /* 1 */
    
            System.out.println("compteur = 1");
            System.out.println("id = compteur++");
            System.out.println("valeur de id : " + id);
        }
    }
        
}

/*
 * Le chocolatier permet de faire du chocolat

class Chocolatier {
    
}
 */
/*
public class ExoHeritage {
    
    
    static class Parent {
        int age;
        String nom;
    }
    
    
    static class Enfant extends Parent {
        String jouet;        
    }

    
     Méthode principale appelée au démarrage de l'application 
    public static void main(String[] args) {
        Enfant toto = new Enfant();
        toto.age = 10;
        toto.nom = "toto";
        toto.jouet = "console de jv";
        
        System.out.println("age : " + toto.age);
        System.out.println("nom : " + toto.nom);
        System.out.println("jouet : " + toto.jouet);        
    }
    
}
*/


/*
public Habitant creationHabitant(int numHab, String nom, int age, int numQualite, int numVillage) {
    Habitant habitant = new Habitant();
    habitant.numHab = numHab;
    habitant.nom = nom;
    habitant.age = age;
    habitant.numQualite = numQualite;
    habitant.numVillage = numVillage;
    return habitant;
}
Habitant habitant = creationHabitant(7, 'Astérix', 35, 4, 1);
*/
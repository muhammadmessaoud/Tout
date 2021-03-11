package sqlix;

public class Main {

	public static void main(String[] args) {
		Potion po = new Potion();
		po.numPotion = 1;	
		po.libPotion = "Potion Magique n°1";	
		po.formule = null;	
		po.constituantPrincipale = "Gui";
		
		System.out.println("Potion");
		System.out.println("numPotion => "+ po.numPotion);
		System.out.println("libPotion => "+ po.libPotion);
		System.out.println("formule => "+ po.formule);
		System.out.println("constituantPrincipale => "+ po.constituantPrincipale);
		System.out.println("----------------------------------------------\r");
		
		Qualite q1 = new Qualite();
		q1.numQualite = 4;	
		q1.libQualite = "Guerrier";	
		
		System.out.println("Qualite");
		System.out.println("numQualite => "+ q1.numQualite);
		System.out.println("libQualite => "+ q1.libQualite);
		System.out.println("----------------------------------------------\r");
		
		Qualite q2 = new Qualite();
		q2.numQualite = 2;	
		q2.libQualite = "Druide";	
		
		System.out.println("Qualite2");
		System.out.println("numQualite => "+ q2.numQualite);
		System.out.println("libQualite => "+ q2.libQualite);
		System.out.println("----------------------------------------------\r");
		
		Province p = new Province();
		p.numProvince = 1;	
		p.nomProvince = "Armorique";	
		p.nomGouverneur = "Garovirus";	
		
		System.out.println("Province");
		System.out.println("numProvince => "+ p.numProvince);
		System.out.println("nomProvince => "+ p.nomProvince);
		System.out.println("nomGouverneur => "+ p.nomGouverneur);
		System.out.println("----------------------------------------------\r");
		
		
		Village v = new Village();
		v.numVillage = 1;	
		v.nomVillage = "Aquilona";	
		v.nbHuttes = 52;	
		v.numProvince = p.numProvince;
		
		System.out.println("Village");
		System.out.println("numvillage => "+ v.numVillage);
		System.out.println("nomVillage => "+ v.nomVillage);
		System.out.println("nbHuttes => "+ v.nbHuttes);
		System.out.println("numProvince => "+ v.numProvince);
		System.out.println("----------------------------------------------\r");
		
		Habitant h = new Habitant();
		h.numHabitant = 4;	
		h.nom = "Panoramix";	
		h.age = 79;	
		h.numQualite = q2.numQualite;	
		h.numVillage = v.numVillage;	
		
		System.out.println("Habitant Panoramix");
		System.out.println("numHabitant => "+ h.numHabitant);
		System.out.println("nom => "+ h.nom);
		System.out.println("age => "+ h.age);
		System.out.println("numQualite => "+ h.numQualite);
		System.out.println("numVillage => "+ h.numVillage);
		System.out.println("----------------------------------------------\r");
		
		Habitant h2 = new Habitant();
		h2.numHabitant = 7;	
		h2.nom = "Asterix";	
		h2.age = 35;	
		h2.numQualite = q1.numQualite;	
		h2.numVillage = v.numVillage;	
		
		System.out.println("Habitant Asterix");
		System.out.println("numHabitant => "+ h2.numHabitant);
		System.out.println("nom => "+ h2.nom);
		System.out.println("age => "+ h2.age);
		System.out.println("numQualite => "+ h2.numQualite);
		System.out.println("numVillage => "+ h2.numVillage);
		System.out.println("----------------------------------------------\r");
		
		Habitant h3 = new Habitant();
		h3.numHabitant = 11;	
		h3.nom = "Obelix";	
		h3.age = 38;	
		h3.numQualite = q1.numQualite;	
		h3.numVillage = v.numVillage;	
		
		System.out.println("Habitant Obelix");
		System.out.println("numHabitant => "+ h3.numHabitant);
		System.out.println("nom => "+ h3.nom);
		System.out.println("age => "+ h3.age);
		System.out.println("numQualite => "+ h3.numQualite);
		System.out.println("numVillage => "+ h3.numVillage);
		System.out.println("----------------------------------------------\r");
		
		
		Fabriquer f = new Fabriquer();
		f.numPotion = po.numPotion;	
		f.numHabitant = h.numHabitant;	
		
		System.out.println("Fabriquer");
		System.out.println("numProvince => "+ p.numProvince);
		System.out.println("nomProvince => "+ p.nomProvince);
		System.out.println("nomGouverneur => "+ p.nomGouverneur);
		System.out.println("----------------------------------------------\r");
		
		Absorber a = new Absorber();
		a.numPotion = 1;	
		a.date = "2052-02-18 00:00:00";	
		a.numHabitant = h2.numHabitant;	
		a.quantite = 1;	
		
		System.out.println("Absorber");
		System.out.println("numPotion => "+ a.numPotion);
		System.out.println("date => "+ a.date);
		System.out.println("numHabitant => "+ a.numHabitant);
		System.out.println("quantite => "+ a.quantite);
		System.out.println("----------------------------------------------\r");
		
		Absorber a1 = new Absorber();
		a1.numPotion = 1;	
		a1.date = "2052-02-18 00:00:00";	
		a1.numHabitant = h2.numHabitant;	
		a1.quantite = 1;	
		
		System.out.println("Absorber 2");
		System.out.println("numPotion => "+ a1.numPotion);
		System.out.println("date => "+ a1.date);
		System.out.println("numHabitant => "+ a1.numHabitant);
		System.out.println("quantite => "+ a1.quantite);
		System.out.println("----------------------------------------------\r");
		
		Absorber a2 = new Absorber();
		a2.numPotion = 1;	
		a2.date = "2052-02-18 00:00:00";	
		a2.numHabitant = h2.numHabitant;	
		a2.quantite = 1;	
		
		System.out.println("Absorber 3");
		System.out.println("numPotion => "+ a2.numPotion);
		System.out.println("date => "+ a2.date);
		System.out.println("numHabitant => "+ a2.numHabitant);
		System.out.println("quantite => "+ a2.quantite);
		System.out.println("----------------------------------------------\r");
		
		Absorber a3 = new Absorber();
		a3.numPotion = 1;	
		a3.date = "2052-02-18 00:00:00";	
		a3.numHabitant = h2.numHabitant;	
		a3.quantite = 1;	
		
		System.out.println("Absorber 4");
		System.out.println("numPotion => "+ a3.numPotion);
		System.out.println("date => "+ a3.date);
		System.out.println("numHabitant => "+ a3.numHabitant);
		System.out.println("quantite => "+ a3.quantite);
		System.out.println("----------------------------------------------\r");
		
		Absorber a4 = new Absorber();
		a4.numPotion = 1;	
		a4.date = "2052-02-18 00:00:00";	
		a4.numHabitant = h2.numHabitant;	
		a4.quantite = 1;	
		
		System.out.println("Absorber 5");
		System.out.println("numPotion => "+ a4.numPotion);
		System.out.println("date => "+ a4.date);
		System.out.println("numHabitant => "+ a4.numHabitant);
		System.out.println("quantite => "+ a4.quantite);
		System.out.println("----------------------------------------------\r");
		
		Resserre r = new Resserre();
		r.numResserre = 3;	
		r.nomResserre = "Sintrof";	
		r.superficie = 895;	
		r.numVillage = v.numVillage;	
		
		System.out.println("Resserre");
		System.out.println("numResserre => "+ r.numResserre);
		System.out.println("nomResserre => "+ r.nomResserre);
		System.out.println("superficie => "+ r.superficie);
		System.out.println("numVillage => "+ r.numVillage);
		System.out.println("----------------------------------------------\r");
		
		Categorie c = new Categorie();
		c.codeCat = "BCN";	
		c.nom = "Bouclier de Centurion";	
		c.points = 6;	
		
		System.out.println("Categorie");
		System.out.println("codeCat => "+ c.codeCat);
		System.out.println("nom => "+ c.nom);
		System.out.println("points => "+ c.points);
		System.out.println("----------------------------------------------\r");
		
		Trophee t = new Trophee();
		t.numTrophee = 1;	
		t.date = "2052-04-03 00:00:00";	
		t.codeCat = c.codeCat;	
		t.numPreneur = h2.numHabitant;	
		t.numResserre = r.numResserre;
		
		System.out.println("Trophee");
		System.out.println("numTrophee => "+ t.numTrophee);
		System.out.println("date => "+ t.date);
		System.out.println("codeCat => "+ t.codeCat);
		System.out.println("numPreneur => "+ t.numPreneur);
		System.out.println("numResserre => "+ t.numResserre);
		System.out.println("----------------------------------------------\r");
		
		Trophee t2 = new Trophee();
		t2.numTrophee = 1;	
		t2.date = "2052-04-03 00:00:00";	
		t2.codeCat = c.codeCat;	
		t2.numPreneur = h2.numHabitant;	
		t2.numResserre = r.numResserre;
		
		System.out.println("Trophee 2");
		System.out.println("numTrophee => "+ t2.numTrophee);
		System.out.println("date => "+ t2.date);
		System.out.println("codeCat => "+ t2.codeCat);
		System.out.println("numPreneur => "+ t2.numPreneur);
		System.out.println("numResserre => "+ t2.numResserre);
		System.out.println("----------------------------------------------\r");
		
		Trophee t3 = new Trophee();
		t3.numTrophee = 1;	
		t3.date = "2052-04-03 00:00:00";	
		t3.codeCat = c.codeCat;	
		t3.numPreneur = h3.numHabitant;	
		t3.numResserre = r.numResserre;
		
		System.out.println("Trophee 3");
		System.out.println("numTrophee => "+ t3.numTrophee);
		System.out.println("date => "+ t3.date);
		System.out.println("codeCat => "+ t3.codeCat);
		System.out.println("numPreneur => "+ t3.numPreneur);
		System.out.println("numResserre => "+ t3.numResserre);
		System.out.println("----------------------------------------------\r");
		
		
	}

}

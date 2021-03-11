package exo;

public class Rectangle {
	private double largeur;
	private double longueur;
	
	public Rectangle(double la, double lo) {
		largeur = la ;
		longueur = lo;
		// TODO Auto-generated constructor stub
	}
	public double getLargeur() {
		return largeur;
	}
	public void setLargeur(double largeur) {
		this.largeur = largeur;
	}
	public double getLongueur() {
		return longueur;
	}
	public void setLongueur(double longueur) {
		this.longueur = longueur;
	}
	public double surface() {
		return this.longueur*this.largeur;
	}
	public double perimetre() {
		return 2*(this.longueur+this.largeur);
	}
	public void afficher() {
		System.out.println("La surface du rectangle est : " + this.surface());
		System.out.println("Le périmètre du rectangle est : " + this.perimetre());
	}
	

}

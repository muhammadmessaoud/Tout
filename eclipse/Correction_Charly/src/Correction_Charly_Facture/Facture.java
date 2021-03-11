package Correction_Charly_Facture;
public class Facture {

    private int numero;
    private String date;
    private Client client;
    private LigneFacture ligneFacture1;
    private LigneFacture ligneFacture2;

    public int getNumero() {
	return numero;
    }

    public void setNumero(int numero) {
	this.numero = numero;
    }

    public String getDate() {
	return date;
    }

    public void setDate(String date) {
	this.date = date;
    }

    public Client getClient() {
	return client;
    }

    public void setClient(Client client) {
	this.client = client;
    }

    public LigneFacture getLigneFacture1() {
	return ligneFacture1;
    }

    public void setLigneFacture1(LigneFacture ligneFacture1) {
	this.ligneFacture1 = ligneFacture1;
    }

    public LigneFacture getLigneFacture2() {
	return ligneFacture2;
    }

    public void setLigneFacture2(LigneFacture ligneFacture2) {
	this.ligneFacture2 = ligneFacture2;
    }

    public void afficherDansConsole() {
	System.out.println("========================================================");
	System.out.println("                      Facture numéro " + numero);
	System.out.println("========================================================");
	System.out.println("Date de création : " + date);
	System.out.println("Nom client : " + client.getNom());
	System.out.println("--------------------------------------------------------");

	float total = 0;
	ligneFacture1.afficherDansConsole();
	total += ligneFacture1.getProduit().getPrix();
	ligneFacture2.afficherDansConsole();
	total += ligneFacture2.getProduit().getPrix();

	System.out.println("--------------------------------------------------------");
	System.out.println("Total : " + total);
    }

}
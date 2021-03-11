public class ExoHeritage {
    
    
    static class Parent {
        int age;
        String nom;
    }
    
    
    static class Enfant extends Parent {
        String jouet;        
    }

    static class Cousin extends Parent {
        String adress;        
    }


    public static void main(String[] args) {
        Cousin muhammad = new Cousin();
        muhammad.age = 22;
        muhammad.nom = "Muhammad";
        muhammad.adress = "1 Avenue August Renoir Aulnay-sous-bois,93600 ";
        
        System.out.println("age : " + muhammad.age);
        System.out.println("nom : " + muhammad.nom);    
        System.out.println("adresse : " + muhammad.adress);      
    }

    
}
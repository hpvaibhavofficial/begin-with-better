class Animal {
    String name;

    void display() {
        System.out.println("Animal name is : " + name);
    }

}

class Dog extends Animal {
    Dog() {
        super.name = "Dogesh";
        super.display();
    }
}

public class Inheritancee {
    public static void main(String[] args) {
        new Dog();
    }
}

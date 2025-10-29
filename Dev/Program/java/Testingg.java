class Test {
    int x = 100;

    Test() {
        System.out.println("I am in Test");
    }
}

class Ptest extends Test {
    Ptest() {
        System.out.println("I am in Ptest");
    }
}

public class Testingg {
    public static void main(String[] args) {
        Ptest obj = new Ptest();
    }
}

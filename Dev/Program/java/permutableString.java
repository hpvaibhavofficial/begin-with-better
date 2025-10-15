import java.util.*;

public class permutableString {
    private static Integer findPermun(String s) {
        s = s.replaceAll("[aeiou]", "");
        return factorial(s.length());

    }

    private static Integer factorial(int n) {
        int fact = 1;
        if (n == 1 || n == 0)
            return fact;
        for (int i = 2; i <= n; i++) {
            fact = fact * i;
        }
        return fact;
    }

    public static void main(String[] args) {
        System.out.println(findPermun("nuaeill"));
    }
}
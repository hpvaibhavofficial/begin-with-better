import java.util.Scanner;

public class C78A {
    private static int countVowels(String s) {
        int c = 0;
        String ss = "aeiou";
        for (int i = 0; i < s.length(); i++) {
            if (ss.contains(String.valueOf(s.charAt(i)))) {
                c++;
            }
        }
        return c;
    }

    public static void main(String... args) {
        Scanner sc = new Scanner(System.in);
        String l1 = sc.nextLine();
        String l2 = sc.nextLine();
        String l3 = sc.nextLine();

        int x = countVowels(l1);
        int y = countVowels(l2);
        int z = countVowels(l3);

        if (x == 5 && y == 7 && z == 5) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }

        sc.close();
    }
}

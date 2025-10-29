import java.util.Arrays;
import java.util.Scanner;

public class fibonacci {
    public static void main(String[] args) {
        int n;
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        int a = 0, b = 1;
        System.out.print(a + " " + b + " ");
        int res = a + b;
        while (res < n) {
            System.out.print(res + " ");
            a = b;
            b = res;
            res = a + b;

        }
        sc.close();

    }
}
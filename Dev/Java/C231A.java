import java.util.Scanner;

class C231A {
    public static void main(String args[]) {
        // int n;
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int res = 0;
        for (int i = 0; i < n; i++) {
            int a, b, c;
            a = sc.nextInt();
            b = sc.nextInt();
            c = sc.nextInt();

            if ((a + b + c) >= 2) {
                res++;
            }
        }
        System.out.println(res);
        sc.close();
    }
}

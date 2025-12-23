import java.util.Scanner;

public class armstrong {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();
        int originalNum = num;
        int sum = 0;
        int digits = String.valueOf(num).length();

        while (num != 0) {
            int digit = num % 10;
            sum += Math.pow(digit, digits);
            num /= 10;
        }

        if (sum == originalNum) {
            System.out.println(originalNum + " is an armstrong numnber");
        } else {
            System.out.println(originalNum + " is not an armstrong");
        }
        sc.close();
    }
}
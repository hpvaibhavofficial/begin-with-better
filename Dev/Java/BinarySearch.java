import java.util.Scanner;

public class BinarySearch {
    private static void applyBinarySearch(int arr[], int n, int target) {
        int left = 0;
        int right = n - 1;
        int c = 0;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (arr[mid] == target) {
                System.out.println("Target Found");
                c = 1;
                break;
            } else if (target <= arr[mid]) {
                right = mid - 1;
            } else if (target >= arr[mid]) {
                left = mid + 1;
            }
        }

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int x = sc.nextInt();
        int arr[] = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        applyBinarySearch(arr, n, x);
        sc.close();

    }
}

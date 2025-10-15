public class smallestNo {
    public static void main(String[] args) {
        int arr[] = { 1, 2, 3, 5, 6, -1 };
        int mi = Integer.MAX_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < mi) {
                mi = arr[i];
            }
        }
        System.out.println(mi);
    }
}

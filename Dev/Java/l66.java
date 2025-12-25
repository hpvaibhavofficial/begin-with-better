public class l66 {

    private static void addOneToLastDigit(int[] arr) {
        String s = "";
        for (int num : arr) {
            s += num;
        }
        int n = Integer.parseInt(s);
        int ni = n + 1;
        String ss = Integer.toString(ni);

        int neww[] = new int[s.length()];
        for (int i = 0; i < s.length(); i++) {
            neww[i] = ss.charAt(i) - '0';
        }
    }

    public static void main(String[] args) {
        int arr[] = { 1, 2, 3 };

        addOneToLastDigit(arr);
    }

}

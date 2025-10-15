import java.util.*;

public class SecondSmallest {

    private static Integer findSecondSmallest(List<Integer> arr) {
        int smallest = arr.get(0);
        int sSml = Integer.MAX_VALUE;
        for (int x : arr) {
            if (x < smallest) {
                sSml = smallest;
                smallest = x;
            }
            if (x > smallest && x < sSml) {
                sSml = x;
            }
        }
        return sSml;
    }

    public static void main(String[] args) {
        Integer result = findSecondSmallest(Arrays.asList(5, 5, 5, 5));
        System.out.println("2nd Smallest is : " +
                (result != Integer.MAX_VALUE ? result : "Not found"));

    }
}
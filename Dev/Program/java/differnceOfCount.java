import java.util.HashMap;
import java.util.Map;

public class differnceOfCount {

    private static Integer oddEvenDiff(String s) {
        Map<Character, Integer> mp = new HashMap<>();
        for (char x : s.toCharArray()) {
            mp.put(x, mp.getOrDefault(x, 0) + 1);
        }
        int maxOdd = 0;
        int maxEven = 0;
        for (int x : mp.values()) {
            if (x % 2 == 0) {
                maxEven = Integer.max(maxEven, x);
            } else if (x % 2 == 1) {
                maxOdd = Integer.max(maxOdd, x);
            }
        }
        int diff = Math.abs(maxOdd - maxEven);
        return diff;
    }

    public static void main(String[] args) {
        System.out.println(oddEvenDiff("aaaaarfef"));
    }
}
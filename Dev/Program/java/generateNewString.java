import java.util.HashMap;
import java.util.Map;

public class generateNewString {
    private static String generatNewString(String s) {
        String res = "";
        Map<Character, Integer> mp = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            if (!mp.containsKey(s.charAt(i))) {
                mp.put(s.charAt(i), i + 1);
            }
        }

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            for (int x = 0; x < mp.get(ch); x++) {
                res += ch;
            }
            if (i == s.length() - 1) {
                res += "";
            } else
                res += "-";
        }
        return res;
    }

    public static void main(String[] args) {
        String s = "abcaba";
        System.out.println(generatNewString(s));
    }
}

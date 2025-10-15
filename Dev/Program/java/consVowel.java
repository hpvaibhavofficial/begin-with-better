public class consVowel {

    private static boolean isCons(char ch) {
        String s = "aeiouAEIOU";
        if (s.indexOf(ch) == -1) {
            return true;
        }
        return false;

    }

    private static Integer convertCommonString(String s) {
        char fv = '\0';
        int sum = 0;
        int c = 0;

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (isCons(ch)) {
                sum += 10;
            } else if (!isCons(ch) && c == 0) {
                fv = ch;
                c++;
            } else if (!isCons(ch) && c > 0) {
                int f = fv - ch;
                int v = Math.abs(f);
                sum += v;
            }

        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println(convertCommonString("greiay"));
    }
}

public class revString {
    private static String revonCondition(String s) {
        String ans = "";
        for (int i = s.length() - 1; i >= 0; i--) {
            if (Character.isLetterOrDigit(s.charAt(i))) {
                ans += s.charAt(i);
            }
        }
        StringBuilder sb = new StringBuilder(s);
        int j = 0;
        for (int i = 0; i < sb.length(); i++) {
            if (Character.isLetterOrDigit(sb.charAt(i))) {
                sb.setCharAt(i, ans.charAt(j++));
            }
        }

        return sb.toString();
    }

    public static void main(String[] args) {
        System.out.println(revonCondition("a^vdngdvh$dhdv"));
    }
}

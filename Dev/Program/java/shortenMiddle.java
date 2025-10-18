public class shortenMiddle {
    public static void main(String[] args) {
        String s = "exa";
        if (s.length() < 2)
            System.out.println(s);

        else {
            int len = s.length() - 2;
            System.out.println("" + s.charAt(0) + len + s.charAt(s.length() - 1));

        }
    }
}

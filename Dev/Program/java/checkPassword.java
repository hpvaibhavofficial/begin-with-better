public class checkPassword {

    private static final boolean checkMyPassword(String s, int min) {
        if (s.length() < min || s.contains(" ") || s.contains("+") || Character.isDigit(s.charAt(0))) {
            return false;
        }
        int sp = 0;
        int up = 0;
        int id = 0;
        for (char x : s.toCharArray()) {
            if (Character.isDigit(x))
                id++;
            if (Character.isUpperCase(x))
                up++;
            if (!Character.isLetterOrDigit(x))
                sp++;
        }
        if (sp > 0 && up > 0 && id > 0) {
            return true;
        } else
            return false;
    }

    public static void main(String[] args) {
        System.out.println(checkMyPassword("vb@123Fs", 8) ? "vALId" : "iNAVLID");
    }
}

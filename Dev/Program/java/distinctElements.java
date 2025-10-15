import java.util.HashSet;
import java.util.Set;

public class distinctElements {
    public static void main(String[] args) {
        int arr[] = { 1, 2, 3, 4, 6 };
        Set<Integer> st = new HashSet<>();
        for (int x : arr) {
            st.add(x);

        }
        System.out.println(st.size());
    }
}

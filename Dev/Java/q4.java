import java.util.HashSet;
import java.util.Set;
public class q4{
    private static Integer allMedians(int arr1 [], int arr2[]){
        
        Set<Double> st = new HashSet<>();
        
        for(int x : arr1){
            for(int y : arr2){
                double z = (x+y)/2;
                st.add(z);
            }
        }
        
        return st.size();
    }

    public static void main(String[] args) {
        int arr1 [] = {1,2,3};
        int arr2 [] = {2,3};
        System.out.println(allMedians(arr1, arr2));
    }
}

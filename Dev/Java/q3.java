import java.util.Map;
import java.util.HashMap;
public class q3 {
    private static int findFrq(String s1,String s2){
        int cnt=0;
        Map<Character,Integer> mp = new HashMap<>();
        
        for(char c : s1.toCharArray()){
            mp.put(c, mp.getOrDefault(c, 0)+1);
        }

        for(char c : s2.toCharArray()){
            if(!mp.containsKey(c) || mp.get(c) == 0){
                cnt++;
            } else{
                mp.put(c, mp.get(c)-1);
            }
        }
        return cnt;
    }
    public static void main(String[] args) {
        String s1 = "abc";
        String s2 = "aabd";
        System.out.println(findFrq(s1, s2));
    }
}
 
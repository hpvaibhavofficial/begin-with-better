import java.util.*;

public class q5 {
    private static String reverseStr(String s){
        String ans="";
        int i=s.length()-1;
        while(i>=0){
            ans+=s.charAt(i);
            i--;
        }
        return ans;
    }

    private static boolean checkPalindrome(String s){
        s=s.toLowerCase();
        for(int i=0;i<s.length()/2;i++){
            if(s.charAt(i) != s.charAt(s.length()-1-i)){
                return false;
            }
        }
        return true;
    }


    private static ArrayList<Integer> countVowelsCons(String s){
        int vc=0,cc=0;        
        for(int i=0;i<s.length();i++){
            char ch = s.charAt(i);
            if("aeiouAEIOU".indexOf(ch)!=-1){
                vc++;
            } else{
                cc++;
            }
        }
        return new ArrayList<>(Arrays.asList(vc,cc));
    }

    private static Integer charFreq(String s,char cx){
        int c=0;
       s= s.toLowerCase();
        for(char x : s.toCharArray()){
            if(x == cx){
                c++;
            }
        }
        return c;
    }

    
    public static void main(String[] args) {
        String s = "EXTxe";
        System.err.println(reverseStr(s));
        System.err.println(checkPalindrome(s));
        System.err.println(countVowelsCons(s));
        System.out.println(charFreq(s, 'e'));
        
    }
}   
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

    private static Map<Character,Integer> allCharFreq(String s){
        Map<Character,Integer> mp = new HashMap<>();
        s=s.toLowerCase();
        for(char c : s.toCharArray()){
            mp.put(c, mp.getOrDefault(c,0)+1);
        }
        return mp;
    }   

    private static String remSpaces(String s){
        s=s.replace(" ", "");
        return s;
    }

    private static Character fnonrep(String s){
        Map<Character,Integer> mp = new HashMap<>();
        s=s.toLowerCase();
        for(char c : s.toCharArray()){
            mp.put(c,mp.getOrDefault(c,0)+1);
        }

        for(char c : s.toCharArray()){
            if(mp.get(c) == 1){
                return c;
            }
        }

        return '\0';
    }


    private static String switchCase(String s){
        String res = "";
        for(char c : s.toCharArray()){
            if(Character.isUpperCase(c)){
                res+=Character.toLowerCase(c);
            } else if(Character.isLowerCase(c)){
                res+=Character.toUpperCase(c);
            } else if(Character.isWhitespace(c)){
                res+=c;
            }
        }
        return res;
    }

    private static String removeDup(String s){
        String res = "";
        Set <Character> st  = new LinkedHashSet<>();
        for(char c : s.toCharArray()){
            if(st.add(c)){
                res+=c;
            }
        }
        return res;
    }

    private static String findLargestWord(String s){
        String res="";
        int st = 0,end =0;
        int siz = Integer.MIN_VALUE;

        for(int i=0;i<s.length();i++){
            
        }
        return res;
    }
    public static void main(String[] args) {
        String s = "UPPERCASE lowercase";
        System.err.println(reverseStr(s));
        System.err.println(checkPalindrome(s));
        System.err.println(countVowelsCons(s));
        System.out.println(charFreq(s, 'e'));
        System.out.println(allCharFreq(s));
        System.out.println(remSpaces(s));
        System.out.println(fnonrep(s));
        System.out.println(switchCase(s));
        System.out.println(removeDup(s));
        System.out.println(findLargestWord(s));
    }   
}   
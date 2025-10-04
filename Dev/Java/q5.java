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
        String res=""; int length =0;
        String arr[] = s.split(" ");
        for(String x : arr){
            if(x.length()>length){
                res=x;
                length=x.length();
            }
        }    
        return res;
    }

    private static List<String> findAllLargestWords(String s){
        List<String> list = new ArrayList<>(); int length=0;
        String arr[] = s.split(" ");
        for(String x : arr){
           length = Math.max(length,x.length());           
        }
        for(String x : arr){
            if(length == x.length()){
                list.add(x);
            }
        }

        return list;
    }

    private static String findSmallestString(String s){
        int length = Integer.MAX_VALUE;String res="";
        String arr[] = s.split(" ");
        for(String x : arr){
            if(length>x.length()){
                res=x;
                length=x.length();
            }
        }
        return res;
    }

    private static Boolean isAnaGram(String s,String t){
        s=s.toLowerCase();
        t=t.toLowerCase();
         if(s.length() != t.length()) return false;
        Map<Character,Integer> mp = new HashMap<>();
        for(char c : s.toCharArray()){
            mp.put(c, mp.getOrDefault(c, 0)+1);
        }

        for(char c : t.toCharArray()){
            if(mp.containsKey(c)){
                mp.put(c,mp.get(c)-1);

                if(mp.get(c)<=0){
                    mp.remove(c);
                }
            }
        }
        return mp.isEmpty();
    }


    private static String reverseOrderWords(String s){
        //the sky is blue
        String res= "";
        String arr[] = s.split("\\s+");
        for(int i=arr.length-1;i>=0;i--){
            res+=arr[i];
            res+=" ";
        }
        res=res.trim();
        return res;
    }   

    private static List<String>findAllSubStrings(String s){
        List<String> list = new ArrayList<>();
        s=s.replace(" ","");
        for(int i=0;i<s.length();i++){
            list.add(s.substring(i));
        }
        return list;
    }

    private static Boolean checkRotation(String s1,String s2){
        StringBuilder sb = new StringBuilder(s1);
        //sb.reverse();
        return sb.reverse().toString().equals(s2);
    }

   private static Map<String,Integer> allWordFreq(String s){
        Map<String,Integer> mp = new HashMap<>();
        String arr[] = s.split("[,\\s]+");
        for(String x : arr){
            mp.put(x,mp.getOrDefault(x, 0)+1);
        }
        return mp;
   }

   private static Boolean containsOnlyDigits(String s){
        for(int i=0;i<s.length();i++){
            if(!Character.isDigit(s.charAt(i))){
                return false;
                
            }
        }
        return true;
   }






   
   private static void display(){
        String s = "12435435";
        String t = "Listen";
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
        System.out.println(findAllLargestWords(s));
        System.out.println(findSmallestString(s));
        System.out.println(isAnaGram(s, t));
        System.out.println(reverseOrderWords(s));
        System.out.println(findAllSubStrings(s));
        //checkRotation(s, t);
        System.out.println(checkRotation(s,t));
        System.out.println(allWordFreq(s));
        System.out.println(containsOnlyDigits(s));
   }

    public static void main(String[] args) {
        display();
    }   
}   
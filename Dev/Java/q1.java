import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class q1{
    public static void main(String[] args) {
        Scanner sc  = new Scanner(System.in);
        	String s = "abcaba";
			Map<Character,Integer> mp = new HashMap<Character, Integer>();
//			char[] c = s.toCharArray();
			
			for(int i=0;i<s.length();i++) {
				if(!mp.containsKey(s.charAt(i))) {
					mp.put(s.charAt(i), i+1);
				}
			}
			
			String res = "";
			for(int i=0;i<s.length();i++) {
				char ch = s.charAt(i);
				
				for(int x = 0 ;x<mp.get(ch);x++) {
					res+=ch;
				}
                
				if(i == s.length()-1) {
					res+="";
				} else {
					res+="-";
				}
			}
			System.out.println(res);
			sc.close();
		}
}
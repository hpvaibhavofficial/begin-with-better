import java.util.*;
interface ImplementMe{
    //void Stringify(String str);
    void Stringi();
}

public class testing implements ImplementMe {
    //public void Stringify(String str){
        //    System.out.println(str.codePointAt(1));
        //    System.out.println(str.charAt(2));
        //    System.out.println(str.isEmpty());
        //    System.out.println(str.equals("Nishu"));
        //    System.out.println(str.equalsIgnoreCase("Nishu"));
        //    System.out.println(str.contains("i"));
        //    System.out.println(str.compareTo("Nis"));
        //    System.out.println(str.startsWith("i"));
        //    System.out.println(str.endsWith("w"));
        //    System.out.println(str.toUpperCase());
        //    System.out.println(str.toLowerCase());
        //    System.out.println(str.replace("i","vaibhav"));
        //    System.out.println(str.substring(2));
        //    System.out.println(str.substring(2,3));
        //    System.out.println(Arrays.toString(str.split("")));
        //    System.out.println(String.join("-",str,"Harsh"));
        //    System.out.println("");    
        //    System.out.println(String.valueOf(12));       
        //}

        public void Stringi(){
            // int x= 10;
            // String xx = String.valueOf(x);
            // System.out.println(String.valueOf(xx));
            // System.out.println(String.valueOf(true));
            // char arr[] = {'a','v','a'};
            // System.out.println(String.valueOf(arr));
            // int asrr []= {1,2,3,4,5};
            // System.out.println(Arrays.toString(asrr));

            // Object obj = new java.util.Date();
            // Integer objj = 11;
            // System.out.println(objj.toString());

            // System.out.println(String.valueOf(obj));
            // //matches //format //join
            // System.err.println("vaibhav".contains("ibh"));

            String s = "C.Users. usfsh havav";
            String a [] = s.split("\\.\\s?");
            System.out.println(Arrays.toString(a));
        }
        



        public static void main(String[] args) {
            ImplementMe obj = new testing();
            //obj.Stringify("Nishu");    
            obj.Stringi();

        }
        
    }
    
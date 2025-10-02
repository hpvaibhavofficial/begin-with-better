public class q2 {

    public static Integer findTripplets(int arr[]){
        int c=0;
        for(int i=1;i<arr.length-1;i++){
            if(arr[i-1] + arr[i+1] == arr[i]){
                c++;
            }
        }
        return c;
    }
    public static void main(String[] args) {
        int arr [] ={1,2,1,3,5,2,4,2,-2};
        System.out.println(findTripplets(arr));
    }
}

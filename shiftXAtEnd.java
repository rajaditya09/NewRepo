
class shiftXAtEnd{
       
    public static String shiftTheX(String str,int index,String str1,String str2,String result){
       
          result = str1 + str2;
          if(str.charAt(index)=='x'){
          str2 = str2 + str.charAt(index);
          }
          else{
          str1 =str1 + str.charAt(index);
          }
          if(str.length()==result.length()){
            return result;

        }
        shiftTheX(str,index+1,str1,str2,result);
        return "";
    }

 
    // Driver code
   public static void main(String[] args)
   {
    String str= "axbabxbbx";
  //  String arr = str.split('');
    String str1="",str2="",result="";
    String res= shiftTheX(str, 0, str1,str2,result);
    System.out.println(res);
 
 
    }
}
 

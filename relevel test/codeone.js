function admissionEligibility(arr)
{
    //write your logic here. Return the output

 let math = arr[0];
 let phy =arr[1];
 let che =arr[2];
 let mp = math +phy;
 let tot = mp + che;
 console.log(mp,tot);
 if(tot>=195||mp>=140){
	 if(math>=65 && phy>=55 && che>=50){
		 console.log("Eligible");
         return "Eligible";
	 }
     else {
        console.log("Not eligible");
        return "Not eligible";
     }
 }
 else{
	 console.log("Not eligible");
     return "Not eligible";
 }
}
admissionEligibility([65,71,50]);
admissionEligibility([70,75,52]);
admissionEligibility([55,80,90]);
admissionEligibility([70,71,50]);
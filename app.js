const getColor=()=>{
    /*16777215 is used for create hexa decimal random number 
    Math.floor-->is used for find integer .
    */
 const randomNumber=Math.floor(Math.random()*16777215);
 /*toString(16) is used for connvert the random number into hexadecimal code 
 becouse color code always written in hexadecimal format.
 */ 
 const randomCode= "#"+randomNumber.toString(16);
 console.log(randomNumber, randomCode);
 document.body.style.backgroundColor=randomCode;
 document.getElementById("color-code").innerText=randomCode;
 navigator.clipboard.writeText(randomCode);
}
document.getElementById("btn").addEventListener(
   "click",
   getColor
   

   );
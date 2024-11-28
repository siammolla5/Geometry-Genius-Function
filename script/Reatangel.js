function Reatangelcalculation(){
 const lenghtHight=document.getElementById("lenght-input")
 const lenghtHightvalue=lenghtHight.value;
 const hight=parseFloat(lenghtHightvalue)
 console.log(hight)


 /////2nd step///////
 const textwidth=document.getElementById("width-input")
 const value=textwidth.value;
 const width=parseFloat(value)
 console.log(width)

 ///3rd step/////

 const calculataion=width*hight
 console.log(calculataion)
 
 ////4th step////

 const area=document.getElementById("calculateInfo")
 area.innerText=calculataion;

}
function traiangel(){
 const traiangelBese=document.getElementById("trainangel-bese")
 const traiangelText=traiangelBese.value;
 const bese=parseFloat(traiangelText)
 console.log( bese)

 ////2nd input/////
 const traiangelHight=document.getElementById("trainangel-hight" )
 const traiangelvalue=traiangelHight.value;
 const hight=parseFloat(traiangelvalue)
 console.log( hight)

 //// 3step////////

 const calculataion=0.5*bese*hight
 console.log(calculataion)

 ///4th step//////////
 const traiangelArea=document.getElementById("calculate-info")
 traiangelArea.innerText=calculataion;
}
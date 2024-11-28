function peallelogram(){
  const inputbese=document.getElementById("base" )
  const value=inputbese.value;
  const bese=parseFloat(value)
  console.log( bese)

  ////2nd step////
  const inputHight=document.getElementById("hight")
  const hightvalue=inputHight.value;
  const hight=parseFloat(hightvalue)
  console.log( hight)

  ///// 3rd step//////
  const calculate=bese*hight
  console.log(calculate)

  const area=document.getElementById("peallelogram")
  area.innerText=calculate;

}
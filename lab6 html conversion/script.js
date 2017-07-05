function changeFunc() {
  // debugger;
 var tempEntered = document.getElementById('Temperature').value;
 var enterTemp = tempEntered;
 var selectBox = document.getElementById("selectBox");
 if (selectBox.options[selectBox.selectedIndex].value === "1") {
   var fToC = (((enterTemp) - 32)/1.8);
   fToC = fToC.toFixed(2);
   document.getElementById('tempConversion').innerHTML = fToC + " &#8451";
 } else {
   var cToF = (((enterTemp)*1.8) + 32);
   cToF = cToF.toFixed(2);
   document.getElementById('tempConversion').innerHTML = cToF + " &#8457";
 }
}
changeFunc();

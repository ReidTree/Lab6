function convertTemp(temp, tempId){
    var n;
    if (tempId === "c" || "C") {
        calcTemp = ((temp - 32)/1.8);
        n = calcTemp.toFixed(2);
        console.log("Celsius entered: " + temp + " C = " + n + " F");
    } else if (tempId === "f" || "F") {
        calcTemp = ((temp*1.8)+32);
        n = calcTemp.toFixed(2);
        console.log("Fahrenheit entered: " + temp + " F = " + n + " C");
    } else {
      console.log("you miss entered");
    }
}
  convertTemp(212, "C"); // > 100
  convertTemp(65, "C"); // > 18.333
  convertTemp(0, "F");  // > 32
  convertTemp(100, "F"); // > 212

// var nameEntry = prompt("Please enter temperature, than space and either: 'C' for Celsius or 'F' for Fahrenheit. ( Example: '3 F' )");
//
// function switchName(){
//     var splitName = nameEntry.split(" ");
//     var surname = splitName[splitName.length-1];
//     var firstnames = "";
//     var temp = firstnames;
//     var tempId = surname.toLowerCase();
//     for (var i=0; i < splitName.length-1; i++){
//       temp += splitName[i] + " ";
//     }
//     if (tempId === "c") {
//         calcTemp = ((temp - 32)/1.8);
//         var n = calcTemp.toFixed(2);
//         console.log("Celsius entered: " + temp + "C = " + n + " F");
//     } else if (tempId === "f") {
//         calcTemp = ((temp*1.8)+32);
//         var n = calcTemp.toFixed(2);
//         console.log("Fahrenheit entered: " + temp + "F = " + n + " C");
//     } else {
//       console.log("you miss entered");
//     }
// }
// switchName();

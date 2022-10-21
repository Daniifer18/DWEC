var arr1 = ["javaScript","javaScript"];
var arr2 = ["java","JavaScript"];
var arr3 = ["javaScript","java"];

document.write(`<h3>La palabra "${arr1[0]}" ${arr1[1].includes(arr1[0]) ? 'esta' : 'no esta'} en la oracion</h3>`);
document.write(`<h3>La palabra "${arr2[0]}" ${arr2[1].includes(arr2[0]) ? 'esta' : 'no esta'} en la oracion</h3>`);
document.write(`<h3>La palabra "${arr3[0]}" ${arr3[1].includes(arr3[0]) ? 'esta' : 'no esta'} en la oracion</h3>`);
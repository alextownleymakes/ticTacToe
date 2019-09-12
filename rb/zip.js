Split zip into Array
Check array length
Check each 

let ourZip = "36830";
let invalid = "Your zip is invalid";
let valid = "Your zip is valid";

function checkZip(string) {
    zipArray = string.split("");
    zipLength = zipArray.length;
    for (i=0;i < zipLength;i++) {
        let zipArrayItem = Number(zipArray[i]);
        console.log(zipArrayItem);
        if (typeof zipArrayItem !== 'number') {
            console.log(invalid + "first");
            i = zipArray.length;
        } else {
            console.log(valid);
        }
    }
    if (zipArray.length == 5) {
        console.log("it is");
        
    } else {
        console.log("it isnt");
        console.log(invalid + "second");
    }
}

checkZip(ourZip);



var1 = "12345";
var2 = Number(var1);
console.log(var2);
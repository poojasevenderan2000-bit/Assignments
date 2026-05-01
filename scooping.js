var genderType = "female";

function printGender() {

    
    let color = "brown";
    console.log("Outside block, color =", color);

  
    if (genderType.startsWith("female")) {

      
        var age = 30;

        let color = "pink";

        console.log("Inside if-block, color =", color); 
    }

    
    console.log("Outside block, age =", age);


}


printGender();
console.log("Global genderType =", genderType);

genderType = "male";


console.log("After changing genderType:", genderType);



printGender();
console.log("Global genderType =", genderType);
const browserName = "Chrome";

function getBrowserName() {
    
    if (browserName === "Chrome") {
        
        var browserName = "Firefox";
        console.log("Inside function:", browserName);
    }

    //let browserName = "Firefox";

   // console.log("Inside block (let):", browserName);

   console.log("outside function:", browserName);

}


getBrowserName();

console.log("Global:", browserName);
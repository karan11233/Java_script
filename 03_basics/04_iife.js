//IIFE :- Immediately Invoke Function Expression  


(function samosa(){
    // Named IIFE
    console.log("DB CONNECTED");
})();   // ; is important to add in the end to close the code
                //otherwise next code will give you error

( (name) => {
    // Unnamed IFFE
    console.log(`DB CONNECTED ${name}`); 
})("KARAN");



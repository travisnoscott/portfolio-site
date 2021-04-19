 /* Whats your name button */
  function getName(){
    let name = prompt("What's your name?"); //simple greeting, retrieves name
    alert("Nice to meet you, " + name); // returns name
  }

  let firstname = "Travis";
  console.log(firstname);

/* Assignment button 1, find larger number button*/
function largernumber(){
  let num1 = parseInt(prompt("Enter your first number: "));
  let num2 =  parseInt(prompt("Enter your second number: "));
  let output = ""
  if (num1 > num2){ //if first number is larger than second, output first
    output = num1;
  } else if (num1 == num2){ // otherwise, if they are equal, output this
    output = "The numbers you entered are equal!";
  } else if (num2 > num1){ // if num 2 is larger, output this
    output = num2;
  } else { // if there arent sufficient numbers for the function to work
    output = "Invalid Output";
  }
  document.getElementById("largerNum").innerHTML = output;
}

 /*Button 2, Sign of product for 3 numbers button*/
function signOfProduct(){
  let a = parseInt(prompt("Enter the first number"));
  let b = parseInt(prompt("Enter the second number"));
  let c = parseInt(prompt("Place the third number"));
  let totalProduct = a * b * c; //defines total product as the variables multiplied by eachother
  if (totalProduct < 0 ){ //if the product is less than 0 (negative) 
      output = "The sign of the product of your entered numbers is, -";  
  }
  if (totalProduct > 0 ){ //if the product is more than 0 (positive)
      output = "The sign of the product of your entered numbers is, +";  
    }
  document.getElementById("ProductSign").innerHTML = output;
}

  /*Button 3, three number sort least to greatest*/
function threeNumberSort(){
  let num1 = parseInt(prompt("Enter the first number"));
  let num2 = parseInt(prompt("Enter the second number"));
  let num3 = parseInt(prompt("Enter the third number"));
  let array = [num1, num2, num3]; // creates a "list" containing all variables that were inputted
  array.sort(function(a, b){return a - b}); //sort function for array which shows least to greatest
    {
      output = "These numbers ordered from least to greatest is, " + array;
    }
  document.getElementById("leastToGreatest").innerHTML = output;
}

  /*Button 4, forSum of multiples of 3 under 1000*/
function forSumThrees() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) { //sums multiples of 3 under 1000 using a forloop 
      ! (i % 3) && (sum += i)
  }
      output = "The forSum of multiples  of 3 under 1000 is " + sum 
      document.getElementById("forSumOfThrees").innerHTML = output;
}

  /*Button 5, whileSum of multiples of 3 under 1000*/
function whileSumThrees(){
  let sum = 0;
  let i = 0;
    while (i < 1000) {
                               //sums the multiples of 3 under 1000 using a whileloop
      sum += i;
      i = i + 3;
}
     output = "The whileSum of multiples  of 3 under 1000 is " + sum
     document.getElementById("whileSumOfThrees").innerHTML = output;
}
   
 /*Button 6, find missing third angle in a triangle*/
function thirdAngle() {
  output = "Put in the two angles of a triangle and the machine will find the missing third angle." ;
  let a = parseInt(prompt("Enter an angle of a triangle"));
  let b = parseInt(prompt("Enter another angle of a triangle "));
  let totalSum = 0;

  if ((a + b) < 180){ //if the angles entered are valid (do not exceed 180 degrees)
    totalSum = 180 - (a + b); //the angle is (total angle of a triangle), subtract the sum of the angles inputted
    output = "The angle that is missing is " + totalSum ;
  }

  else if ((a + b) > 180){
    output = "Invalid. Enter two angles of a triangle.";    
  }
  document.getElementById("missingAngle").innerHTML = output;
}
/*Button 7, what century is this?*/
function centuryFromYear() { //finds century from year input using ceil function
  let userYear = prompt ('Enter a year to know what century it is from', '2021');
  let century = 0;

  century = Math.ceil(userYear/100); { //ceil finds smallest integer greater than given value. this works since centuries are in 100 year ranges

    }
  output = "The year you entered is in the century of " + century ;
  document.getElementById("centuryYear").innerHTML = output;  
  }
  
  /*Button 8, list multiples of ten and four from 1-100*/
  function tenFour() {
    let sum = 0;
    let multipleOf4or10 = 0;
     for(i = 1; i<101; i = i +1){
         if(i % 4 === 0 && i % 10 === 0){
            multipleOf4or10 += (' TenFour! ');
         }
         else if(i % 4 === 0){
            multipleOf4or10 += (' Four! ');
         }
         else if(i % 10 === 0){
            multipleOf4or10 += ('Ten!');
         }
         else(multipleOf4or10 += ' ' + i + ' ');
     }
    alert (multipleOf4or10);
}
  /*Button 9, encrypt a message*/
  function encrypt() {
    let plaintext = prompt ("Enter your plain message:"); // Recieves the plain message
    let ciphertext = "";
    plaintext = plaintext.split(" "); // splitting words in the string
    for(let i = 0; i < plaintext.length; i = i + 1) {  // loop to make changes in the text
        firstletter = ((plaintext[i][0]).replace("", "78")).toUpperCase(); // Uppercases the first letter in word and puts a 78 behind them
        lastletter = (((plaintext[i]).slice(-1)).replace("", "q")); //Adds a "q" infront of  last letter of word it
        ciphertext += "hi" + (plaintext[i]).slice(1, -1) + firstletter + lastletter + "ya " ; //adds a "tu" to the word while adding the modified first and last letters
    }
    document.getElementById("encrypted").innerHTML = ciphertext;  
    alert("Copy this encrypted message and paste on decrypt button! " + ciphertext) 
}

/*Button 10, decrpyt a message*/
function decrypt() { 
  let ciphertext = prompt ("Enter your encrypted message:"); //Recieves the encrypted message
  let plaintext = ""; 
  ciphertext = ciphertext.split(" "); // splitting words in the string  
  for(let i = 0; i < ciphertext.length; i = i + 1) { // loop to make changes in text 
      firstletter = ((ciphertext[i]).slice(-5, -4)).toLowerCase(); // Extracts the first letter in the plain message with slice and makes it lowercase 
      lastletter = ((ciphertext[i]).slice(-3, -2)); //  Extracts the last letter in the plain message with slice
      plaintext += firstletter + (ciphertext[i]).slice(2,-7) + lastletter + " "; 
  }
  document.getElementById("decrypted").innerHTML = plaintext; 
  
  
}
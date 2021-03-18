 /* Whats your name button */
  function getName(){
    let name = prompt("What's your name?");
    alert("Nice to meet you, " + name);
  }

  let firstname = "Travis";
  console.log(firstname);

/* Assignment button 1, find larger number button*/
function largernumber(){
  let num1 = parseInt(prompt("Enter the first number: "));
  let num2 =  parseInt(prompt("Enter the second number: "));
  let output = ""
  if (num1 > num2){
  output = num1;
  } else if (num1 == num2){
  output = "The numbers entered are equal";
  } else if (num2 > num1){
  output = num2;
  } else {
  output = "Invalid Output";
  }
  document.getElementById("largerNum").innerHTML = output;
}

 /*Button 2, Sign of product for 3 numbers button*/
function signOfProduct(){
  var a = parseInt(prompt("Place a number"));
  var b = parseInt(prompt("Place a number"));
  var c = parseInt(prompt("Place a number"));
  var totalProduct = a * b * c;
  if (totalProduct < 0 ){
    alert("The sign of the product is -")  
  }
  if (totalProduct > 0 ){
      alert("The sign of the product is +")  
    }
}

  /*Button 3, three number sort least to greatest*/
function threeNumberSort(){
  var a = parseInt(prompt("Place a number"));
  var b = parseInt(prompt("Place a number"));
  var c = parseInt(prompt("Place a number"));
  let array = [a, b, c];
  array.sort(function(a, b, c){return a - b});
  alert ("the order from greatest to least is " + array);
    
}
  /*Button 4, forSum of multiples of 3 under 1000*/
function forSumThrees() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    
      ! (i % 3) && (sum += i)
        
  }
  console.log(sum); /*logs result to console*/
}

  /*Button 5, whileSum of multiples of 3 under 1000*/
function whileSumThrees(){
  let sum = 0;
  let i = 0;
    while (i < 1000) {
                               /*sums the multiples of 3 under 1000*/
      sum += i;
      i = i + 3;
}
     console.log(sum) /*log the result to the console*/
 }
   
 /*Button 6, find missing third angle in a triangle*/
function thirdAngle() {
  alert ("Put in the two angles of a triangle and the machine will find the missing third angle." );
  var a = parseInt(prompt("Enter an angle of a triangle"));
  var b = parseInt(prompt("Enter another angle of a triangle "));
  var totalSum = 0;

  if ((a + b) < 180){
  totalSum = 180 - (a + b); 
  alert ("The angle that is missing is " + totalSum );
  }

  else if ((a + b) > 180){
  alert ("Invalid. Enter two angles of a triangle.");    
  }

}
/*Button 7, what century is this?*/
function centuryFromYear() {
  let userYear = prompt ('Want to know what century any year is in? Enter a year!', '2021');
  let century = 0;

  century = Math.floor(userYear/100+1);
      if (toString(century)[-1] == 1) /*&& toString(century)[-1] !=11)*/{ 
         century = toString(century) + 'st'
      }
  return alert ('The year you entered is in the century of ' + century);
  
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
    let plaintext = prompt ("Enter your plain message:"); // Prompts viewer to put in their own message
    let ciphertext = ""; //Creates the ciphertext variable
    plaintext = plaintext.split(" "); //This splits each word in the string 
    for(let i = 0; i < plaintext.length; i = i + 1) {  //For loop to make changes to plain message
        firstletter = ((plaintext[i][0]).replace("", "42")).toUpperCase(); //This takes the first letter of each word in the string, makes it uppercase and adds a 323 behind it
        lastletter = (((plaintext[i]).slice(-1)).toUpperCase()).replace("", "q"); //This takes the last letter of each word in the string, makes it uppercase and adds a Q behind it.
        ciphertext += "xz" + (plaintext[i]).slice(1, -1) + firstletter + lastletter + "ow" ; //This adds an owp2 to the front and end of each word. 
    }
    document.getElementById("encrypted").innerHTML = ciphertext;  
    alert("Copy this encrypted message and paste on decrypt button! " + ciphertext); //Alert to copy the encrypted message
}

/*Button 10, decrpyt a message*/
function decrypt() { 
  let ciphertext = prompt ("Enter your encrypted message:"); // Prompts user to enter an encrypted message
  let plaintext = ""; //Creates the plain text variable
  ciphertext = ciphertext.split(" "); //This splits each word in the string 
  for(let i = 0; i < ciphertext.length; i = i + 1) { //Loop to make changes to encypted message
      firstletter = ((ciphertext[i]).slice(-5, -4)).toLowerCase(); //This takes the first letter of each plain message by extracting it with slice method and making it lowercase
      lastletter = ((ciphertext[i]).slice(-3, -2)).toLowerCase(); //This takes the last letter of each plain message by extracting it with slice method and making it lowercase
      plaintext += firstletter + (ciphertext[i]).slice(2,-7) + lastletter + " "; //This makes the plain message by adding the modified firstletter var. Then this takes the encrypted text and slices out the plain parts of the plain message. Lastly it adds the modified lastletter var to decrypt the message.
  }
  document.getElementById("decrypted").innerHTML = plaintext; // This displays the decryped message (plain message) on the button
}
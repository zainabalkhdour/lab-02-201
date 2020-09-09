'use strict'
var numberofcorrectanswoer= 0;

var userInput = prompt("what is your name?")
alert("welcome"+userInput)

  "yes"== true;
  "y"== true ;
      "no"==false;
     "n"== false

var q1 = prompt("Do I like to do sports?(yes/no)")
if (q1.toLocaleLowerCase()=="yes")
{
    numberofcorrectanswoer++;
        alert("right answer")
        console.log("right")
}
else 
{

    alert("wrong answer")
    console.log("Wrong")

}

var q2 = prompt("My favorit food is mansaf")
if(q2.toLocaleLowerCase()=="yes")
{
    numberofcorrectanswoer++;
    alert("right answer")
    console.log("right")

}
else
{
    alert("wrong answer")
    console.log("wrong")

}

var q3 = prompt("Am I a bad singer?")
if(q3.toLocaleLowerCase()=="yes")
{
    
    alert("wrong answer")
    console.log("wrong")

}
else{

    numberofcorrectanswoer++;
    alert("right answer")
    console.log("right")

}


var q4 = prompt("Do I hate winter")
if (q4.toLocaleLowerCase()=="yes")
{
        alert("wrong answer")
        console.log("wrong")
}
else 
{
    numberofcorrectanswoer++;
    alert("right answer")
    console.log("right")

}

var q5 = prompt("Am I a good coocker?")
if (q5.toLocaleLowerCase()=="yes")
{
    numberofcorrectanswoer++;
        alert("right answer")
        console.log("right")
}
else 
{

    alert("wrong answer")
    console.log("wrong")

}



var numberOftrial= 0; 
while(numberOftrial <4){
    var q6 = parseInt(prompt("My age is :"));
    if(q6==23){
        alert("your answer is true ");
        numberofcorrectanswoer++;
        break;
    }
     else if(q6<23){
        alert("your answer is too low ");
        numberOftrial++;
     }
     else if(q6>23){
        alert("your answer is too high  ");
        numberOftrial++;
     }
     if(numberOftrial ==3){
        alert(" OUT OF CHANCES "); 
        break;
   
     }
    
}



var hoppies = ["singing","reading","dancing","coocking","kickboxing"];

var numberoftrail=0;
while( numberoftrail < 6) {
    debugger;
   var q7 = prompt("Guess type one of my hoppies ").toLowerCase();
   var result= true;
   for(var j = 0 ;j<hoppies.length ;j++){
      
    if(q7==hoppies[j]){
        result= true;
     break;
    }else{
        result=false;
    }
   }

 if(result==true){
    alert("you are totaly right "+q7+"is one of my hoppies ");
    numberofcorrectanswoer++;
    break;

 }
   if(result===false){
    alert(q7+"is not one of my hoppies ");
   }
  

   if(numberoftrail ==5){
    alert("OUT OF CHANCES ");

    }
numberoftrail++;

}

alert("the possible correct answers are["+"singing"+","+"reading"+","+"dancing"+","+"coocking"+","+"kickboxing"+"]")
alert("Your result is "+numberofcorrectanswoer++ +"/7")
 


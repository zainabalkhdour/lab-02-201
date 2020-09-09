'use strict'
var counter= 0;

var userInput = prompt("what is your name?")
alert("welcome"+userInput)


function sports() {
    var q1 = prompt("Do I like to do sports?(yes/no)")
if (q1.toLocaleLowerCase()=="yes")
{
    counter++;
        alert("right answer")
        console.log("right")
}
else 
{

    alert("wrong answer")
    console.log("Wrong")

}

}
sports();

//------------------------------------------------------------------------------------------

function food() {
    var q2 = prompt("My favorit food is mansaf")
if(q2.toLocaleLowerCase()=="yes")
{
    counter++;
    alert("right answer")
    console.log("right")

}
else
{
    alert("wrong answer")
    console.log("wrong")

}
}
food();
//------------------------------------------------------------------------------------------

function singer() {
    
    var q3 = prompt("Am I a bad singer?")
    if(q3.toLocaleLowerCase()=="yes")
    {
        
        alert("wrong answer")
        console.log("wrong")
    
    }
    else{
    
        counter++;
        alert("right answer")
        console.log("right")
    
    }
}
 singer();

 //------------------------------------------------------------------------------------------

function winter() {
    var q4 = prompt("Do I hate winter")
if (q4.toLocaleLowerCase()=="yes")
{
        alert("wrong answer")
        console.log("wrong")
}
else 
{
    counter++;
    alert("right answer")
    console.log("right")

}
}
winter();

//------------------------------------------------------------------------------------------


function cooker(params) {
    var q5 = prompt("Am I a good cooker?")
if (q5.toLocaleLowerCase()=="yes")
{
    counter++;
        alert("right answer")
        console.log("right")
}
else 
{

    alert("wrong answer")
    console.log("wrong")

}
}
cooker();
//------------------------------------------------------------------------------------------

function age() {
    var numberOftrial= 0; 
    while(numberOftrial <4){
        var q6 = parseInt(prompt("My age is :"));
        if(q6==23){
            alert("your answer is true ");
            counter++;
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
    
}

age();

//------------------------------------------------------------------------------------------


function hobbies() {
    
    
    var hobbies = ["singing","reading","dancing","coocking","kickboxing"];
    
    var numberoftrail=0;
    while( numberoftrail < 6) {
        debugger;
       var q7 = prompt("Guess one of my hobbies ").toLowerCase();
       var result= true;
       for(var j = 0 ;j<hobbies.length ;j++){
          
        if(q7==hobbies[j]){
            result= true;
         break;
        }else{
            result=false;
        }
       }
    
     if(result==true){
        alert("you are totaly right "+q7+"is one of my hobbies ");
        counter++;
        break;
    
     }
       if(result===false){
        alert(q7+"is not one of my hobbies ");
       }
      
    
       if(numberoftrail ==5){
        alert("OUT OF CHANCES ");
    
        }
    numberoftrail++;
    
    }
}
hobbies();

//------------------------------------------------------------------------------------------

alert("the possible correct answers are["+"singing"+","+"reading"+","+"dancing"+","+"coocking"+","+"kickboxing"+"]")
alert("Your result is "+counter++ +"/7")
 


// computer picks the random number first.
// we want 1~100
let randomNum = Math.floor(Math.random()*100)+1
    console.log("this is what ur computer choose", randomNum);
let guessesCount = 5;
let history = []
let resetButton;




// when user click Go button, fire the function "Guess"
// "Guess" function grab the value that user typed
// Compare with the value computer picked with user value
// if computer's number > user's number --> "too low"
// if computer's number < user's number --> "too high"
// if computer's number = user's number --> "correct"
// show result to user

function guess(){

    let userNum = document.getElementById("guessNumber").value
    let resultMessage = '' //save message result
    
    //guessesTries = guessesTries.splice(0,1)
 
    if(randomNum > userNum){
        resultMessage = "Too Low"
    } else if(randomNum < userNum){
        resultMessage = "Too High"
    } else if(randomNum == userNum){
        resultMessage = "Correct!"
        timeOut();
    }
    guessesCount--;
    history.push(userNum) 
    document.getElementById("resultArea").innerHTML = `${resultMessage}`
    document.getElementById("historyArea").innerHTML = `Your history guesses were: ${history}`
   

    if (guessesCount <= 0){
        resultMessage = "Game Over. Take a shot! ";
        document.getElementById("resultArea").innerHTML = `${resultMessage}`
        document.getElementById("click").disabled = true;
        timeOut();
        return;  
    }
    document.getElementById("guessesTries").innerHTML = `${guessesCount}`;
    
}
function reset(){
    history = []
    guessesCount = 5;
    document.getElementById("guessNumber").value = ''
    document.getElementById("historyArea").innerHTML = 'Your guesses will show here'
    randomNum = Math.floor(Math.random()*100)+1
    document.getElementById("click").disabled = false;
    document.getElementById("resultArea").innerHTML  = `Show Result`
    document.getElementById("guessesTries").innerHTML = `${guessesCount}`
    button = 0;
    time = 21;
}

 
 let time = 21
 let myTime; 
 function timecounting() {
     myTime = setInterval (() => {
        if (time === 0){
         document.getElementById('timecount').innerHTML = + `Time is Up!`
         document.getElementById("click").disabled = true;
         return;
        }
         time -= 1
         document.getElementById('timecount').innerHTML = time + ' seconds'
      }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
 }
 timecounting()

 function timeOut() {
    clearInterval(myTime);

 }




// history.push(userNum) //add user Num to history array

//  if(randomNum > userNum){
//      resultMessage = "too low"
//  } else if(randomNum < userNum){
//      resultMessage = "too high"
//  } else if(randomNum == userNum){
//      resultMessage = "correct"
//  }


// document.getElementById("resultArea").innerHTML = `${resultMessage}`
// document.getElementById("historyArea").innerHTML = `History: ${history}`


 // make the chacnce features (only can have 5 chances)
 // reset button 
 // if user win or lose, the guess button will be disabled
 // add timer feature ://
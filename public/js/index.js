let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);
function check(){
    let input = document.getElementById('guessedNumber').value;
    let message = document.getElementById('message');
    
    if(input == randomNumber){
        document.body.style.background= "none";
        document.body.style.backgroundColor= "green";
        message.innerHTML = `<p style = 'color: green;'>Hey You Have Guessed It Right!</p>`;
        randomNumber = Math.floor(Math.random() * 101);
       console.log(randomNumber);
        // hide()
        
    }else if(input > randomNumber){
        document.body.style.background= "none";
        document.body.style.backgroundColor= "red";
        message.innerHTML = `<p style = 'color: red;'>Number is too high.</p>`;
      
        // hide()
        
    }else if(input < randomNumber){
        message.innerHTML = `<p style = 'color: red;'>Number is too low.</p>`;
        document.body.style.background= "none";
        document.body.style.backgroundColor= "red"; 
    }else{
        message.innerHTML = `<p style = 'color: red;'>Please add something</p>`;
        document.body.style.background= "url('../Medi/1.jpg')";
        // hide()
    }
// function hide(){
//     setInterval(function(){
//         message.innerHTML = ""
//     }, 10000)
// }
}
let button = document.getElementById('changeColor');

const num= Math.floor(Math.random()*100)+1;
let guessCount=0 ;

const body=document.querySelector("body")
const userInput=document.querySelector('input')
const btn=document.querySelector("#submit")
const divEl=document.createElement("div")
const h2El=document.createElement("h2");

body.append(divEl)
divEl.append(h2El)

h2El.textContent="Ready . . ? Start Guessing"
btn.addEventListener("click",check)

function check(){
   
    const user=parseInt(userInput.value)
    guessCount++;

        if(user > num){
            h2El.textContent="Your Number is greater than the Original Number" 
           
        }else if(user < num){
            h2El.textContent="Your Number is lesser than the Original Number"
           
        }else{
            if(userInput.value==""){
                h2El.textContent="bhai kuchh to input de !"
            }else{
                h2El.textContent="Great ! Your score is : "+ (100-guessCount)+"/100" ;
                
            btn.disabled=true;
            console.log(h2El.textContent)
          return h2El.textContent 
            }
            
        }
        userInput.value="";
        userInput.focus();
}
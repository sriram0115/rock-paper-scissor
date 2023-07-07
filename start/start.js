const buttons=document.querySelectorAll(".btn")
const scoreel=document.getElementById("score")
const showel=document.getElementById("show")
const resultel=document.getElementById("result")
const clearel=document.getElementById("clear")
let arr=['ROCK','PAPER','SCISSOR']
let totscore={playerscore:0,compscore:0}


function getcompchoice(){
    let randomnumber=Math.floor(Math.random()*3)
    return arr[randomnumber]
    

}
function getresult(mychoice,compchoice){

if(mychoice==compchoice){
   return 0
} else if(mychoice=='ROCK'&&compchoice=='SCISSOR'){
   return 1
} else if(mychoice=='PAPER'&&compchoice=='ROCK'){
    return 1
} else if(mychoice=='SCISSOR'&&compchoice=='PAPER'){
   return 1
} else{
    return  -1
}
}

function showresult(score,mychoice,compchoice){
   if(score==1){
    resultel.innerText="YOOH, YOU WON!"
   } else if(score== -1){
    resultel.innerText="OOPS, YOU LOSE!"
   }
   else{
    resultel.innerText="GREAT, IT'S TIE"
   }
  showel.innerText=mychoice +' vs '+ compchoice
  scoreel.innerText=`YOUR SCORE:${totscore.playerscore}`


}
function startgame(){
      buttons.forEach(buttons => {
      buttons.onclick=() =>onclicks(buttons.value)
      } ) 
}
function onclicks(mychoice){
    
    const compchoice=getcompchoice()
    const score=getresult(mychoice,compchoice)
     console.log(score);
    totscore.playerscore+=score
    showresult(score,mychoice,compchoice)
}
function endgame(){
     window.location.reload()
}
startgame()
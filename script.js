let gameDiv= document.querySelectorAll(".gameDiv");
let resetPlay= document.querySelector(".reset");
let msgWinner= document.querySelector(".winnerName");
let newPlay=document.querySelector(".newGame");
let msgContainer=document.querySelector(".winner");
const winPattern= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let turn=true  //true for x|| false for 0 
const checkDraw=()=>{
    let allCheck=[...gameDiv].every(box=>box.innerText!='');
    if (allCheck) {
        msgWinner.innerText='Draw';
        msgContainer.classList.remove('hide');
        disableDiv();

    }
}
const resetGame=()=>{
    turn=true;
    enableDiv();
    msgContainer.classList.add('hide');

}
const disableDiv=()=>{
    gameDiv.forEach((box) => {
        box.classList.add('disable');
     });
}
const enableDiv=()=>{
    gameDiv.forEach((box) => {
        box.classList.remove('disable');
        box.innerText='';
     });
}
const gameTurn=(box)=>{
   if ( box.innerText==='') {
   
    if (turn) {
        box.innerText="X";
        turn=false;
    
    }else{
       box.innerText='O';
        turn=true;
       
    }
    checkWinner();
    checkDraw();
}

}
const checkWinner=()=>{
   for(let pattern of winPattern){
    let pos1= gameDiv[pattern[0]].innerText;
    let pos2= gameDiv[pattern[1]].innerText;
    let pos3= gameDiv[pattern[2]].innerText;

  
    if (pos1!=''&&pos2!=''&&pos3!='') {
        if (pos1==pos2&&pos2==pos3) {
            msgWinner.innerText="Winner is "+pos1;
           msgContainer.classList.remove('hide');
          disableDiv();
        }
       }
   }
   
}
gameDiv.forEach((box)=>{
    box.addEventListener("click",()=>gameTurn(box));
});
resetPlay.addEventListener('click',resetGame);
newPlay.addEventListener('click',resetGame);
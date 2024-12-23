let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
const userscorePara=document.querySelector("#userscore");
const compscorePara=document.querySelector("#compscore");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const CompChoice=Math.floor(Math.random()*3);
    return options[CompChoice];

};
const drawGame=()=>{
    msg.innerText="Game was draw!";
    msg.style.backgroundColor="black";
};
 
let msg=document.querySelector("#message");

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText=`You Win :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorePara.innerText=compscore;
        console.log("You lose:(");
        msg.innerText=`You lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }
        else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice); 
    });
});

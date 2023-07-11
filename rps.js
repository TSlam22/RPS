

document.getElementById("startgame").innerHTML="Start Game";
document.getElementById("player_submit").value="Play Now";
document.getElementById("play_again").innerHTML="Play Again";


document.getElementById("input_name").style.display= "none";
document.getElementById("player_choice").style.display= "none";
document.getElementById("end_game").style.display= "none";

let player = 0
let computer = 0
// ------------- Game Start Function ------------

function gameStart(choice){
   
    if(choice == "start"){

        document.getElementById("game_header").style.display="none";
        document.getElementById("input_name").style.display= "";

    }
              
    }

// ------------ Player name submit Function ------------

function playerInfo(){
    document.getElementById("player_info").innerHTML = document.getElementById("playername").value + " Make a Choice";
}
document.getElementById("player_submit").addEventListener("click", a=> playerInfo());


function playNow(name){
   
    if(name == "start"){
        document.getElementById("input_name").style.display= "none";
        document.getElementById("player_choice").style.display= "";
        
        
    }
}


// ----------------  Player Choice Funtion --------------


function playerChoice(choice){

    

    let userChoicePaper = 5
    let userChoiceRock = 5
    let userChoiceScissors = 5

    let computerChoice = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

  
        if((choice == "paper") && computerChoice < userChoicePaper){
            document.getElementById("player_info").innerHTML = "Hurray, " + document.getElementById("playername").value + " You Won!";
            document.getElementById("endmsg").innerHTML="The computer has chosen Rock";
            document.getElementById("paper").style.border = "thick dashed green";
            document.getElementById("rock").style.border = "thick dashed red";
            document.getElementById("paper").style.transform = "rotate(90deg)";
            document.getElementById("rock").style.transform = "rotate(266deg)";
            document.getElementById("paper").style.animation="none";
            document.getElementById("rock").style.animation="none";
            document.getElementById("rock").style.opacity = "0.5";  
            document.getElementById("scissors").style.display="none"
            document.getElementById("end_game").style.display= "";   

            document.getElementById("paper").onclick="null";
            document.getElementById("rock").onclick="null";
            
            
        }
   

        else if((choice == "paper") && computerChoice > userChoicePaper){

            document.getElementById("player_info").innerHTML ="Unlucky " + document.getElementById("playername").value + ", You Lose!" ;
            document.getElementById("endmsg").innerHTML="The computer has chosen Scissors !";
            document.getElementById("rock").style.display="none"
            document.getElementById("paper").style.border = "thick dashed red";
            document.getElementById("scissors").style.border = "thick dashed green";
            document.getElementById("paper").style.transform = "rotate(90deg)";
            document.getElementById("scissors").style.transform = "rotate(266deg)";
            document.getElementById("paper").style.animation="none";
            document.getElementById("scissors").style.animation="none";
            document.getElementById("paper").style.opacity = "0.5"; 
            document.getElementById("end_game").style.display= "";   

            document.getElementById("paper").onclick="null";
            document.getElementById("scissors").onclick="null";

        }


        else if((choice == "paper") && computerChoice == userChoicePaper) {

            document.getElementById("endmsg").innerHTML=" This is a Tie";

        }
       
        
    

// ------------ Rock Choice -------------

        //  ---- User winner

        if((choice == "rock") && computerChoice < userChoiceRock){
            document.getElementById("player_info").innerHTML = "Hurray' " + document.getElementById("playername").value + " You Won!" ;
            document.getElementById("endmsg").innerHTML="The computer has chosen scissors";
            document.getElementById("scissors").style.border = "thick dashed Red";
            document.getElementById("rock").style.border = "thick dashed Green";
            document.getElementById("scissors").style.transform = "rotate(266deg)";
            document.getElementById("rock").style.transform = "rotate(90deg)";
            document.getElementById("scissors").style.animation="none";
            document.getElementById("rock").style.animation="none";
            document.getElementById("scissors").style.opacity = "0.5";  
            document.getElementById("paper").style.display="none"
            document.getElementById("end_game").style.display= "";   

            document.getElementById("scissors").onclick="null";
            document.getElementById("rock").onclick="null";

        }

        // ---- User Looser

        else if((choice == "rock") && computerChoice > userChoiceRock){
            document.getElementById("player_info").innerHTML = "Unlucky " + document.getElementById("playername").value + ", You Lose!" ;
            document.getElementById("endmsg").innerHTML="The computer has chosen Paper";
            document.getElementById("paper").style.border = "thick dashed green";
            document.getElementById("rock").style.border = "thick dashed red";
            document.getElementById("paper").style.transform = "rotate(90deg)";
            document.getElementById("rock").style.transform = "rotate(266deg)";
            document.getElementById("paper").style.animation="none";
            document.getElementById("rock").style.animation="none";
            document.getElementById("rock").style.opacity = "0.5";  
            document.getElementById("scissors").style.display="none"
            document.getElementById("end_game").style.display= "";   

            document.getElementById("paper").onclick="null";
            document.getElementById("rock").onclick="null";
        }

        // ---- A Tie

        else if((choice == "rock") && computerChoice == userChoiceRock){
            document.getElementById("endmsg").innerHTML=" This is a Tie";
        }

  
   
//  ---- Scissors Choice Loop ----------


        // ---- User Winner

        if((choice == "scissors") && computerChoice < userChoiceScissors){
            document.getElementById("player_info").innerHTML = "Hurray, " + document.getElementById("playername").value + " You Won!" ;
            document.getElementById("endmsg").innerHTML="The computer has chosen Paper";
            document.getElementById("scissors").style.border = "thick dashed green";
            document.getElementById("paper").style.border = "thick dashed red";
            document.getElementById("scissors").style.transform = "rotate(266deg)";
            document.getElementById("paper").style.transform = "rotate(90deg)";
            document.getElementById("scissors").style.animation="none";
            document.getElementById("paper").style.animation="none";
            document.getElementById("paper").style.opacity = "0.5";  
            document.getElementById("rock").style.display="none"
            document.getElementById("end_game").style.display= "";   

            document.getElementById("scissors").onclick="null";
            document.getElementById("paper").onclick="null";
        }

        // ----- User Looser

        else if((choice == "scissors") && computerChoice > userChoiceScissors){
            document.getElementById("player_info").innerHTML = "Unlucky " + document.getElementById("playername").value + ", You Lose!" ;
            document.getElementById("endmsg").innerHTML="The computer has chosen Rock";
            document.getElementById("scissors").style.border = "thick dashed red";
            document.getElementById("rock").style.border = "thick dashed green";
            document.getElementById("rock").style.transform = "rotate(90deg)";
            document.getElementById("scissors").style.transform = "rotate(266deg)";
            document.getElementById("scissors").style.animation="none";
            document.getElementById("rock").style.animation="none";
            document.getElementById("scissors").style.opacity = "0.5";  
            document.getElementById("paper").style.display="none"
            document.getElementById("end_game").style.display= "";   

            document.getElementById("scissors").onclick="null";
            document.getElementById("rock").onclick="null";
        }
        
        // ---- A Tie
        else if((choice == "scissors") && computerChoice == userChoiceScissors){
            document.getElementById("endmsg").innerHTML=" This is a Tie";
        }           
    
}    






// -------------  End / Start Again  game function --------------


document.getElementById("play_again").addEventListener('click',()=>{ location.reload()})









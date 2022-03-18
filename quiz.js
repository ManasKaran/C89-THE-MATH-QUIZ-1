player1 = localStorage.getItem("Player1");
player2 = localStorage.getItem("Player2");

document.getElementById("player_ques").innerHTML = player1;
document.getElementById("player_ans").innerHTML = player2;

document.getElementById("player_1_label").innerHTML  = player1 + " :";
document.getElementById("player_2_label").innerHTML  = player2 + " :";

function back(){
    window.location.replace("index.html");
}
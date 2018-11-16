var xturn = true;
var times = 0;
var clearboxes = document.getElementsByClassName("boxes");
var topleft = document.getElementById('box1');
var topmiddle = document.getElementById('box2');
var topright = document.getElementById('box3');
var middleleft = document.getElementById('box4');
var middlemiddle = document.getElementById('box5');
var middleright = document.getElementById('box6');
var bottomleft = document.getElementById('box7');
var bottomiddle = document.getElementById('box8');
var bottomright = document.getElementById('box9');

function insertx(box){

  /*this is to turn individual boxes into "x" and "o" and to also change the color of the turn counter*/
  if(box.innerHTML==""){
    if(times<9){
        if(xturn){
          box.innerHTML = "X";
          document.getElementById("turncounter2").style.backgroundColor = "skyblue";
          document.getElementById("turncounter1").style.backgroundColor = "white";
          xturn = false;
          times++;
      }


  else{
    box.innerHTML = "O"
    document.getElementById("turncounter2").style.backgroundColor = "white"
    document.getElementById("turncounter1").style.backgroundColor = "skyblue";
    xturn = true;
    times++;

  }
  }
  }
   winner();
}

/*this is to reset the board after a win, loss or draw*/
function reset(){
  times=0;
  for (var i=0; i<9; i++){
  clearboxes[i].innerHTML = "";

}
  document.getElementById("turncounter1").style.backgroundColor = "white";
  document.getElementById("turncounter2").style.backgroundColor = "white";
  xturn=true;
  document.getElementById("winningpart").innerHTML ="";
}
/*this is to connect each cell in order to show if there's a winner of the game*/
function winner(){

if(topleft.innerHTML=="X" && topmiddle.innerHTML=="X" && topright.innerHTML=="X"){
  document.getElementById("winningpart").innerHTML ="X won";
     times=9;
}else if (middleleft.innerHTML=="X" && middlemiddle.innerHTML=="X" && middleright.innerHTML=="X" ) {
  document.getElementById("winningpart").innerHTML ="X won";
     times=9;
}else if(bottomleft.innerHTML=="X" && bottomiddle.innerHTML=="X" && bottomright.innerHTML=="X"){
  document.getElementById("winningpart").innerHTML ="X won";
     times=9;
}else if(topleft.innerHTML=="X" && middleleft.innerHTML=="X" && bottomleft.innerHTML=="X"){
  document.getElementById("winningpart").innerHTML ="X won";
     times=9;
}else if(topmiddle.innerHTML=="X" && middlemiddle.innerHTML=="X" && bottomiddle.innerHTML=="X"){
  document.getElementById("winningpart").innerHTML ="X won";
     times=9;
}else if(topright.innerHTML=="X" && middleright.innerHTML=="X" && bottomright.innerHTML=="X"){
  document.getElementById("winningpart").innerHTML ="X won";
     times=9;
}else if(topleft.innerHTML=="X" && middlemiddle.innerHTML=="X" && bottomright.innerHTML=="X"){
  document.getElementById("winningpart").innerHTML ="X won";
     times=9;
}else if(topright.innerHTML=="X" && middlemiddle.innerHTML=="X" && bottomleft.innerHTML=="X"){
  document.getElementById("winningpart").innerHTML ="X won";
     times=9;
}else if(topleft.innerHTML=="O" && topmiddle.innerHTML=="O" && topright.innerHTML=="O"){
  document.getElementById("winningpart").innerHTML ="O won";
     times=9;
}else if (middleleft.innerHTML=="O" && middlemiddle.innerHTML=="O" && middleright.innerHTML=="O" ) {
  document.getElementById("winningpart").innerHTML ="O won";
     times=9;
}else if(bottomleft.innerHTML=="O" && bottomiddle.innerHTML=="O" && bottomright.innerHTML=="O"){
  document.getElementById("winningpart").innerHTML ="O won";
     times=9;
}else if(topleft.innerHTML=="O" && middleleft.innerHTML=="O" && bottomleft.innerHTML=="O"){
  document.getElementById("winningpart").innerHTML ="O won";
     times=9;
}else if(topmiddle.innerHTML=="O" && middlemiddle.innerHTML=="O" && bottomiddle.innerHTML=="O"){
  document.getElementById("winningpart").innerHTML ="O won";
     times=9;
}else if(topright.innerHTML=="O" && middleright.innerHTML=="O" && bottomright.innerHTML=="O"){
  document.getElementById("winningpart").innerHTML ="O won";
     times=9;
}else if(topleft.innerHTML=="O" && middlemiddle.innerHTML=="O" && bottomright.innerHTML=="O"){
  document.getElementById("winningpart").innerHTML ="O won";
     times=9;
}else if(topright.innerHTML=="O" && middlemiddle.innerHTML=="O" && bottomleft.innerHTML=="O"){
  document.getElementById("winningpart").innerHTML ="O won";
   times=9;
}else if(times==9){
    document.getElementById("winningpart").innerHTML = "You are both bad!!";
}
}

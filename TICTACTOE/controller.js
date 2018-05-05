var buttonArray ;
window.addEventListener("load",bindEvents)

function bindEvents()
{document.getElementById("start").addEventListener("click",choosePlayer);
}
   
var flag; 
var scoreA=0;
var scoreB=0;
var buttonText;

function choosePlayer()
{
     this.innerHTML="Choose Player(0 or X)";
     document.getElementById("start").removeEventListener("click",choosePlayer);

     document.getElementById("cross").addEventListener("click",playerCross);
     document.getElementById("zero").addEventListener("click",playerZero);
}
    function playerZero()
    {
        document.getElementById("zero").innerHTML="Player A___"+ scoreA;
        document.getElementById("cross").innerHTML="Player B___"+scoreB;
        flag=false;
        document.getElementById("start").innerHTML="Player A Turn";
        document.getElementById("zero").removeEventListener("click",playerZero);
        document.getElementById("cross").removeEventListener("click",playerCross);
       gameBegins();
    }


    
    function playerCross()
    {
        document.getElementById("zero").innerHTML="Player A___"+scoreA;
        document.getElementById("cross").innerHTML="Player B___"+scoreB;
         flag=true;
         document.getElementById("start").innerHTML="Player A Turn";
        document.getElementById("cross").removeEventListener("click",playerCross);
        document.getElementById("zero").removeEventListener("click",playerZero);
         gameBegins();}

   
function gameBegins()
{
       buttonArray = document.getElementsByTagName("button");
      Array.prototype.forEach.call(buttonArray,(button)=>button.addEventListener("click",isZeroOrX));
  
}




function isZeroOrX()
{
    buttonText=this.innerHTML;
   if(!buttonText){
       
   this.innerHTML=flag?"X":"0"; 
   flag=!flag;
   document.querySelector("#start").innerHTML=flag?"Player B turn":"Player A turn";
   resultcheck();
}


   
function resultcheck()
{ 
   var result = (WinorLose.isGameOver(buttonArray));
   if(flag && result==1) {
   document.querySelector("#gameover").innerHTML="Player A wins";
   scoreA++;
   document.getElementById("zero").innerHTML="Player A___"+ scoreA;
   document.querySelector("#start").innerHTML="PLAY AGAIN";
   Array.prototype.forEach.call(buttonArray,(button)=>button.removeEventListener("click",isZeroOrX));
   document.getElementById("start").addEventListener("click",restartGame);

   }
   else if(!flag && result==1){
   document.querySelector("#gameover").innerHTML="Player B wins";
   scoreB++;
   document.getElementById("cross").innerHTML="Player B___"+ scoreB;
   document.querySelector("#start").innerHTML="PLAY AGAIN";
    Array.prototype.forEach.call(buttonArray,(button)=>button.removeEventListener("click",isZeroOrX));
   document.getElementById("start").addEventListener("click",restartGame);

   }
    else if(result==2){
    document.querySelector("#gameover").innerHTML="TIE";
   document.getElementById("zero").innerHTML="Player A___"+ scoreA;
    document.getElementById("cross").innerHTML="Player B___"+ scoreB;
    document.querySelector("#start").innerHTML="PLAY AGAIN";
  Array.prototype.forEach.call(buttonArray,(button)=>button.removeEventListener("click",isZeroOrX));
    document.getElementById("start").addEventListener("click",restartGame);

}

function restartGame(){

    Array.prototype.forEach.call(buttonArray,(button)=>button.innerHTML=null);
    document.getElementById("zero").innerHTML="0";
    document.getElementById("cross").innerHTML="X";
    document.querySelector("#gameover").innerHTML="~~~Tic Tac Toe~~~";
    document.querySelector("#start").innerHTML="Choose Player(0 or X)";
    document.getElementById("start").removeEventListener("click",restartGame);
    
    choosePlayer();

    }

   
}
  
}
















var lastPlayedaNum=0;
var lastGameStatus="";
var speakedBefore=false;

function speak(){
 var gameStatusJson=megaJson.gameStatus;
var gameStatusStr=gameStatusJson.gameStatus;
var lastPlayedNumStr=gameStatusJson.lastPlayedNum;
var lastWinnerStr=gameStatusJson.lastWinner;
var noticeOverlayDiv=document.getElementById("noticeOverlayDiv");


var callSpeechJson=megaJson.callSpeechSettings;
var callPitch=callSpeechJson.callPitch;
var callSpeed=callSpeechJson.callSpeed;

console.log(gameStatusStr);

if(gameStatusStr!=lastGameStatus){
    lastGameStatus=gameStatusStr;
    
    var msg = new SpeechSynthesisUtterance();
    msg.text =gameStatusStr;
    msg.pitch = callPitch;
    msg.rate=callSpeed;
    window.speechSynthesis.speak(msg);
   }

if(lastWinnerStr!=localStorage.getItem("lastWinner")){
  //  alert(lastWinner);
    localStorage.setItem("lastWinner",lastWinnerStr);
    var msg = new SpeechSynthesisUtterance();
    msg.text = lastWinnerStr;
    msg.pitch = callPitch;
    msg.rate=callSpeed;
    window.speechSynthesis.speak(msg);
}

if(lastPlayedNumStr!=lastPlayedaNum && gameStatusStr!="Game Is Over"){
    lastPlayedaNum=lastPlayedNumStr;
    var msg = new SpeechSynthesisUtterance();
    msg.text = lastPlayedNumStr;
    msg.pitch = callPitch;
    msg.rate=callSpeed;
    window.speechSynthesis.speak(msg);
}

  



speakedBefore=true;
noticeOverlayDiv.style.display="none";

    }
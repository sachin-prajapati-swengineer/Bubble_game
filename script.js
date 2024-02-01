var timer = 60;
var score=0;
varhitrn=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function makeBubble() {
  var clutter = "";
  for (i = 1; i < 145; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `
    <div class="bubble">${rn}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerInt=setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timerInt);
        document.querySelector(".pbtm").innerHTML="<h1>Game Over</h1>";
        document.querySelector("#hitval").textContent=`0`;
    }
  }, 1000);
}

document.querySelector(".pbtm").addEventListener("click",function(detail){
    var clickedNum=(Number(detail.target.textContent));
    if(clickedNum===hitrn){
        increaseScore();getNewHit();
        makeBubble();
    }
})
runTimer();
makeBubble();
getNewHit();

function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6e9IOj6DpVz":
        Script1();
        break;
      case "6jNaHV2Rm6J":
        Script2();
        break;
  }
}

function Script1()
{
  //Getting the player
const player = GetPlayer();

//Where to start
let sec = 0;

//Set up the timer
function startTimer(){
  sec += 1;
  player.SetVar("timer",sec);
  if (sec == 30) {
    clearInterval(timerId);
  }
}

//Start the timer
timerId=setInterval(startTimer,1000);
}

function Script2()
{
  clearInterval(timerId);
let sec = 0;

}


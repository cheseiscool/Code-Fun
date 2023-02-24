let menutoggle = false;
const pages = document.getElementsByClassName("page"); 
let buttonclicked = 0;
let highscore = document.cookie;

function menubutton()
{
    if (menutoggle == false)
    {
        document.getElementById("menubutton").style.display = "block";
        document.getElementById("menulist").style.backgroundColor = "rgb(49, 49, 49)";
        menutoggle = true;
    }

    else
    {
        document.getElementById("menubutton").style.display = "none";
        document.getElementById("menulist").style.backgroundColor = "rgb(83, 83, 83)";
        menutoggle = false;
    }
}

function changepage(page)
{
    
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
      }
    

      if (page == "welcomepage")
      {
        document.getElementById("welcomepage").style.display = "block";
      }
    
      if (page == "store")
      {
        document.getElementById("store").style.display = "block";
      }

      if (page == "game")
      {
        document.getElementById("game").style.display = "block";
      }
   
   
    
    
}


function buttonclick()
{
  if (highscore == null)
  {
    document.cookie = 1;
    highscore = document.cookie;
  }

  buttonclicked++
  document.getElementById("counter").innerHTML = "Score:" + buttonclicked;
  if (buttonclicked > highscore)
  {
    document.cookie = buttonclicked;
    highscore = document.cookie;
    document.getElementById("highscore").innerHTML = "HighscoreScore:" + highscore;
  }
  
   
   
    

}
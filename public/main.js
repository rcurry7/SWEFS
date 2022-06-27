//const btn = document.getElementById('myfactbtn')

//btn.addEventListener('click', () => {

  //document.getElementById("myart").style.display = "none";
 
//})


function showFact()
{
  document.getElementById("myfact").style.display = "block";
  document.getElementById("mysoft").style.display = "none";
  document.getElementById("myex").style.display = "none";
  document.getElementById("myam").style.display = "none";
  document.getElementById("myhob").style.display = "none";


}

function showSoft()
{
  document.getElementById("myfact").style.display = "none";
  document.getElementById("mysoft").style.display = "block";
  document.getElementById("myex").style.display = "none";
  document.getElementById("myam").style.display = "none";
  document.getElementById("myhob").style.display = "none";

}

function showEx()
{
  document.getElementById("myfact").style.display = "none";
  document.getElementById("mysoft").style.display = "none";
  document.getElementById("myex").style.display = "block";
  document.getElementById("myam").style.display = "none";
  document.getElementById("myhob").style.display = "none";

}

function showAmb()
{
  document.getElementById("myfact").style.display = "none";
  document.getElementById("mysoft").style.display = "none";
  document.getElementById("myex").style.display = "none";
  document.getElementById("myam").style.display = "block";
  document.getElementById("myhob").style.display = "none";

}

function showHob()
{
  document.getElementById("myfact").style.display = "none";
  document.getElementById("mysoft").style.display = "none";
  document.getElementById("myex").style.display = "none";
  document.getElementById("myam").style.display = "none";
  document.getElementById("myhob").style.display = "block";

}
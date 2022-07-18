//const btn = document.getElementById("fact")

//btn.addEventListener('click', () => {

 // document.getElementById("myfact").style.display = "block";
 //
//})


function showHide(idName){

let getClasses = document.getElementsByClassName("animate-opacity");   //get all classes with this name in a list

  for(let i = 0; i < getClasses.length; i++){  //loop through list
    getClasses[i].style.display = "none";   //for each of the items (i) in list - display none
  }
document.getElementById(idName).style.display = "block"; //display the one you want /

}


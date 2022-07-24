

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navmenu");

//scroll hide navbar
const body = document.body;

let lastScroll = 0;

window.addEventListener("scroll", () => {


  let currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up")
   
  };

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
    
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.add("scroll-up")
    body.classList.remove("scroll-down")
    
  }
  
  lastScroll = currentScroll;

}
)


hamburger.addEventListener("click", ()=> {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
 })

 document.querySelectorAll(".navlink").forEach(nl => nl.  //for each click on each nav link, remove active from class list.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
  })
  )




function showHide(idName){

let getClasses = document.getElementsByClassName("animate-opacity");   //get all classes with this name in a list

  for(let i = 0; i < getClasses.length; i++){  //loop through list
    getClasses[i].style.display = "none";   //for each of the items (i) in list - display none
  }
document.getElementById(idName).style.display = "block"; //display the one you want /

}


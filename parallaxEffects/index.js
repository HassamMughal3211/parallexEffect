var headimage = document.querySelector(".headimage");
var hdd = document.querySelector(".hdd");
var hpp = document.querySelector(".hpp");

var opt1 = document.querySelector(".option1");
var opt2 = document.querySelector(".option2");
var opt3 = document.querySelector(".option3");

function parallax(element,speed,direction){
        var scrollValue = window.scrollY;
      switch (direction) {
              case "up":
                element.style.transform = `translatey(-${scrollValue * (speed/100) }px)`;
                      break;
              case "down":
                element.style.transform = `translatey(${scrollValue * (speed/100)}px)`;
                      break;
               case "left":
                element.style.transform = `translate(-${scrollValue * (speed/100)}px)`;
                      break;
              default:
                      break;
}}

function fadeIn(element,position){
        var screenHeight = window.innerHeight;
        var elementPositionFromTop = element.getBoundingClientRect().top;
        var screenPositionCalculation = screenHeight * (position/100);
        if(elementPositionFromTop <= screenPositionCalculation){
                element.classList.add('fadeIn');
        }
        else{
                element.classList.remove('fadeIn');
        }
}
function fadeOut(element,position){
        var screenHeight = window.innerHeight;
        var elementPositionFromTop = element.getBoundingClientRect().top;
        var screenPositionCalculation = screenHeight * (position/100);
        if(elementPositionFromTop <= screenPositionCalculation){
                element.classList.add('fadeOut');
        }
        else{
                element.classList.remove('fadeOut');
        }
}

window.addEventListener("scroll",function(){
       parallax(headimage,90,"left")
      fadeOut(hdd,20);
      fadeOut(hpp,40);
      fadeIn(opt1,50);
      fadeIn(opt2,30);
      fadeIn(opt3,20);
})
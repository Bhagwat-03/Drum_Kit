// var i;
// var number=document.querySelectorAll(".drum").length
// for(i=0;i<number;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",handleClick);
// }
// function handleClick(){
//     // alert("I got clicked !");
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// }



// Extras
// document.querySelectorAll("button")[0].addEventListener("click",handleClick);
// document.querySelectorAll("button")[1].addEventListener("click",handleClick);
// document.querySelectorAll("button")[2].addEventListener("click",handleClick);
// document.querySelectorAll("button")[3].addEventListener("click",handleClick);
// document.querySelectorAll("button")[4].addEventListener("click",handleClick);
// document.querySelectorAll("button")[5].addEventListener("click",handleClick);
// document.querySelectorAll("button")[6].addEventListener("click",handleClick);
// function handleClick(){
//     alert("I got clicked !");
// }
// document.querySelector("button").addEventListener("click",function (){
//     alert("I got clicked !");
// }) This is an anonymous function


// for(i=0;i<numbers;i++){
//     document.querySelector("button").addEventListener("click",function (){
//              alert("I got clicked !");
//          });
// }





var i;
var numbers = document.querySelectorAll(".drum").length;
for(i=0;i<numbers;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        sounds(buttonInnerHTML);
    });

document.addEventListener("keypress",function(event){
    sounds(event.key);
});

function sounds(key){
        switch(key){
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                 crash.play();
              break;
            case "a":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
              break;
            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            default:
                break;
        }
    }
}

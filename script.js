document.querySelector(".btn").addEventListener("click",fun1);
document.querySelector("#btn2").addEventListener("click",fun2);


function fun2() {
    clearInterval(intervalID);
}



function fun1(){
intervalID =setInterval(fun,50);}
//setInterval return an ID which on passing to clearInterval it will stop


function fun(){
    // var audio=new Audio("sounds/Eminem_ft_Dido_-_Stan_(Jesusful.com).mp3")
    // audio.play();
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background="#"+randomColor;
}
clearInterval(intervalID);


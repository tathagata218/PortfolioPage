$(function(){
//have a array of images and its descriptions!!!
//Then display each of the array images in the div
//When the right button is clicked the next iamge will populate in the div
//whrn the left button is cilecked the previous image will be populated in the div 
var count=0;

var imgArray=[ "<a href='https://battlemath.herokuapp.com/' target='_blank'><span align='center'><img class='img-responsive img-rounded portImages' width='700px' height:'400px' src='PortfolioPics/battleMath.jpg' alt='portfolio1'></span></a>",

"<a href='https://tathagata218.github.io/Hangman-Game/' target='_blank'><span align='center'><img class='img-responsive img-rounded portImages' height='400' width='700'  src='PortfolioPics/HangmanGame.jpg' alt='portfolio2'></span></a>",

"<a  href='https://tathagata218.github.io/JS-Calculator/' target='_blank'><span><img class='img-responsive img-rounded portImages' width='700px' height='400px' src='PortfolioPics/JS Calculator.jpg' alt='portfolio3'></span></a>",

"<a  href='https://tathagata218.github.io/RPG-game/' target='_blank'><span><img class='img-responsive img-rounded portImages' width='700px' height='400px' src='PortfolioPics/RPG Game.jpg' alt='portfolio4'></span></a>",

"<a  href='https://tathagata218.github.io/Trivia-Game/' target='_blank'><span><img class='img-responsive img-rounded portImages' width='700px' height='400px' src='PortfolioPics/Trivia Game.jpg' alt='portfolio5'></span></a>",

"<a  href='https://tathagata218.github.io/Wikipedia-Search/' target='_blank'><span><img class='img-responsive img-rounded portImages' width='700px' height='400px' src='PortfolioPics/WikiSearch pic.JPG' alt='portfolio6'></span></a>"
//"<a href='#'><span><img class='img-responsive img-rounded portImages' width='700px' height:'400px' src='PortfolioPics/HangmanGame.jpg' alt='portfolio6'></span></a>"
];
var descDisplay=["<p>Description : This Game is an Educational Game where Users Can log In and Choose different charecters and solve different math problems to gain points!!!</p></br><p>Responsibility : Lead Backend Developer</p></br><p>Technologies : ReactJS, PassportJS, SequalizeJS, NodeJS, ExpressJS</p>",
"<p>Description : This is the Hangman Game and it is cool</p></br><p>Responsibility : Lead Backend Developer</p></br><p>Technologies : ReactJS, PassportJS, SequalizeJS, NodeJS, ExpressJS</p>",
"<p>Description : This is the JavaScript Calculator which calculates all type of Calucations</p></br><p>Responsibility : Lead Backend Developer</p></br><p>Technologies : ReactJS, PassportJS, SequalizeJS, NodeJS, ExpressJS</p>",
"<p>Description : This is the Dragon Ball Z game and the it's fun to Play !!!</p></p></br><p>Responsibility : Lead Backend Developer</p></br><p>Technologies : ReactJS, PassportJS, SequalizeJS, NodeJS, ExpressJS</p>",
"<p>Description : This is the Timed Trivia Game </p></br><p>Responsibility : Lead Backend Developer</p></br><p>Technologies : ReactJS, PassportJS, SequalizeJS, NodeJS, ExpressJS</p>",
"<p>Description : This is the Wiki Article Search. Search Top 10 Realated Searches !!! </p></br><p>Responsibility : Lead Backend Developer</p></br><p>Technologies : ReactJS, PassportJS, SequalizeJS, NodeJS, ExpressJS</p>"];

console.log(imgArray.length);
$("#displayDiv").html(imgArray[0]);
$("#diplayInfo").html(descDisplay[0]);

$("#rightArrowBtn").on("click", function(){
    event.preventDefault();
    count++;
    console.log(count);
function fadeout(){
    $("#displayDiv").fadeOut(100);
    $("#diplayInfo").fadeOut(100);
};
function fadein(){
    $("#displayDiv").fadeIn(100).html(imgArray[count]); 
    $("#diplayInfo").fadeIn(100).html(descDisplay[count]);   
};

setTimeout(fadeout, 100);
setTimeout(fadein, 200);
    if(count == imgArray.length){
        count = 0;
    }
    
});


$("#leftArrowBtn").on("click", function(){
    event.preventDefault();
    count--;
    function fadeout(){
        $("#displayDiv").fadeOut(100);
        $("#diplayInfo").fadeOut(100);
    };
    function fadein(){
        $("#displayDiv").fadeIn(100).html(imgArray[count]); 
        $("#diplayInfo").fadeIn(100).html(descDisplay[count]);   
    };
    
    setTimeout(fadeout, 100);
    setTimeout(fadein, 200);
    if(count == 0 || count<0 ){
        count = imgArray.length;
    }
});





$("#submitButton").on('click',function(){
    event.preventDefault();
});
});
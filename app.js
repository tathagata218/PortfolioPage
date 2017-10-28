$(function(){
//have a array of images and its descriptions!!!
//Then display each of the array images in the div
//When the right button is clicked the next iamge will populate in the div
//whrn the left button is cilecked the previous image will be populated in the div 
var count=0;
var imgArray=["<a  href='https://tathagata218.github.io/Hangman-Game/'><span align='center'><img class='img-responsive img-rounded portImages' height='400' width='700'  src='PortfolioPics/HangmanGame.jpg' alt='portfolio1'></span></a>",
"<a href='https://tathagata218.github.io/JS-Calculator/'><span><img class='img-responsive img-rounded portImages' width='700px' height='400px' src='PortfolioPics/JS Calculator.jpg' alt='portfolio2'></span></a>",
"<a href='https://tathagata218.github.io/RPG-game/'><span><img class='img-responsive img-rounded portImages' width='700px' height='400px' src='PortfolioPics/RPG Game.jpg' alt='portfolio3'></span></a>",
"<a href='https://tathagata218.github.io/Trivia-Game/'><span><img class='img-responsive img-rounded portImages' width='700px' height='400px' src='PortfolioPics/Trivia Game.jpg' alt='portfolio4'></span></a>",
"<a href='https://tathagata218.github.io/Wikipedia-Search/'><span><img class='img-responsive img-rounded portImages' width='700px' height='400px' src='PortfolioPics/WikiSearch pic.JPG' alt='portfolio5'></span></a>"
//"<a href='#'><span><img class='img-responsive img-rounded portImages' width='700px' height:'400px' src='PortfolioPics/HangmanGame.jpg' alt='portfolio6'></span></a>"
];
var descDisplay=[" <p>Description : This is the Hangman Game and it is cool</p>",
"<p>Description : This is the JavaScript Calculator which calculates all type of Calucations</p>",
"<p>Description : This is the Dragon Ball Z game and the it's fun to Play !!!</p>",
"<p>Description : This is the Timed Trivia Game </p>",
"<p>Description : This is the Wiki Article Search. Search Top 10 Realated Searches !!! </p>"];

console.log(imgArray.length);
$("#displayDiv").html(imgArray[0]);
$("#diplayInfo").html(descDisplay[0]);

$("#rightArrowBtn").on("click", function(){
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
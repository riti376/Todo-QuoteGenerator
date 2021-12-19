//check off to do
$("ul").on("click" , "li" , function(){
$(this).toggleClass("completed");
});

//delete a to do
$("ul").on("click" , "span" , function(event){
$(this).parent().fadeOut(500 , function(){
    $(this).remove();
});
event.stopPropagation();
})

//add a to do
$("input").keypress(function(event){
    if(event.which === 13){
       var todoText = $(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

//get quote
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let button = document.querySelector(".button");

button.addEventListener("click" , getQuote);

function getQuote(){
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
         quote.innerHTML= `"${data.content}"`;
         author.innerHTML = `-${data.author}`;
    })
}
//load first page 
function start(){
    $("#menu a:first").click();
}

$(window).on("load", start);

//load page user clicks on nav bar (apart from leagues page which has extra styling added to page)
function loadpage(e){

    e.preventDefault();

    //add "selected" class to indicate which nav page the user is on
    $("#menu a.selected").removeClass("selected");
    $(this).addClass("selected");

    var href = $(this).attr("href");    

    $("#content").load(href, reloadIG);
    function reloadIG(){
        window.instgrm.Embeds.process();

    if (href == "index.html") {
        $("#title").text("The Nine");
    } else if (href == "news.html") {
        $("#title").text("News");
    } else if (href == "scores.html") {
        $("#title").text("Scores");
    } else if (href == "videos.html") {
        $("#title").text("The Nine");
    } else if (href == "community.html") {
        $("#title").text("Community");
    }
}

    //removes "hidden" class when navigating from leagues back to other pages
    $("#title").removeClass("hidden");
    $("#header-logo").removeClass("hidden");

}

$(document).on("click", "#menu a", loadpage);

//load leagues page user when user clicks icon on nav bar
function loadLeagues(e){

    e.preventDefault();

    $("#title").addClass("hidden");
    $("#header-logo").addClass("hidden");
}

$(document).on("click", "#menu a:last", loadLeagues);

//filter scores based on league button clicked 
//wnba button clicked
function filterWnba() {
    $(".wnba-score").show();
    $(".fawsl-score, .wnbl-score, .tennis-score, .nwhl-score, .olympics-score, .mma-score, .nwsl-score").hide();
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
}

$(document).on("click", "#wnba-btn", filterWnba)

//fawsl button clicked
function filterFawsl() {
    $(".fawsl-score").show();
    $(".wnba-score, .wnbl-score, .tennis-score, .nwhl-score, .olympics-score, .mma-score, .nwsl-score").hide();
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
}

$(document).on("click", "#fawsl-btn", filterFawsl)

//wnbl button clicked
function filterWnbl() {
    $(".wnbl-score").show();
    $(".wnba-score, .fawsl-score, .tennis-score, .nwhl-score, .olympics-score, .mma-score, .nwsl-score").hide();
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
}

$(document).on("click", "#wnbl-btn", filterWnbl)

//tennis button clicked
function filterTennis() {
    $(".tennis-score").show();
    $(".wnba-score, .fawsl-score, .wnbl-score, .nwhl-score, .olympics-score, .mma-score, .nwsl-score").hide();
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
}

$(document).on("click", "#tennis-btn", filterTennis)

//nwhl button clicked
function filterNwhl() {
    $(".nwhl-score").show();
    $(".wnba-score, .fawsl-score, .wnbl-score, .tennis-score, .olympics-score, .mma-score, .nwsl-score").hide();
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
}

$(document).on("click", "#nwhl-btn", filterNwhl)

//olympic button clicked
function filterOlympics() {
    $(".olympics-score").show();
    $(".wnba-score, .fawsl-score, .wnbl-score, .nwhl-score, .tennis-score, .mma-score, .nwsl-score").hide();
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
}

$(document).on("click", "#olympics-btn", filterOlympics)

//nwsl button clicked
function filterNwsl() {
    $(".nwsl-score").show();
    $(".wnba-score, .fawsl-score, .wnbl-score, .nwhl-score, .olympics-score, .tennis-score, .mma-score").hide();
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
}

$(document).on("click", "#nwsl-btn", filterNwsl)

//mma button clicked
function filterMma() {
    $(".mma-score").show();
    $(".wnba-score, .fawsl-score, .wnbl-score, .nwhl-score, .olympics-score, .tennis-score, .nwsl-score").hide();
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
}

$(document).on("click", "#mma-btn", filterMma)

//all scores button clicked
function filterAll() {
    $(".wnba-score, .fawsl-btn, .wnbl-score, .tennis-score, .nwhl-score, .olympics-score, .mma-score, .nwsl-score").show();
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
}

$(document).on("click", "#all-scores-btn", filterAll)

//infinite scroll 

var scrollLoad = true;

$(window).scroll(function () { 
  if (scrollLoad && $(window).scrollTop() >= $(document).height() - $(window).height() - 300) {
    scrollLoad = false;
  }
});

//interactive comment section

//add comment to list

function insert(){

    var item = $("#text").val();
   if (item == "") {
   	alert("Please enter comment in text field");
   } else {
   	var html = '<li class="list-group-item">'+item+'</li>';
  	$("#list").append(html);
    $("#text").val(""); 
  }
  
  save();

}

function save(){
	var html = $("#list").html();
  localStorage.setItem("todo", html);
}

function load(){
	var html = localStorage.getItem("todo");
  $("#list").html(html);
}

$("#add").click(insert);
load();

//view past comments from other users

$( "#toggle" ).click(function() {
    $(".discuss").toggle("fast");
  });
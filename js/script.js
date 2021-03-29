//load first page 
function start(){
    $("#menu a:first").click();
}

$(window).on("load", start);


//load page user clicks on nav bar (apart from leagues page)
function loadpage(e){

    e.preventDefault();

    //ADD ACTIVE CLASS ICONS FOR HOME PAGE ICONS//
    // $("#menu a.active").removeClass("active");
    // $(this).addClass("active");

    var href = $(this).attr("href");    
    $("#content").load(href);

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
//(SEE IF CAN OPTIMIZE TO MAKE SINGLE FUNCTION INSTEAD OF DIFFERENT FUNCTIONS PER LEAGUE)

//wnba button clicked
function filterWnba() {

    $(".wnba-score").addClass("visible");
    $(".score").addClass("not-visible");
}

$(document).on("click", "#wnba-btn", filterWnba);

//wnbl button clicked
function filterWnbl() {

    $(".wnbl-score").addClass("visible");
    $(".score").addClass("not-visible");
    
}

$(document).on("click", "#wnbl-btn", filterWnbl);

//tennis button clicked
function filterTennis() {

    $(".tennis-score").addClass("visible");
    $(".score").addClass("not-visible");
    
}

$(document).on("click", "#tennis-btn", filterTennis);

//nwhl button clicked
function filterNwhl() {

    $(".nwhl-score").addClass("visible");
    $(".score").addClass("not-visible");
    
}

$(document).on("click", "#nwhl-btn", filterNwhl);

//olympics button clicked
function filterOlympics() {

    $(".olympics-score").addClass("visible");
    $(".score").addClass("not-visible");
    
}

$(document).on("click", "#olympics-btn", filterOlympics);

//fawsl button clicked
function filterFawsl() {

    $(".fawsl-score").addClass("visible");
    $(".score").addClass("not-visible");    
}

$(document).on("click", "#fawsl-btn", filterFawsl);

//all scores button clicked
function filterAll() {

    $(".score").addClass("visible");
    
}

$(document).on("click", "#all-scores-btn", filterAll);
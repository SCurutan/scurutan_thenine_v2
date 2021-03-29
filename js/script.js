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
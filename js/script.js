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
function loadleagues(e){

    e.preventDefault();

    $("#title").addClass("hidden");
    $("#header-logo").addClass("hidden");
}

$(document).on("click", "#menu a:last", loadleagues);


//filter scores based on league button clicked 
function loadscore(e){

    e.preventDefault();

    var href = $(this).attr("href");    
    $("#btn-bg").load(href);
}

$(document).on("click", ".league-btn", loadscore);
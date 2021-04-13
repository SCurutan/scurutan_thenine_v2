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
}

    //removes "hidden" class when navigating from leagues back to other pages
    $("#title").removeClass("hidden");
    $("#header-logo").removeClass("hidden");

    // reveals content with delay
    ScrollReveal().reveal('.reveal', { delay: 5000 });
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

// community page - adding comments to discussion board
                function begin(){
                    $("div.page:first").show();
                }

                begin();
                
                function collect(){
                
                    var obj = {};
                  
                  $("input[name]").each(function(){
                      var text = $(this).val();
                    var name = $(this).attr("name");
                        obj[name] = text;
                    })
                
                    var data = JSON.stringify(obj);
                    $("#json").val(data);
                
                }
                
                
                function proceed(){
                
                    var item = $("div.page:visible");
                  
                  item.next(".page").show();
                  item.hide();
                  
                  var index = item.next(".page").index();
                
                    if (index == 3) {
                      $("#next").remove();
                  }
                  
                  collect();
                
                }
                
                $(document).on("click", "#next", proceed);
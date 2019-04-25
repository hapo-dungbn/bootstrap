// add circle progress
$(".professional-skill .professional-button-add").click(function(){
   $(".professional-skill .professional-button-add").before(
       $(".skill-progress-circle > .circle-progress").first().clone());
});

// add line progress
$(".personal-button-add").click(function () {
   $(".personal-button-add").before(
     $(".skill-progress-line > .line-process-container").first().clone());
});

// add exp
$(".work-exp > .exp-button-add").click(function () {
   $(".work-exp .ex-table").append($(".ex-table > .table-item").first().clone());
});

// add education
$(".education .exp-button-add").click(function () {
   $(".education .table-item").first().clone().appendTo(".education .ex-table");
});

//add references
let count = 2;
$(".references .professional-button-add").click(function () {
   count++;
   $(".carousel-inner .carousel-item").removeClass("active");
   $("#carouselIndicators .carousel-inner").append($(".carousel-item").first().clone().addClass("active"));
   $(".carousel-indicators li").removeClass("active");
   $("#carouselIndicators ol").append($(".carousel-indicators li").first().clone().addClass("active").attr("data-slide-to", count));
});

//project masonry
$grid = $('.grid').masonry({
   itemSelector: '.grid-item',
   gutter: 0,
});

//add project
var a = 0;
var $elems;
function checkPosition(x){
   switch (a) {
      case 3:
         $elems = $(` <div class="grid-item grid-item--height2 a${x}"><img src="image/2222.png" alt="project"></div>`);
         return $elems;
      case 7:
         $elems = $(` <div class="grid-item grid-item--height2 a${x}"><img src="image/2222.png" alt="project"></div>`);
         return $elems;
      default:
         $elems = $(`<div class="grid-item a${x}"><img src="image/1111.png" alt="project"></div>`);
         return $elems;
   }
}

$(document).on( 'click','#lastGrid', function() {
   a++;
   if (a > 11) {
      a = 2;
   }

   // background color
   var x = ($(this).index() + 1) % 10;


   $(this).remove();
   //create new item elements
   var html = `<div id="lastGrid" class="grid-item">
                                <div class="add-skill d-flex">
                                    <button type="button" class="btn-edit btn btn-outline">Add project
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>`;
   checkPosition(x);
   var $elemsHtml = $(html)
   $grid.append( $elems ).masonry( 'appended', $elems );
   $grid.append( $elemsHtml ).masonry( 'appended', $elemsHtml ).masonry();
});

$(document).on('blur',".progress-circle-head span", function () {
   let value = $(this).text();
   let number = 295.14*value/100;
   $(this).closest(".progress-circle-head").find(".red").css("stroke-dasharray", number);
});

$(document).on('blur', ".line-red span", function () {
   let value = $(this).text();
   $(this).closest(".line-red").css("width", value + '%');
});



























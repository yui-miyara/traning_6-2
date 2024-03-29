console.log("こんにちは");
$(function() {

  $(".readmore").click(function() {
    $(".readmore").removeClass("active");
    $(".people_2_s").addClass('active');
    $(".people_3_s").addClass("active");
    $(".people_4_s").addClass("active");
    $(".content_6").css("height", "1700px");
  })
})
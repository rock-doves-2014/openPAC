$(document).ready(function(){
  $("#donation_amount").on("keyup", function(){
    var sliders = $("#sliders .range-slider");
    var total_amount = $(event.target).val();
    $(".legislator_amount").text(total_amount/$(".legislator_amount").length)
    $('.range-slider').foundation('slider', 'set_value', ($(".legislator_amount").first().text()/$("#donation_amount").val())*100);
    registerSliders();
  })
})

function registerSliders() {
  $('[data-slider]').on('change.fndtn.slider', function(event){
    var total_amount = $("#donation_amount").val()
    var current_amount = $(".legislator_amount").text()
    console.log(event.target.dataset.slider)
  });
}
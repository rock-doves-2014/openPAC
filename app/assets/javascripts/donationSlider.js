$("#donation_amount").on("keyup", function(){
  var sliders = $("#sliders .range-slider");
  var total_amount = $(event.target).val();
  $(".legislator_amount").text(total_amount/$(".legislator_amount").length)

  $('.range-slider').foundation('slider', 'set_value', ($(".legislator_amount").first().text()/$("#donation_amount").val())*100);
})

$("[data-slider]").on("change.fndtn.slider", function(event){
  // console.log("test", $(event.target.lastElementChild).val())
  // debugger
  var total_amount = $("#donation_amount").val()
  var current_amount = $(".legislator_amount").text()
  $('.range-slider').siblings().foundation('slider', 'set_value', ($(".legislator_amount").first().text()/$("#donation_amount").val())*100);
  // console.log(event.currentTarget.children.s93.value)

});

$(document).foundation({
  slider: {
    on_change: function(event){
      var total_amount = $("#donation_amount").val()
      var current_amount = $(".legislator_amount").text()
      $('.range-slider').siblings().foundation('slider', 'set_value', ($(".legislator_amount").first().text()/$("#donation_amount").val())*100);
      // console.log(event.currentTarget.children.s93.value)

    }
  }
});
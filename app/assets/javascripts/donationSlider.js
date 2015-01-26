$("#donation_amount").on("keyup", function(){
  var total_amount = $(event.target).val()
  // $("#amount").text("Total donation amount: $"+amount)
  // debugger
  $(".amount").text(total_amount/$(".amount").length)
})

$("[data-slider]").on("change.fndtn.slider", function(){

  // console.log($("#slider").attr("data-slider"))
});


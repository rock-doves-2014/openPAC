$(document).ready(function(){
  var legislator_count = $(".legislator_amount").length
  var $legislator_amounts = $(".legislator_amount")
  var $total_amount = $("#donation_amount")
  var $sliderBlocks = $('div[data-legislator-id]')


  var addEventListeners = function(){
    $('[data-slider]').on('change.fndtn.slider', updateAmountsAndSliders);
  }

  var removeEventListeners = function(){
    $('[data-slider]').off('change.fndtn.slider', updateAmountsAndSliders);
  }

  var setSliders = function(){
    removeEventListeners();
    var total_amount = $total_amount.val();
    var eachPercentage = 100 / ($sliderBlocks.length)
    $legislator_amounts.text((total_amount/legislator_count).toFixed(2))
    $sliderBlocks.each(function(){
      $('.range-slider', this).foundation('slider', 'set_value', eachPercentage);
    })
    addEventListeners();
  };

  $("#donation_amount").on("keyup", setSliders);


  var updateAmountsAndSliders = function(event){
    console.log("updateAmountsAndSliders")
    var total_amount = $total_amount.val();

    var target_current_amount = $(event.target).closest('.legislator_slider_block').children().first().children('span').text();
    var target_current_percentage = (target_current_amount/total_amount)*100;

    var target_new_percentage = event.target.dataset.slider;
    var target_new_amount = total_amount * (target_new_percentage/100);

    var target_percentage_diff = target_current_percentage - target_new_percentage;
    var friend_perct_diff = target_percentage_diff / legislator_count;
    $(event.target).closest('.legislator_slider_block').children().first().children('span').text(target_new_amount.toFixed(2));
    var friends = $(event.target).closest('.legislator_slider_block').siblings()
    removeEventListeners();
    friends.each(function(){
      var friend_current_percentage = $('.range-slider', this)[0].dataset.slider;
      var friend_new_percentage = parseInt(friend_current_percentage) + friend_perct_diff;
      var friend_new_amount = total_amount * (friend_new_percentage/100);
      $(this).children().last().foundation('slider', 'set_value', friend_new_percentage);

      $(this).children().first().children('span').text(friend_new_amount);
    });
    addEventListeners();
  }



})
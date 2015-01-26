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
    var total_amount = $total_amount.val();

    var target_current_amount = $('span', $(event.target).closest('.legislator_slider_block')).text();
    var target_current_percentage = (target_current_amount/total_amount)*100;

    var target_new_percentage = event.target.dataset.slider;
    var target_new_amount = total_amount * (target_new_percentage/100);

    var target_percentage_diff = target_current_percentage - target_new_percentage;
    console.log("-----target_percentage_diff", target_percentage_diff);

    var friend_perct_diff = target_percentage_diff / legislator_count - 1;
    $(event.target).closest('.legislator_slider_block').children().first().children('span').text(target_new_amount.toFixed(2));
    var friends = $(event.target).closest('.legislator_slider_block').siblings()

    console.log("target_current_percentage", target_current_percentage, "target_new_percentage", target_new_percentage);

    removeEventListeners();
    friends.each(function(){
      var friend_current_percentage = $('.range-slider', this)[0].dataset.slider;
      // console.log("friend_current_percentage", friend_current_percentage, "friend_perct_diff", friend_perct_diff);
      var willBeUpdatedFriendsCount = -1;
      $('.range-slider', $sliderBlocks).each(function(){
        if(this.dataset.slider < 100 && this.dataset.slider > 0){
          willBeUpdatedFriendsCount += 1;
          console.log(willBeUpdatedFriendsCount);
        }
      });

      if(friend_current_percentage < 0.01 && friend_perct_diff < 0.01){
        // otherLegislatorCount -= 1;
        friend_perct_diff = target_percentage_diff / friends.length;
        var friend_new_percentage = 0.00;
        var friend_new_amount = 0.00;
      }else if(friend_current_percentage > 99.99 && friend_perct_diff > 0){
        // otherLegislatorCount -= 1;
        friend_perct_diff = target_percentage_diff / friends.length;
        var friend_new_percentage = 100;
        var friend_new_amount = total_amount;
      }else{
        friend_perct_diff = target_percentage_diff / willBeUpdatedFriendsCount;
        var friend_new_percentage = parseInt(friend_current_percentage) + friend_perct_diff;
        var friend_new_amount = total_amount * (friend_new_percentage/100);

      }

      var friend_new_amount = total_amount * (friend_new_percentage/100);
      $(this).children().last().foundation('slider', 'set_value', friend_new_percentage);

      $(this).children().first().children('span').text(friend_new_amount);
    });
    addEventListeners();
  }

})
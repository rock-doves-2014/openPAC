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
      $('.range-slider', this).addClass('active');
    })
    addEventListeners();
  };

  $("#donation_amount").on("keyup", setSliders);

  // $('[data-slider]')
  // .mousedown(function() {
  //   target_current_percentage = event.target.parentElement.dataset.slider
  // })
  // .mouseup(function() {
  //   target_new_percentage = event.target.parentElement.dataset.slider
  // });

  var updateAmountsAndSliders = function(event){
    var total_amount = $total_amount.val();

    var target_current_amount = $('span', $(event.target).closest('.legislator_slider_block')).text();
    var target_current_percentage = (target_current_amount/total_amount)*100;

    var target_new_percentage = event.target.dataset.slider;
    var target_new_amount = total_amount * (target_new_percentage/100);

    var target_percentage_diff = target_current_percentage - target_new_percentage;
    // console.log('out',target_percentage_diff)
    var friend_perct_diff = target_percentage_diff / legislator_count - 1;
    $(event.target).closest('.legislator_slider_block').children().first().children('span').text(target_new_amount.toFixed(2));
    var friends = $(event.target).closest('.legislator_slider_block').siblings()

    removeEventListeners();
    friends.each(function(){
      var friend_current_percentage = $('.range-slider', this)[0].dataset.slider;
      if(friend_current_percentage < 0.01 && friend_perct_diff < 0.01){
        $('.range-slider', this).removeClass('active');
      }else if(friend_current_percentage > 99.98 && friend_perct_diff > 0){
        $('.range-slider', this).removeClass('active');
      }else{

      }
    });

    var activeFriends = $('.active');

    activeFriends.each(function(){
      var friend_current_percentage = this.dataset.slider;
      friend_perct_diff = target_percentage_diff / activeFriends.length;
      var friend_new_percentage = parseInt(friend_current_percentage) + friend_perct_diff;
      var friend_new_amount = total_amount * (friend_new_percentage/100);
// debugger
      $(this).foundation('slider', 'set_value', friend_new_percentage);

      $('.legislator_amount', $(this).closest('.legislator_slider_block')).text(friend_new_amount.toFixed(2));

    })

    addEventListeners();
  }

})
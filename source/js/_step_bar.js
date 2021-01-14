$(document).ready(function() {
  $('.step-bar__item').first().removeClass('step-bar__item--next').addClass('step-bar__item--current');
});

$(document).on('click', '.js-step', function(e) {
  var nextStep = $(this).attr('data-show');
  var currentStep = $(this).parent();
  if (currentStep.attr('id') < nextStep.substring(1)) {
    $('.step-bar li').eq($('.step-content').index(currentStep)).removeClass('step-bar__item--current');
    $('.step-bar li').eq($('.step-content').index($(nextStep))).removeClass('step-bar__item--next').addClass('step-bar__item--current');
  } else {
    $('.step-bar li').eq($('.step-content').index(currentStep)).removeClass('step-bar__item--current').addClass('step-bar__item--next');
    $('.step-bar li').eq($('.step-content').index($(nextStep))).addClass('step-bar__item--current');
  }
  currentStep.hide();
  $(nextStep).show();
});

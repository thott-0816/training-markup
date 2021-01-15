$(document).ready(function() {
  $('.js-step').first().removeClass('step--next').addClass('step--current');
});

$(document).on('click', '.js-switching', function() {
  var nextStep = $(this).attr('data-show');
  var currentStep = $(this).parent();
  if (currentStep.attr('id') < nextStep.substring(1)) {
    $('.js-steps li').eq($('.js-step-content').index(currentStep)).removeClass('step--current');
    $('.js-steps li').eq($('.js-step-content').index($(nextStep))).removeClass('step--next').addClass('step--current');
  } else {
    $('.js-steps li').eq($('.js-step-content').index(currentStep)).removeClass('step--current').addClass('step--next');
    $('.js-steps li').eq($('.js-step-content').index($(nextStep))).addClass('step--current');
  }
  currentStep.hide();
  $(nextStep).show();
});

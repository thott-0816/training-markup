var isIOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var handleClick = isIOS ? 'touchend' : 'click';

const TrainingProject = {
  Init: function() {
    this.loadWin();
  },

  loadWin: function() {
    $(window).on('load resize', function() {
      console.log('load resize');
    });
  },
};

$(document).ready(function() {
  TrainingProject.Init();
});

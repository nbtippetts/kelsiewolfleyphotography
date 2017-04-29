app.directive('navsBarDir', function($window) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      games: '='
    },
    link: function(scope, elem, attrs) {
      var menu = $('.menu').hide();
      var hamburger = $('.hamburger');
      var cross = $('.cross').hide();

      $(hamburger).click(function() {
        $(menu).slideToggle('slow', function() {
          hamburger.hide();
          menu.show();
          cross.show();
        });
      });
      $(cross).click( function() {
        $(menu).slideToggle('slow', function() {
          hamburger.show();
          menu.hide();
          cross.hide();
        });
      });
    }
  }
})

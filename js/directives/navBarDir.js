app.directive('navsBarDir', function($window) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      games: '='
    },
    link: function(scope, elem, attrs) {
    $(".img-hovers").on('mouseenter', function() {
       $(".img-hovers").css("background-color", "black", "opacity", "0.6")
       $(".img-hovers").css("color", "white")
    })

    }
  }
})

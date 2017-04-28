app.directive('slideShowDir', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
       images: '='
    }, link: function(scope, elem, attrs) {
        //  templateUrl: './view/slideShow.html',
        //  scope.currentIndex = 0;
        //
        //  scope.next = function() {
        //    scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
        //  };
        //
        //  scope.$watch('currentIndex', function() {
        //    scope.images.forEach(function(image) {
        //      image.visable = false;
        //    });
        //    scope.images[scope.currentIndex].visable = true;
        //  });
        //
        //  var time
        //  var slideFunc = function() {
        //    time = $timeout(function() {
        //      console.log(time);
        //      scope.next()
        //      time = $timeout(slideFunc, 4000)
        //   });
        // }
        // slideFunc()
      
  function set_body_height() { // set body height = window height
    $('body').height($(window).height());
  }
  $(document).ready(function() {
    $(window).bind('resize', set_body_height);
    set_body_height();
  });
    }
  }
})

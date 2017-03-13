angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("home.html",
    "<h1>Hello World</h1>"
  );

}]);

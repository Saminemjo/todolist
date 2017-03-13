angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('web', {
                abstract: true,
                template: '<ui-view/>',
                controller: 'MainController'
            })
            .state('web.home', {
                url: '/',
                templateUrl: 'home.html'
            })
            .state('web.todolist', {
                url: '/todolist',
                templateUrl: 'todolist.html',
                controller: 'todolistController'
            });

        $urlRouterProvider.otherwise('/');
    });

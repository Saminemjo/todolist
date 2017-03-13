angular.module('app')
    .controller('todolistController', function($scope) {
        $scope.todos = [{
                done: true,
                value: 'Acheter des raquettes de ping-pong pour Manu !'
            },
            {
                done: false,
                value: 'Aller faire du shopping !'
            },
            {
                done: false,
                value: 'Trouver un médecin traitant.'
            },
            {
                done: false,
                value: 'Terminer les quêtes de la semaine.'
            },
            {
                done: false,
                value: 'Se reposer !'
            },
            {
                done: false,
                value: 'Danser la Carmagnole.'
            },
            {
                done: false,
                value: 'Hurler au clair de lune.'
            }


        ];




    });

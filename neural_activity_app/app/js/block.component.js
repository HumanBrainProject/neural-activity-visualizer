// Register blockView component, along with its associated controller and template
angular.module('Visualizer').
directive("blockView", ['FileService', '$stateParams', function(FileService, $stateParams) {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        templateUrl: '/static/templates/block-view.tpl.html',
        controller: function($scope, $http, $location, $element, $attrs) {
            //variables
            // $scope.block_id = $stateParams.block_id;

            //functions
            //main code

            $scope.$on('data_updated', function() {
                $scope.data_block = $scope.data.block[0];
                $scope.$apply();
            });
            FileService.setService($stateParams.file_name).then(function() {
                $scope.data = FileService.getData()
                $scope.data_block = $scope.data.block[0];
                $scope.$apply();
            });
        }
    }

}]);
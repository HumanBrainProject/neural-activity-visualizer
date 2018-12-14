angular.module('Visualizer').
directive("segmentView", ['FileService', '$stateParams', function(FileService, $stateParams) {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        templateUrl: '/static/templates/segment-view.tpl.html',
        scope: { segmentid: '@' },
        link: function($scope, $http, $location, $element, $attrs) {
            //variables
            $scope.segment_id = $scope.segmentid;
            //functions

            //main code
            $scope.$on('data_updated', function() {
                $scope.data_segment = $scope.$parent.data.block[0].segments[$scope.segment_id];
                $scope.$apply();
            });

            FileService.setService($stateParams.file_name).then(function() {
                $scope.data = FileService.getData();
                FileService.loadSegment($scope.segment_id);
                $scope.$apply();
                $scope.data_segment = $scope.$parent.data.block[0].segments[$scope.segment_id];
            });
        }
    }

}]);
/**
 * Created by Bersling on 24/08/16.
 */

export class GoodbyeWorld {

  static $inject = ["$scope"];

  constructor (private $scope) {
    $scope.name = "World 2"
  }

}
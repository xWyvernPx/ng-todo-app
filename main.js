(function (angular) {
  angular.module("main", ["todoService"]).controller("MainController", [
    "$scope",
    "todoManager",
    function MainController($scope, todoManager) {
      $scope.inputValue = "";
      $scope.todoList = todoManager.todos;
      $scope.addTodo = (event) => {
        event.preventDefault();
        todoManager.addNewTodo($scope.inputValue);
        $scope.inputValue = "";
      };
      $scope.removeTodo = (todo) => {
        const index = todoManager.todos.indexOf(todo);
        todoManager.removeTodo(index, () => {
          $scope.todoList = todoManager.todos;
        });
      };
      $scope.toggleDone = (todo) => {
        const index = todoManager.todos.indexOf(todo);
        todoManager.toggleDone(index);
      };
    },
  ]);
})(window.angular);

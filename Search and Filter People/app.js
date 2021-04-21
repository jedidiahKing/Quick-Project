let app = angular.module("LeaderFilterApp", []);
app.controller("LeaderController",function($scope){

    $scope.collection = [];
    $scope.addThisOne = function(z){
        $scope.collection.push(z);
    }

    $scope.Leaders = [
        {"name":"Sarkodie","pic":"images/1.jpg"},
        {"name":"Stonebwoy", "pic":"images/2.jpg"},
        {"name":"ShattaWale", "pic":"images/3.jpg"},
        {"name":"Efya", "pic":"images/4.jpg"},
        {"name":"Eno", "pic":"images/5.jpg"},
        {"name":"Adina", "pic":"images/6.jpg"},
        {"name":"Gyakie", "pic":"images/7.jpg"},
        {"name":"Sister Afia", "pic":"images/8.jpg"},
        {"name":"mykhill", "pic":"images/image9.png"},
    ];  
   
}); 
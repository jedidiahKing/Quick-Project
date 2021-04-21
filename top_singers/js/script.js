let app = angular.module("SingersApp", []);
app.controller("SingerController",function($scope){
    $scope.singers = [
        {"pic": "images/1.jpg", "name": "Sarkodie", "gender": "male", "quality": "images/like.jpg"},
        {"pic": "images/2.jpg", "name": "Stonebwoy", "gender": "male", "quality": "images/dislike.jpg"},
        {"pic": "images/4.jpg", "name": "Efya", "gender": "female", "quality": "images/like.jpg"},
        {"pic": "images/5.jpg", "name": "Eno Barony", "gender": "female", "quality": "images/like.jpg"},
        {"pic": "images/6.jpeg", "name": "Adina", "gender": "female", "quality": "images/dislike.jpg"},
        {"pic": "images/7.jpg", "name": "Gyakie", "gender": "female", "quality": "images/dislike.jpg"},
        {"pic": "images/8.jpg", "name": "Sister Afia", "gender": "female", "quality": "images/dislike.jpg"},
        {"pic": "images/3.jpg", "name": "ShattaWale", "gender": "male", "quality": "images/like.jpg"},
    ];
});
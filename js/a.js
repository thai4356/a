let myApp = angular.module("myApp",[]);
// myApp.directive('myCustomDirectives',function(){
//     return {
//         restrict : 'E',
//         // template : '<h1>Cat</h1>',
//         templateUrl :'p/home.html'
//     }
// });

// myApp.filter('myFilter',function () {
//     return function (x) {
//         return x.toUpperCase();
//     }
// })


// myApp.controller("firstController", function($scope ){
//     $scope.name = "Hihi";})
// myApp.controller("secondController", function($scope ){
//     $scope.name = "Hihi";});
// myApp.controller("topController", function($scope,$http ){
//     $http.get('data/data,json').then(function (response){
//         $scope.products = response.data;
//     })
// });
//
// myApp.config(function ($routeProvider){
//     $routeProvider
//         .when('/home',{templateUrl : 'p/home.html'})
//         .when('/about',{templateUrl : 'p/about.html'})
// });


//     $scope.name2 = "Hihi";
// }
//
// app.controller("firstController",secondController);
// function secondController($scope) {
//     $scope.name1 = "Haha";
//     $scope.name2 = "Huhu";
// }
const x= new Date();
// angular.module('myApp', []).controller('namesCtrl', function($scope)))

myApp.controller("firstController", function($scope ){
     $scope.names = [
        {name : "Lamborghini" , price : Math.floor((Math.random() * 900000000) + 1000000),DOP : x.toISOString().split('T')[0]  ,ED : x.toISOString().split('T')[0]},
        {name : "Porshche" , price : Math.floor((Math.random() * 900000000) + 1000000),DOP : x.toISOString().split('T')[0]   ,ED : x.toISOString().split('T')[0]},
        {name : "Ferrari" , price : Math.floor((Math.random() * 900000000) + 1000000),DOP : x.toISOString().split('T')[0]   ,ED : x.toISOString().split('T')[0] },
        {name : "Nissan" , price : Math.floor((Math.random() * 900000000) + 1000000),DOP : x.toISOString().split('T')[0]   ,ED : x.toISOString().split('T')[0]},
        {name : "Chervolet" , price :Math.floor((Math.random() * 900000000) + 1000000),DOP : x.toISOString().split('T')[0]  ,ED : x.toISOString().split('T')[0] },
        {name : "Mitsubishi" , price :Math.floor((Math.random() * 900000000) + 1000000),DOP : x.toISOString().split('T')[0]   ,ED : x.toISOString().split('T')[0]},
        {name : "Toyota" , price : Math.floor((Math.random() * 900000000) + 1000000),DOP : x.toISOString().split('T')[0]   ,ED : x.toISOString().split('T')[0]},
        {name : "BMW" , price :Math.floor((Math.random() * 900000000) + 1000000),DOP : x.toISOString().split('T')[0]   ,ED : x.toISOString().split('T')[0]},
        {name : "Mercedes" , price :Math.floor((Math.random() * 900000000) + 1000000),DOP :x.toISOString().split('T')[0]    ,ED : x.toISOString().split('T')[0]},
        {name : "Audi" , price : Math.floor((Math.random() * 900000000) + 1000000),DOP : x.toISOString().split('T')[0]   ,ED : x.toISOString().split('T')[0]},
    ];
 });


// let Row = 3 ;
// let CurrentRow = 0 ;
// $scope.nextPage = function(){
//     CurrentRow = Row + CurrentRow ;
//     $scope.CurrentRow = CurrentRow ;
// }
//
// $scope.prevPage = function(){
//     if(CurrentRow < 0){
//         CurrentRow = CurrentRow - Row;
//     }
//     else{
//         CurrentRow = Row;
//     }
//     $scope.CurrentRow = CurrentRow;
// }

// let myApp = angular.module('myApp',[]);
let students = [
    {name : "A" , job :"A"},
    {name : "B" , job :"B"}
]


myApp.controller('formController', function($scope){
    $scope.addStudent = function(student){
        students.push(student);
    }
        $scope.editStudent = function(){
            $scope.student = student ;
            $scope.indexItem = index ;
        }
    $scope.student = students;
    $scope.job = job
})



var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("https://nutanix.0x10.info/api/deals?type=json&query=list_deals")
    .then(function(response) {
      $scope.deals = response.data.deals;}
      );
});

var obj;
function getApiHit(){
  console.log("there...");
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
      obj=xhttp.responseText;
      var hits=JSON.parse(obj);
      document.querySelector(".num").innerHTML =hits.api_hits;
    
  }
};
xhttp.open("GET", "https://nutanix.0x10.info/api/deals?type=json&query=api_hits", true);
xhttp.send();

}

setInterval(getApiHit,300);



var b=document.querySelectorAll('.likeh');
for (var i = 0; i<b.length; i++) {
  b[i].addEventListener("click",like);
  console.log("ho gaya");
};

function like () {
//storage code would go here...
}
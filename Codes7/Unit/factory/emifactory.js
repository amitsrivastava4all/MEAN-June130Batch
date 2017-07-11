var app = angular.module("myapp",[]);
app.factory("emifactory",function(){
 var object = {
     emi:function(pr,rate,time){
         rate = rate || 5;
         time = time || 1;
         return (pr*rate*time)/100;
     }
 };
    return object;
})
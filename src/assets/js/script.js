$(document).ready(function(){


    $(document).on('click', '.fa-pencil,.status', function(){
        $("#confirmBox").show(1000);
    });

    $(document).on('click', '.fa-times', function(){
        $("#confirmBox").hide(1000);
    });
  

});   

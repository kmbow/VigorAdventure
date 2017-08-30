
 $(document).ready(function() {
    var name;
    console.log(name);
    $(".btn1").on("click", function(event){
        // name = $("#input").val();
         name = $("#input").val();
        console.log(name);
        localStorage.clear();
        localStorage.setItem("name", name);

 })
 name = localStorage.getItem("name");
 $("#user_name").html(name);
 console.log(name);
 })
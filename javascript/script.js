
$( "button" ).click(function() {
  var val=$("input").val();
  IsEmail(val);
});
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    console.log(false);
    $("input").addClass("is-invalid");
    $(".invalid-email").addClass("show");
    setTimeout(function(){
      $("input").removeClass("is-invalid");
      $(".invalid-email").removeClass("show");
    }, 3000);
  }
  else{
    console.log(true);
    $("input").addClass("is-valid");
    setTimeout(function(){ $("input").removeClass("is-valid"); }, 3000);
  }
}

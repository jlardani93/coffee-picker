$(document).ready(function(){
  // $("img").click(function() {
  //     console.log($(this.classList)[0]);
  //   if ($(this.classList)[0] === "imgClick") {
  //     $(this).removeClass("imgClick");
  //   } else {
  //       $(this).addClass("imgClick");
  //   };
  // });

  $("img").click(function() {
      $(this).toggleClass("imgClick");
  });

  var flavorsArray = [];
  var defineFlavorsArray = function() {
    $("input:checkbox[name=coffee]:checked").each(function() {
      flavorsArray.push(this.value);
      console.log(typeof(this.value));
      // flavorsArray.push(this.value);
    });
  };
  var giveSuggestion = function() {
    flavorsArray.forEach(function(flavor) {
      $("#suggestions").append("<li>" + flavor + "</li>");
    });
    $(".suggestionsContainer").show();
  };
  var reset = function() {
    flavorsArray = [];
    $("#suggestions").empty();
  };

  $(".coffeeForm").submit(function(event){
    reset();
    defineFlavorsArray();
    giveSuggestion();
    event.preventDefault();
  });

});

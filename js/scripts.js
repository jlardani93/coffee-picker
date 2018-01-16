$(document).ready(function(){

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

  $(".coffeeForm").submit(function(event){
      defineFlavorsArray();
      giveSuggestion();
      event.preventDefault();
  });

});

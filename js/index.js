function fetchQuote() {
   $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {     	
      document.getElementById("author").innerHTML = "- " + data.author;
      document.getElementById("quote").innerHTML = data.quote;
      $('#twitter-share-button').attr('href','https://twitter.com/intent/tweet?text=' + encodeURIComponent("\"" +  data.quote + "\"" + " - " + data.author)); 
      
      $(".quote-text").animate({
          opacity: 0
        }, 300,
        function() {
          $(this).animate({
            opacity: 1
          }, 300);
          $('#quote').text(data.quote);
        });

      $(".quote-author").animate({
          opacity: 0
        }, 300,
        function() {
          $(this).animate({
            opacity: 1
          }, 300);
          $('#author').html("- " + data.author);
        });
        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "NtIKQJsTzzmshOqoypIB3lREWqdSp1cNIYGjsnG52KseM3Hrca"); // Enter here your Mashape key
    }
  });
 }

$(document).ready(function() {
  fetchQuote();
  $("#getQuote").on("click", function() {fetchQuote()});  
});
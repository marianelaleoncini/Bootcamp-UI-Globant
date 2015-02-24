  $("button").click(function(){
    var name=$(".alias").val();
    makeCorsRequest(name);
  });

  // Create the XHR object.
  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  }

  // Make the actual CORS request.
  function makeCorsRequest(name) {
    var url = 'http://bootcamp.aws.af.cm/welcome/'+name;
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }

    // Response handlers.
    xhr.onload = function() {
      var text = JSON.parse(xhr.responseText).response;
      $('section').append('<div>' +text+ '</div>');
      highlight(text, name); 
      };

    xhr.onerror = function() {
      $(".content").css("background-color", "red");
      alert('There was an error making the request.');
    };
    xhr.send();
  }

  function highlight(text, name) {
    var start = text.indexOf(name);
    var sub1 = text.substr(0,start);
    var sub2 = text.substr(start,name.length);
    var sub3 = text.substring(start+name.length, text.length);
    $("div").html(sub1+'<span class="highlight">'+sub2+'</span>'+sub3);
  }

var parseQueryString = function(queryString) {
    var params = {}
    var queries;
    var temp; 
    var i;
    var l;
 
    // Split into key/value pairs
    queries = queryString.split("&");
 
    // Convert the array of strings into an object
    for (i = 0, l = queries.length; i < l; i++) {
        temp = queries[i].split("=");
        params[temp[0]] = temp[1];
    }
 
    return params;
};

window.onload = function() {
  var query = window.location.search.substring(1);
  var params = parseQueryString(query);
  var gist = params.gist || "";
  var file = params.file ? "?file=" + encodeURIComponent(params.file) : "";
  
  document.getElementById("gist").src = "//gist.github.com/" + gist + file;
};

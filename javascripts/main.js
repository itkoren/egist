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
        params[temp[0]] = decodeURIComponent(temp[1]);
    }
 
    return params;
};

window.onload = function() {
  var query = window.location.search.substring(1);
  var params = parseQueryString(query);
  var code = document.getElementById("gist");
  var processed = 0;
  var attr;
  
  if (code && params) {
      for (attr in params) {
          if (params.hasOwnProperty(attr) && params[attr]) {
              code.setAttribute(attr, params[attr]);
              processed++;
          }
      }
  }
  
  if (0 < processed) {
    var po = document.createElement("script"); 
    po.setAttribute("type", "text/javascript"); 
    po.setAttribute("async", true);
    po.setAttribute("src", "//cdnjs.cloudflare.com/ajax/libs/gist-embed/1.7/gist-embed.min.js");
    
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(po, s);
  }
};

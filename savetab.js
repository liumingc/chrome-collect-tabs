function show() {
  urls = [];
  chrome.tabs.query({currentWindow: true}, function (tabs) {
    tabs.forEach(function (tab) {
      /*
      var desc = "";
      for (var i in tab) {
        desc += i + "=" + tab[i] + ";";
      }
      alert(desc);
      */
      urls.push(tab.url);
    })
    alert(urls.join(','))
    //res = urls.join('<br/>')
    //document.body.appendChild(res)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  clk = document.getElementById("clickme");
  if(clk) {
    addEventListener("click", function() { show() })
  } else {
    alert("buggy, but running");
  }
})

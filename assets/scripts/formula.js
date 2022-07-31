function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }
  
  readTextFile("assets/scripts/formulae.json", function(data){
    var formulae = JSON.parse(data);
    var selected = formulae[Math.floor(Math.random() * formulae.length)];
    document.getElementById('formula').innerHTML = selected;
    MathJax.typeset();
    console.log("MathJax loaded.")
  });
  
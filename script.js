//your code here
// script.js
var evaluatedText = document.getElementById("evaluatedText");
var letterCount = document.getElementById("letterCount");

evaluatedText.addEventListener("input", function () {
  var text = evaluatedText.value;
  var count = text.length;
  letterCount.innerText = count;
});

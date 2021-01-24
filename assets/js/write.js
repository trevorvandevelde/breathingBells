var count = document.getElementById('count');
var input = document.getElementById('input');

function wordCounter(text) {
  var text = input.value;
  var wordCount = text.match(/\S+/g).length;
  count.innerText = wordCount;

	var bar = document.getElementById("innerBar");
	if (wordCount <= 100) {
		bar.style.width = wordCount + '%';
	} else {
		bar.style.width = '100%';
	}
}

input.addEventListener('keyup', function(e){
  wordCounter(e.target.value);
});

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();

  h = checkTime(h);
  m = checkTime(m);
  document.getElementById('time').innerHTML = h + ":" + m;
  var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // prepend 0 for single digit #s
  return i;
}

startTime();

var moon = document.getElementById("moon");
var m = "☽";
moon.onclick = function darkMode() {
  if (moon.innerHTML.valueOf() == m.valueOf()) {
    document.documentElement.style.setProperty('--bg-color', '#303030');
    document.documentElement.style.setProperty('--text-color', '#e3e3e3');
    moon.innerHTML = "☀";
  } else {
    document.documentElement.style.setProperty('--bg-color', '#B1CDD6');
    document.documentElement.style.setProperty('--text-color', '#545454');
    moon.innerHTML = "☽";
  }
}
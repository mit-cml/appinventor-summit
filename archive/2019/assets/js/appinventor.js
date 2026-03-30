// -*- mode: javascript; js-indent-level: 2; -*-

function initEasterEgg() {
  var svgObject = document.getElementsByClassName('logo');
  var icons = svgObject[0].contentDocument.getElementsByClassName('blocklyIconGroup');
  if (icons && icons.length > 0) {
    var mutatorIcon = icons[0];
    mutatorIcon.addEventListener('click', function() {
      window.open('http://ai2.appinventor.mit.edu/?repo=http://appinventor.mit.edu/yrtoolkit/yr/aiaFiles/moodCounter/yr_mood_starter.asc')
    });
  }
}

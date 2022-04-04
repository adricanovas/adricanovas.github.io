/**
 * Particleground demo
 * @author Adrian Canovas - @adricanovas
 * Inspired by Jonathan Nicol work - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  particleground(document.getElementById('particles'), {
    dotColor: "#" + randomColor,
    lineColor: "#" + randomColor
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


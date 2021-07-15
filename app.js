'use strict';

let request = prompt('Input target');
let response = exports.BattlePokedex[request.split(' ').join('')].name.replace('-Y', 'y').replace('-X', 'x').toLowerCase();
console.time()

document.getElementById('image').src = `${exports.imageLink}${request}.gif`;
document.getElementById('name').innerHTML = exports.BattlePokedex[request].name;

function add(toDo) {
  if (toDo == '+') return document.getElementById('attempts').innerHTML++;
  if (document.getElementById('attempts').innerHTML == 0) return;
  if (toDo == '-') return document.getElementById('attempts').innerHTML--;
}
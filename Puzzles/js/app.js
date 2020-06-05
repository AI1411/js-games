"use strict";

var tiles = [];

function init() {
  var table = document.getElementById("table");

  for (var i = 0; i < 4; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 4; j++) {
      var td = document.createElement("td");
      var index = i * 4 + j;
      td.className = 'tile';
      td.index = index;
      td.value = index;
      td.textContent = index === 0 ? "" : index;
      td.onclick = click;
      tr.appendChild(td);
      tiles.push(td);
    }
    table.appendChild(tr);
  }

  for (var i = 0; i < 1000; i++) {
    click({srcElement: {index: Math.floor(Math.random() * 16)}})
  }
}

function click(e) {
  var i = e.srcElement.index;

  if (i - 4 >= 0 && tiles[i - 4].value === 0) {
    swap(i, i - 4);
  } else if (i + 4 < 16 && tiles[i + 4].value === 0) {
    swap(i, i + 4);
  } else if (i % 4 !== 0 && tiles[i - 1].value === 0) {
    swap(i, i - 1);
  } else if (i % 4 !== 3 && tiles[i + 1].value === 0) {
    swap(i, i + 1)
  }
}

function swap(i, j) {
  var tmp = tiles[i].value;
  tiles[i].textContent = tiles[j].textContent;
  tiles[i].value = tiles[j].value;
  tiles[j].textContent = tmp;
  tiles[j].value = tmp;
}

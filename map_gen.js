var row_len = 20;
var col_len = 20;

function randInt(l,h){
    Math.round(Math.random(l,h))
}

var map = Array(row_len + 2)
  .fill()
  .map(() => Array(col_len + 2).fill(0));
for (let row = 0; row < map.length; row++) {
  for (let col = 0; col < map[row].length; col++) {
    if ((row === 1 || row === 2) && (col === 1 || col === 2)) {
    } else if (row === row_len && col === col_len) {
      map[row][col] = 2;
    } else if (
      row === 0 ||
      row === row_len + 1 ||
      col === 0 ||
      col === col_len + 1
    ) {
      map[row][col] = 1;
    } else {
      map[row][col] = randInt(0, 1);
    }
  }
}

var y_len = map.length - 2;
var x_len = map[0].length - 2;
var no_way_out = true;
function find_exit(map, to_check, current_x, current_y, to_check_str, checked) {
  if (
    map[current_x + 1][current_y] === 2 &&
    !checked.some((r) => r === String([current_x + 1, current_y])) &&
    !to_check_str.some((r) => r === String([current_x + 1, current_y]))
  ) {
    no_way_out = false;
    return;
  }
  if (
    map[current_x - 1][current_y] === 2 &&
    !checked.some((r) => r === String([current_x - 1, current_y])) &&
    !to_check_str.some((r) => r === String([current_x - 1, current_y]))
  ) {
    no_way_out = false;
    return;
  }
  if (
    map[current_x][current_y + 1] === 2 &&
    !checked.some((r) => r === String([current_x, current_y + 1])) &&
    !to_check_str.some((r) => r === String([current_x, current_y + 1]))
  ) {
    no_way_out = false;
    return;
  }
  if (
    map[current_x][current_y - 1] === 2 &&
    !checked.some((r) => r === String([current_x, current_y - 1])) &&
    !to_check_str.some((r) => r === String([current_x, current_y - 1]))
  ) {
    no_way_out = false;
    return;
  }
  if (
    map[current_x + 1][current_y] === 0 &&
    !checked.some((r) => r === String([current_x + 1, current_y])) &&
    !to_check_str.some((r) => r === String([current_x + 1, current_y]))
  ) {
    let pos = [current_x + 1, current_y];
    to_check.push(pos);
    to_check_str.push(String(pos));
  }
  if (
    map[current_x - 1][current_y] === 0 &&
    !checked.some((r) => r === String([current_x - 1, current_y])) &&
    !to_check_str.some((r) => r === String([current_x - 1, current_y]))
  ) {
    let pos = [current_x - 1, current_y];
    to_check.push(pos);
    to_check_str.push(String(pos));
  }
  if (
    map[current_x][current_y + 1] === 0 &&
    !checked.some((r) => r === String([current_x, current_y + 1])) &&
    !to_check_str.some((r) => r === String([current_x, current_y + 1]))
  ) {
    let pos = [current_x, current_y + 1];
    to_check.push(pos);
    to_check_str.push(String(pos));
  }
  if (
    map[current_x][current_y - 1] === 0 &&
    !checked.some((r) => r === String([current_x, current_y - 1])) &&
    !to_check_str.some((r) => r === String([current_x, current_y - 1]))
  ) {
    let pos = [current_x, current_y - 1];
    to_check.push(pos);
    to_check_str.push(String(pos));
  }
}
function is_there_a_way_out() {
  while (true) {
    var pos = to_check[0];
    var current_x = pos[0];
    var current_y = pos[1];
    find_exit(map, to_check, current_x, current_y, to_check_str, checked);
    if (no_way_out === false) {
      return;
    }
    to_check.shift();
    to_check_str.shift();
    if (to_check_str.length === 0) {
      return;
    }
    checked.push(String(to_check[0]));
  }
}

function remove_random_wall() {
  let ran_row = randInt(1, row_len);
  let ran_col = randInt(1, col_len);
  while (map[ran_row][ran_col] !== 1) {
    ran_row = randInt(1, row_len);
    ran_col = randInt(1, col_len);
  }
  map[ran_row][ran_col] = 0;
  return ran_row, ran_col;
}
while (no_way_out === true) {
  var to_check = [[1, 1]];
  var to_check_str = [String([1, 1])];
  var checked = [];
  is_there_a_way_out();
  if (no_way_out === false) {
    break;
  }
  remove_random_wall();
}

console.log(map)
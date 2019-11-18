const container = document.getElementById("container");
const ctn_width = 850;
const ctn_height = 800;
var size_cur = 20;
var mode_cur = "mono";

function make_grid(size) {
  size_cur = size;
  for (var i = 0; i < size * size; i++) {
    var div = document.createElement("div");
    div.className = "block";
    div.style.background = "white";
    div.style.width = ctn_width / size + "px";
    div.style.height = ctn_height / size + "px";
    container.appendChild(div);
  }
}

function clear_grid() {
  var blocks = document.querySelectorAll(".block"),
    i;
  for (i = 0; i < blocks.length; ++i) {
    blocks[i].style.background = "white";
  }
}

function reset_grid() {
  container.innerHTML = "";
  size = prompt("Enter new grid size (up to 64).");
  if (size > 64) {
    size = 64;
  }
  make_grid(size);
  set_mode(mode_cur);
}

function set_mono() {
  var blocks = document.querySelectorAll(".block"),
    i;
  blocks.forEach(block => {
    block.addEventListener("mouseover", function(e) {
      e.target.style.background = "black";
    });
  });
}

function set_rgb() {
  var blocks = document.querySelectorAll(".block"),
    i;
  blocks.forEach(block => {
    block.addEventListener("mouseover", function(e) {
      var a = get_random_rgb(),
        b = get_random_rgb(),
        c = get_random_rgb();
      e.target.style.background = "rgb(" + a + "," + b + "," + c + ")";
    });
  });
}

function get_random_rgb() {
  return Math.floor(Math.random() * 255);
}

function set_gray() {
  var blocks = document.querySelectorAll(".block"),
    i;
  blocks.forEach(block => {
    block.style.opacity = 0;
    block.addEventListener("mouseover", function(e) {
      let op = block.style.opacity;
      if (op < 1) {
        op = parseFloat(op) + 0.1;
        block.style.opacity = op;
      }
    });
  });
}

function set_mode(mode) {
  mode_cur = mode;
  switch (mode) {
    case "mono":
      set_mono();
      break;
    case "rgb":
      set_rgb();
      break;
    case "gray":
      set_gray();
      break;
  }

  clear_grid();
}

// initial calling
 make_grid(size_cur);
 set_mode(mode_cur);

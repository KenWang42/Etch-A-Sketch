const container = document.getElementById('container');
const ctn_width = 850;
const ctn_height = 800;

function make_grid(size) {
  for (var i = 0; i < size * size; i++) {
    var div = document.createElement('div');
    div.className = "block";
    div.style.background = "white";
    div.style.width = ctn_width / size + "px";
    div.style.height = ctn_height / size + "px";
    container.appendChild(div);
  }
}

function clear_grid() {
  var blocks = document.querySelectorAll('.block'), i;
  for (i = 0; i < blocks.length; ++i) {
    blocks[i].style.background = "white";
  }
}

function reset_grid() {
  container.innerHTML = '';
  size = prompt("Enter new grid size (up to 64).");
  if (size > 64) {
    size = 64;
  } 
  make_grid(size);
  mono();
}

function mode_mono() {
  var blocks = document.querySelectorAll('.block'), i;
  blocks.forEach(block => {
    block.addEventListener('mouseover', function(e){
      e.target.style.background = "black";
    })
  })
}

function mode_rgb() {

}

function mode_grey() {
  
}

// initial calling
make_grid(20);
mono();

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mywidth = 100;
var myheight = 100;
currentX = canvas.width / 2;
currentY = canvas.height / 1.1;
var isDraggable = false;

/****************** Main beverage's text ***********************/
function text() {
  ctx.font = "20px Comic Sans MS";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("Drag and drop", canvas.width / 5.5, canvas.height / 4);
  ctx.fillText("the cube here", canvas.width / 5.5, canvas.height / 3.3);
}

main_beverage();
cube();

/********************* Main Beverage Overlay *********************/

function overlay() {
  ctx.fillStyle = "rgba(202, 200, 200, 0.5)";
  ctx.fillRect(0, 220, canvas.width / 3, canvas.height);
}

/******************** Main beverage's image *********************/
function main_beverage() {
  var image = new Image();
  image.src = "assets/coke.png";
  image.onload = function() {
    ctx.drawImage(image, 0, 220);
    overlay()
  };
}

/************************** Cube image **************************/
function cube() {
  other_image = new Image();
  other_image.src = "assets/single-cube.png";
  other_image.onload = function() {
    _Go();
    fillBeverage();
  };
}

function fillBeverage() {
if (currentX == canvas.width / 2 &&
  currentY == canvas.height / 1.2){
    ctx.fillStyle = "rgba(202, 200, 200, 0.5)";
    ctx.fillRect(0, 220, canvas.width / 3, canvas.height / 2);
  }
}


/*************************************************************
                        Cube Draging Start
**************************************************************/
function _Go() {
  _MouseEvents();

  setInterval(function() {
    _DrawImage();
  }, 1000 / 10);
}

function _DrawImage() {
  text();
  main_beverage();
  ctx.drawImage(
    other_image,
    currentX - other_image.width / 5,
    currentY - other_image.height / 5,
    mywidth,
    myheight
  );
}

setInterval(function() {
  _ResetCanvas();
  _DrawImage();
}, 1000 / 20);

function _ResetCanvas() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, -380, canvas.width, canvas.height);
  ctx.fillRect(200, 0, canvas.width, canvas.height);
}

function _MouseEvents() {
canvas.onmousedown = function(e) {
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;

  if (
    mouseX >= currentX - other_image.width / 2 &&
    mouseX <= currentX + other_image.width / 2 &&
    mouseY >= currentY - other_image.height / 2 &&
    mouseY <= currentY + other_image.height / 2
  ) {
    isDraggable = true;
  }
};

canvas.onmouseup = function(e) {
  isDraggable = false;
};

canvas.onmouseout = function(e) {
  isDraggable = false;
};
}

canvas.onmousemove = function(e) {
  if (isDraggable) {
    currentX = e.pageX - this.offsetLeft;
    currentY = e.pageY - this.offsetTop;
  }
};
/************************************************************
                            Cube Draging End
*************************************************************/

/******************* Beverages Work Start ******************/
const beverages = [
  {
    "name": "coke",
    "sugar": 39,
    image: new Image()
  },
  {
    "name": "pepsi",
    "sugar": 41,
    image: new Image()
  },
  {
    "name": "mountain_dew",
    "sugar": 46,
    image: new Image()
  },
  {
    "name": "sprite",
    "sugar": 38,
    image: new Image()
  },
  {
    "name": "7_up",
    "sugar": 38,
    image: new Image()
  },
  {
    "name": "fanta",
    "sugar": 44,
    image: new Image()
  },
  {
    "name": "red_bull",
    "sugar": 39,
    image: new Image()
  },
  {
    "name": "dr_pepper",
    "sugar": 40,
    image: new Image()
  },
];

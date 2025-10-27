// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(decreaseBlue);
  applyFilterNoBackground(reddify);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
// Applies a filter to the entire image and background, changing how it looks
function applyFilter(filterFunction) {
  for (var r = 0; r < image.length; r++) {
    var row = image[r];
    for (var c = 0; c < row.length; c++) {
      var pixel = image[r][c];
      var pixelArray = rgbStringToArray(pixel);
      // This is where I'll modify the color values later
      filterFunction(pixelArray);
      var upadtedPixel = rgbArrayToString(pixelArray);
      image[r][c] = upadtedPixel;
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
// Applies a filter to only the image and not the background
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (var r = 0; r < image.length; r++) {
    var row = image[r];
    for (var c = 0; c < row.length; c++) {
      var pixel = image[r][c];
      if (pixel !== backgroundColor) {
      var pixelArray = rgbStringToArray(pixel);
      filterFunction(pixelArray);
      var upadtedPixel = rgbArrayToString(pixelArray);
      image[r][c] = upadtedPixel;
      }
    }
  }  
}

// TODO 6: Create the keepInBounds function
// Keeps numbers for colors within a certain limit
function keepInBounds(limit) {
  return limit <= 0 ? 0 : limit >= 255 ? 255 : limit;
}

// TODO 4: Create reddify filter function
// Increases how red the image will appear
function reddify(pixelArr) {
  pixelArr[RED] += 200;
  pixelArr[RED] = keepInBounds(pixelArr[RED]);
}

// TODO 7 & 8: Create more filter functions
// Decreases the blueness of the image
function decreaseBlue(pixelArr) {
  pixelArr[BLUE] -= 50;
  pixelArr[BLUE] = keepInBounds(pixelArr[BLUE]);
}

// Increases the green value by the blue value
function increaseGreenByBlue(pixelArr) {
  pixelArr[GREEN] += pixelArr[BLUE];
  pixelArr[GREEN] = keepInBounds(pixelArr[GREEN]);
}

// CHALLENGE code goes below here

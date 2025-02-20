$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  //toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(300, 400, 10, 350, "blue");
  createPlatform(295, 605, 5, 1, "blue");
  createPlatform(275, 485, 35, 1, "blue");
  createPlatform(200, 300, 500, 10, "blue");
  createPlatform(200, 0, 10, 300, "blue");
  createPlatform(500, 300, 10, 300, "blue");
  createPlatform(510, 605, 4, 4, "blue");
  createPlatform(700, 500, 1, 1, "blue");
  createPlatform(800, 400, 100, 10, "blue");
  createPlatform(1100, 0, 10, 400, "blue");
  createPlatform(1100, 540, 10, 10, "blue");
  createPlatform(1300, 400, 5, 5, "blue") ;
  createPlatform(1120, 300, 0.1, 0.1, "blue");
  createPlatform(300, 100, 100, 10, "blue");
  createPlatform(320, 230, 50, 10, "blue")
  createPlatform(1300, 200, 100, 10, "red");
    
    


    // TODO 3 - Create Collectables

    createCollectable("diamond", 325, 50, 0, 0)
    createCollectable("diamond", 1325, 150)
    createCollectable("diamond", 1325, 700)
    
    // TODO 4 - Create Cannons
    
    createCannon("left", 650, 0.1);
    createCannon("bottom", 1300, 200);
    createCannon("bottom", 800, 3750, 100, 20000);
    createCannon("top", 700, 50000, 100000, 100000);
    createCannon("left", 400, 300);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

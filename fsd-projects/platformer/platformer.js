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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid()


    // TODO 2 - Create Platforms
    createPlatform(0, 700, 200, 20)
createPlatform(500, 500, 10, 290)
 createPlatform(300, 600, 200, 20)
createPlatform(600, 300, 200, 20)
 createPlatform(200, 900, 20, 290)   
 createPlatform(1300, 500, 200, 20)
 createPlatform(1000, 500, 200, 20)
 createPlatform(900, 350, 200, 20)
 createPlatform(700, 600, 200, 20)
createPlatform(1100, 700, 200, 200)
createPlatform(200, 400, 200, 20)
  createBadPlatform(0,739,20000,20)
  
// TODO 3 - Create Collectables
createCollectable("diamond", 1250, 600)


    
    // TODO 4 - Create Cannons
createCannon("right", 200,100)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

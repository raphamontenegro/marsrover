/*
 Rapha Montenegros Mars Rover exercise.
 Known bugs/issues that I couldn't fix:
 - command function only gets the first letter of a string. 
 For some reason the loop is not working and I can't find out why.
 - I tried to set the boundary so it wouldn't get out of the grid.
 It recognizes when it is out of the grid, 
 but the only logic to not allow it to go forward that I can think of is really complicated 
 and I don't think that is the correct way.
*/

// variables, objects and functions
var rover = {
  direction: "N",
  x: 0,
  y: 0
};

var currentPosition;

var travelLog = "X:" + rover.x + " " + "Y:" + rover.y;

var errorMessage = "Houston, we have a problem. Try again";

// turn left code block
function turnLeft(rover){
  console.log("turnLeft was called!");
  if (rover.direction === "N") {
    rover.direction = "W"
  } else if (rover.direction === "W") {
    rover.direction = "S"
  } else if (rover.direction === "S") {
    rover.direction = "E"
  } else if (rover.direction === "E") {
    rover.direction = "N"
  } else {
    alert(errorMessage)
  }
  return rover.direction
}

// turn right code block
function turnRight(rover){
  console.log("turnRight was called!");
  if (rover.direction === "N") {
    rover.direction = "E"
  } else if (rover.direction === "E") {
    rover.direction = "S"
  } else if (rover.direction === "S") {
    rover.direction = "W"
  } else if (rover.direction === "W") {
    rover.direction = "N"
  } else {
    alert(errorMessage)
  }
  return rover.direction
}

//move forward code block
function moveForward(rover) {
  console.log("moveForward was called")
  if (rover.x > 9 || rover.y > 9 || rover.x < 0 || rover.y < 0) {
    console.log(errorMessage)
  } else if (rover.direction === "N") {
    rover.y -= 1;
  } else if (rover.direction === "E") {
    rover.x += 1;
  } else if (rover.direction === "S") {
    rover.y += 1;
  } else if (rover.direction === "W") {
    rover.x -= 1;
  } else {
    alert(errorMessage);
  }
  currentPosition = ("X:" + rover.x) + (" Y:" + rover.y);
  travelLog += ", " + currentPosition
  console.log("Your current position is " + currentPosition + ".")
} 

//move back code block
function moveBack(rover) {
  console.log("moveBack was called")
  if (rover.x > 9 || rover.y > 9 || rover.x < 0 || rover.y < 0) {
    console.log(errorMessage)
  } else if (rover.direction === "N") {
    rover.y += 1;
  } else if (rover.direction === "E") {
    rover.x -= 1;
  } else if (rover.direction === "S") {
    rover.y -= 1;
  } else if (rover.direction === "W") {
    rover.x += 1;
  } else {
    alert(errorMessage);
  }
  currentPosition = ("X:" + rover.x) + (" Y:" + rover.y);
  travelLog += ", " + currentPosition
  console.log("Your current position is " + currentPosition + ".")
}
//commmand function
function command (string) {
  var string = string.split(",")
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "f") {
      return moveForward(rover);
    } else if (string[i] === "l") {
      return turnLeft(rover);
    } else if (string[i] === "r") {
      return turnRight(rover);      
    } else if (string[i] === "b") {
      return moveBack(rover)
    } else {
      console.log(errorMessage)
    }
  }
  currentPosition = ("X:" + rover.x) + (" Y:" + rover.y);
  console.log("Your current position is " + currentPosition + ".")
}
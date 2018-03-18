/*
 Rapha Montenegros Mars Rover exercise.
 -command function bug fixed.
 - For lack of time, took of the bonus boundary feature because rover would get stuck.
 - added travel log and currentPosition as an object of rover
 - I tried to set the boundary so it wouldn't get out of the grid.
 It recognizes when it is out of the grid, 
 but the only logic to not allow it to go forward that I can think of is really complicated 
 and I don't think that is the correct way.
*/

// variables, objects and functions
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  currentPosition: "X:0, Y:0",
  travelLog: "X:0, Y:0"

}; 

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
  if (rover.direction === "N") {
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
  rover.currentPosition = ("X:" + rover.x) + (" Y:" + rover.y);
  rover.travelLog += ", " + rover.currentPosition
  console.log("Your current position is " + rover.currentPosition + ".")
} 

//move back code block
function moveBack(rover) {
  console.log("moveBack was called")
  if (rover.direction === "N") {
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
  rover.currentPosition = ("X:" + rover.x) + (" Y:" + rover.y);
  rover.travelLog += ", " + rover.currentPosition
  console.log("Your current position is " + rover.currentPosition + ".")
}
//commmand function
function command (string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "f") {
      moveForward(rover);
    } else if (string[i] === "l") {
     turnLeft(rover);
    } else if (string[i] === "r") {
     turnRight(rover);      
    } else if (string[i] === "b") {
      moveBack(rover)
    } else {
      console.log(errorMessage)
    }
  }
  rover.currentPosition = ("X:" + rover.x) + (" Y:" + rover.y);
  console.log("Your current position is " + rover.currentPosition + ".")
}
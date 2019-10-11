let rover = 
{
  direction : "N",
  x : 0,
  y : 0,
  travelLog: [[0,0]]
};

function turnLeft(rover)
{
  switch(rover.direction)
    {
      case "N":
        rover.direction = "W";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "N";
        break;
      case "W":
        rover.direction = "S";
        break;
        }
};

function turnRight(rover)
{
  switch(rover.direction)
    {
      case "N":
        rover.direction = "E";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "S";
        break;
      case "W":
        rover.direction = "N";
        break;
        }
};

function moveForward(rover)
{
switch(rover.direction)
    {
      case "N":
        rover.y--;
        break;
      case "S":
        rover.y++;
        break;
      case "E":
        rover.x++;
        break;
      case "W":
        rover.y--;
        break;
        }
 };

function commands(str)
{
  for (i = 0; i < str.length; i++)       {
      switch (str[i]) 
        {
          case "f":
           moveForward(rover);
           rover.travelLog.push([rover.x,rover.y]);
           console.log(rover.travelLog);
           break;
          case "r":
           turnRight(rover);
           break;
          case "l":
           turnLeft(rover);
           break;
         }
   }
 
};

//commands("rffrfflfrff");

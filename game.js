
var Animal = function(speed, focus, name) {
  this.speed = speed;
  this.focus = focus;
  this.name = name;
  this.position = 0;
  this.report = function() {
    return this.name + " is at " + this.position;
  };
  this.run = function() {
    if (this.focus > (Math.random() * 10)) {
      this.position += this.speed;
    }
  };
  this.notYetWon = function () {
    var distance = 25;
    return this.position < distance;
  };
}

var turtle = new Animal(2, 8, "Cecil");
var rabbit = new Animal(9, 5, "Bugs");
var dog = new Animal(4, 4, "Bowser");

while(turtle.notYetWon() && rabbit.notYetWon() && dog.notYetWon()) {
  turtle.run();
  rabbit.run();
  dog.run();

  if (rabbit.position > (turtle.position + 9) || rabbit.position < (dog.position + 9)) {
    rabbit.focus--;
  }
};

console.log(turtle.report());
console.log(rabbit.report());
console.log(dog.report());

if (rabbit.position > turtle.position && rabbit.position > dog.position) {
  console.log(rabbit.name + " wins!");
} else if (turtle.position > rabbit.position && turtle.position > dog.position) {
  console.log(turtle.name + " wins!")
} else {
  console.log(dog.name + " wins!")
}
  
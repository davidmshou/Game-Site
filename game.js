$(".medium").on("click", function () {
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
    $("#bio").html(" " + rabbit.name + " wins!");
  } else if (turtle.position > rabbit.position && turtle.position > dog.position) {
    $("#bio").html(" " + turtle.name + " wins!");
  } else {
    $("#bio").html(" " + dog.name + " wins!");
  }

  $(function () {
    $("#bugstext").html(rabbit.report());
    $("#ceciltext").html(turtle.report());
    $("#bowsertext").html(dog.report());
  });
});
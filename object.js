var corolla = {
  brand: " Toyota",
  make: " corolla",
  type: " Sedan",
  color: " blue",
  yearOfRelease: 1997
};


var rangeRover = {
  brand: " Range Rover",
  make: " Sport",
  type: " SUV",
  color: " white",
  yearOfRelease: 2010
};


var pickup = {
  brand: " Nissan",
  make: " Hard Body",
  type: " Pick up Truck",
  color: " Grey",
  yearOfRelease: 2003
};
var cars =[corolla, rangeRover];
cars.unshift(pickup);
var i=0;

do{
  document.write("<p class=demo1>" + "This is a " + cars[i].brand + " car called a " + cars[i].make
   + ". <br> It is a " + cars[i].type + " which is " + cars[i].color + " and was released in " + cars[i].yearOfRelease + "<br/><br/>" + "</p>");
  i++;
}
while(i<cars.length);

$(document).ready(function(){
  $(".button").click(function(){
    $("*").fadeIn(1000);
  });
});

var cars = ["BMW ","Benz ","Audi ","VW ","Ruf"];

var text = "<ul>";
cars.pop();
 for (i = 0; i < cars.length; i++) {
      text += "<li>" + cars[i] + "</li>";
}
text += "</ul>"
document.getElementById("demo").innerHTML =text;

var cars = ["BMW ","Benz ","Audi ","VW ","Ruf"];
var i=0;
var text = "<ul>";
cars.pop();
do{ text += "<li>" + cars[i] +"</li>";
      i++;

}
while (i < cars.length)
text += "</ul>"
document.getElementById("demo1").innerHTML = text;

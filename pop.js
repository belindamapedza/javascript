var cars = ["BMW ", "Benz ", "Toyota "];
document.getElementById("demo").innerHTML="There are " + cars.length + " cars.... " + cars.toString();

cars.unshift("Lexus  ");
document.getElementById("rov").innerHTML= "There are now " + cars.length + "cars.... " + cars.toString();

cars.shift();
document.getElementById("maz").innerHTML="There are now " + cars.length + "cars.... " + cars.toString();
cars.shift();
document.getElementById("maz").innerHTML="There are now " + cars.length + "cars.... " + cars.toString();

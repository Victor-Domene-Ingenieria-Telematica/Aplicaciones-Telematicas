'use strict';

function conversor(dist, units) {
    if (dist === undefined && units === undefined)
        return "Error: both arguments are missing (distance and units)";
    else if (dist === undefined)
        return "Error: the first argument is missing (distance)";
    else if (units === undefined)
        return "Error: the second argument is missing (units)";
    else
        if(units === "m")
            return String(dist);
        else if(units === "cm")
            return String(dist * 100);
        else if(units === "in")
            return String(dist / 0.0254);
        else if(units === "yd")
            return String(dist / 0.9144);
        else
            return("Error: bad value for second argument");
}

let dist = "24";
let units = "yd";

// 1. Guardamos el resultado en una variable
let result = conversor(dist, units);

// .startsWith() --> función de JS para ver si un string empieza por cierto string
if (result.startsWith("Error:"))
    console.log(result);
else {
    console.log("Original distance:", dist, "m");
    console.log("Converted distance:", result, units);
}
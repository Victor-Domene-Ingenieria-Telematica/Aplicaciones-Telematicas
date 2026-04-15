'use strict';

let metro = 24;

console.log("PASAR DE METROS (M) A CENTIMETROS (CM)");
function mToCm(dist) {
    return dist * 100;
}
console.log("   ", metro, "m =", mToCm(metro), "cm");


console.log("PASAR DE METROS (M) A PULGADAS (IN)");
function mToIn(dist) {
    return dist / 0.0254;
}
console.log("   ", metro, "m =", mToIn(metro), "in");


console.log("PASAR DE METROS (M) A YARDAS (YD)");
function mToYd(dist) {
    return dist / 0.9144;
}
console.log("   ", metro, "m =", mToYd(metro), "yd");

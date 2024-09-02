function areaCirc(radio) {

const pi = Math.PI;
const area = pi * Math.pow(radio, 2);
return area;
}
const radio=5;
const area= areaCirc(radio);
console.log("el area del circulo es con radio " +radio+ " es: " + area) ;

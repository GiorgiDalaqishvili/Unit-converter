let type = document.getElementById("type")
let lengthPar = document.getElementById("length-paragraph")
let valumePar = document.getElementById("Valume-paragraph")
let massPar = document.getElementById("Mass-paragraph")
let num = 0


function pEnter() {
    num = type.value;
    convertMeters();
    convertLiters();
    convertKilo();
  }
  
  function convertMeters() {
    let meters = (num * 0.3048).toFixed(2);
    let feet = (num * 3.2808).toFixed(2);
    lengthPar.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`;
  }
  
  function convertLiters() {
    let liters = (num * 0.264172).toFixed(2);
    let gallons = (num * 3.78541).toFixed(2);
    valumePar.textContent = `${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters`;
  }
  
  function convertKilo() {
    let kilos = (num * 2.20462).toFixed(2);
    let pounds = (num * 0.453592).toFixed(2);
    massPar.textContent = `${num} kilos = ${kilos} pounds | ${num} pounds = ${pounds} kilos`;
  }
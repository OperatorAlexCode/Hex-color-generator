const randomizeBTN = document.getElementById("Randomize");
const Display = document.getElementById("Display");
const Root = document.querySelector(":root");
const SeedInput = document.getElementById("Seed");
const ErrorCode = document.getElementById("Error-code");

randomizeBTN.addEventListener("click", Creator);

const HexChart = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]; //Used for generating hex colors
const Allowed = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","X","#"];
const Invalids = ["",null,undefined,NaN];

let checker = (array, item) => !item.every(y => !array.includes(y)); //Checks if an item is not in an array
let verifyer = (array1, array2) => array2.every(y => array1.includes(y)); //Checks if every element is in array2 is in array1

//The Creator function generates hex colors
function Creator() {
    let newColor = SeedInput.value;
    newColor = newColor.replaceAll(" ","");
    newColor = newColor.toUpperCase();
    if (!newColor.includes("#")) {
        newColor = "#" + newColor;
    }
    if (!verifyer(Allowed, newColor.split(""))) {
        ErrorCode.innerHTML = "Invalid Character";
        return;
    }
    while (newColor.includes("X") === true){
        newColor = newColor.replace("X",String(HexChart[Math.floor(Math.random()*HexChart.length)]));
    }
    while (newColor.length < 7){
        newColor = newColor + String(HexChart[Math.floor(Math.random()*HexChart.length)]);
    }
    Root.style.setProperty('--Color', newColor);
    Display.innerHTML = newColor;
    ErrorCode.innerHTML = "";
}

Creator();
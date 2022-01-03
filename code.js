const randomizeBTN = document.getElementById("Randomize");
const Display = document.getElementById("Display");
const Root = document.querySelector(":root");
const SeedInput = document.getElementById("Seed");
const ErrorCode = document.getElementById("Error-code");

randomizeBTN.addEventListener("click", Switch);

const HexChart = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const Invalids = ["",null,undefined];

let checker = (array, item) => array.every(y => {![item].includes(y)});

// SeedInput.value != "" && SeedInput.value != null && SeedInput.value != undefined
function Switch() {
    let temp = SeedInput.value.split("");
    if (!checker(Invalids,temp)) {
        RandomSeed();
    }
    else {
        Random();
    }
}

function Random() {
    let newColor = "#";
    for (let x = 0; x < 6; x++){
        newColor = newColor + String(HexChart[Math.floor(Math.random()*HexChart.length)]);
    }
    Root.style.setProperty('--Color', newColor);
    Display.innerHTML = newColor;
}

function RandomSeed() {
    let newColor = SeedInput.value;
    newColor = newColor.replaceAll(" ","");
    newColor = newColor.toUpperCase();
    if (!newColor.includes("#")) {
        newColor = "#" + newColor;
    }
    while (newColor.includes("X") == true){
        newColor = newColor.replace("X",String(HexChart[Math.floor(Math.random()*HexChart.length)]));
    }
    while (newColor.length < 7){
        newColor = newColor + String(HexChart[Math.floor(Math.random()*HexChart.length)]);
    }
    Root.style.setProperty('--Color', newColor);
    Display.innerHTML = newColor;
}

Random();
const exploreButton = document.getElementById("Explore");
const oxygenMeter = document.getElementById("oxygen");
const lowO2Warning = document.getElementById("low-o2-warning");
let oxygen = 100;

exploreButton.addEventListener("click", function (event) {
    oxygen--;
    oxygenMeter.innerHTML = "O2: " + oxygen + "%";
    if (oxygen <= 15) {
        lowO2Warning.innerHTML = "Warning! You are running low on oxygen!";
    }
    if (oxygen < 1) {
        document.location.replace('lowoxygen');
    } else {
        fetch("/api/venus")
        .then(Item => console.log(Item));
    }
})
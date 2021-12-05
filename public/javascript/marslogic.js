const exploreButton = document.getElementById("Explore");
const oxygenMeter = document.getElementById("oxygen");
const lowO2Warning = document.getElementById("low-o2-warning");
const itemName = document.getElementById("item-name");
const itemRarity = document.getElementById("item-rarity");
const itemValue = document.getElementById("item-value");
let oxygen = 100;

exploreButton.addEventListener("click", function (event) {
    oxygen--;
    oxygenMeter.innerHTML = "O2: " + oxygen + "%";
    if (oxygen <= 15) {
        lowO2Warning.innerHTML = "Warning! You are running low on oxygen!";
    }
    if (oxygen < 1) {
        document.location.replace('lowoxygen');
    }
    fetch("/api/mars").then(function (response) {
        if (response.ok) {
            response.json().then(function (Item) {
                console.log(Item)
                itemName.innerHTML = Item.item_name;
                itemRarity.innerHTML = Item.rarity;
                itemValue.innerHTML = Item.price;
            })
        }
    })

    // fetch("/api/mars").then(Item => {
    //     console.log(Item)
    //     itemName.innerHTML = Item.item_name;
    //     itemRarity.innerHTML = Item.rarity;
    //     itemValue.innerHTML = Item.price;
    // });
})
const exploreButton = document.getElementById("Explore");
const oxygenMeter = document.getElementById("oxygen");
const lowO2Warning = document.getElementById("low-o2-warning");
const itemName = document.getElementById("item-name");
const itemRarity = document.getElementById("item-rarity");
const itemValue = document.getElementById("item-value");
const newItemMessage = document.getElementById("new-item-message");
let oxygen = 100;
var inventory = [];

function Init() {
    var items = localStorage.getItem("Inventory");
    if (items != undefined)
        inventory = JSON.parse(localStorage.getItem("Inventory"));
}

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
                console.log(Item);

                const userIdInput = document.getElementById('user-id');
                const userId = userIdInput ? userIdInput.value : -1;
                if(userId === -1) return;

                const key = `Inventory-${userId}`;

                Item = Item.Item;
                inventory[inventory.length] = Item;
                
                localStorage.setItem(key, JSON.stringify(inventory));

                newItemMessage.innerHTML = "You found a new item!"
                itemName.innerHTML = "Item Name: " + Item?.item_name;
                itemRarity.innerHTML = "Item Rarity: " + Item?.rarity;
                itemValue.innerHTML = "Item Value: " + Item?.price;
            })
        }
    })
})

Init();

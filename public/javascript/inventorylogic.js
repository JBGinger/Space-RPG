const inventoryElement = document.getElementById("inventory");

function FillInventory()
{
    var inventory = JSON.parse(localStorage.getItem("Inventory"));
    var result = "";
    console.log(inventory);
    for (var i = 0; i < inventory.length; i++)
    {
        result += "<tr><td>" + inventory[i].item_name + "</td><td>" + inventory[i].rarity + "</td><td>" + inventory[i].price + "</td></tr>";
    }
    inventoryElement.innerHTML = result;
}

FillInventory();
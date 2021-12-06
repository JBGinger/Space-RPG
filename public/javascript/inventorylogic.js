const inventoryElement = document.getElementById("inventory");

function FillInventory()
{

    const userIdInput = document.getElementById('user-id');
    const userId = userIdInput ? userIdInput.value : -1;
    if(userId === -1) return;

    const key = `Inventory-${userId}`;
    var inventory = JSON.parse(localStorage.getItem(key));
    if(!inventory) return;

    var result = "";
    console.log(inventory);
    for (var i = 0; i < inventory.length; i++)
    {
        result += "<tr><td>" + inventory[i].item_name + "</td><td>" + inventory[i].rarity + "</td><td>" + inventory[i].price + "</td></tr>";
    }
    inventoryElement.innerHTML = result;
}

FillInventory();
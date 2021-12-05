let api_url = User;

async function getUserApi(User){
    const response = await fetch(User)

    var data = await response.json()
    console.log(data);

}
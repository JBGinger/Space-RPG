var exploreButton = document.getElementById("Explore");

exploreButton.addEventListener("click", function(event) {
    fetch("/api/mars")
    .then(Item => console.log(Item));
})
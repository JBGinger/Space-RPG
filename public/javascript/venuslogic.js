var exploreButton = document.getElementById("Explore");

exploreButton.addEventListener("click", function(event) {
    fetch("/api/venus")
    .then(Item => console.log(Item));
})
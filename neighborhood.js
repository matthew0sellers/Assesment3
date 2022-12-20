document.getElementById("randomBtn").addEventListener("click", randomRestaurants)

let randomRestaurants = () => alert(`${restaurants.sample}`)

const restaurants = ["sushi", "pizza", "mexican", "asian"]
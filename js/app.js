const container = document.querySelector(".container")

const coffees = [
    { name: "UwU coffee", image: "images/coffee1.jpg" },
    { name: "Bear Coffe", image: "images/coffee2.jpg" },
    { name: "Bear v2 Coffe", image: "images/coffee3.jpg" },
    { name: "Ooo look at me coffee", image: "images/coffee4.jpg" },
    { name: "Sad Edgy coffe", image: "images/coffee5.jpg" },
    { name: "StarYucks coffe", image: "images/coffee6.jpg" },
    { name: "Kill me coffe", image: "images/coffee7.jpg" },
    { name: "sknigkers coffe", image: "images/coffee8.jpg" },
    { name: "I eat me cup coffee", image: "images/coffee9.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
        ({ name, image }) =>
            (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}
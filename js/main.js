
const nodo = document.getElementById("saludo");
const userName = prompt("State your Username ")
nodo.classList.add('saludo')
nodo.innerHTML = `<b>Welcome, ${userName}!</b>`;

const games = ["Zelda: Ocarine of time", "Fortnite", "Apex Legends", "Alice in Wonderland", "Call of Duty: Warzone", "Valorant", "Dead by daylight", "The Witcher: Wild Hunt"]



const nodoUL = document.createElement("ul");
for(let i = 0; i<games.length; i++){
    const nodoLI = document.createElement("li");
    nodoLI.innerText = games[i];
    nodoUL.appendChild(nodoLI);
}
nodoUL.classList.add('juegos');
document.body.appendChild(nodoUL);

mostrarRedes();
function mostrarRedes()
{
    const tituloH5 = document.createElement("h5");
    tituloH5.innerHTML = " FIND US IN OUR NETWORKS!";
    document.body.appendChild(tituloH5);
    tituloH5.classList.add('redes');
    const subRedes = document.createElement("p");
    subRedes.innerHTML = "<a href='https://www.instagram.com/'>Instagram</a> / <a href='https://www.facebook.com/'>Meta</a> / <a href='https://twitter.com/home'>Twitter</a>";
    document.body.appendChild(subRedes);
    subRedes.classList.add('redes');
}



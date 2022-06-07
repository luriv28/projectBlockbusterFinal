function initiateAdministracion()
{
    createTitle();
    createMenu();
}
createTitle();
createMenu();

function createTitle()
{
    const tituloH1 = document.createElement("h1");
    tituloH1.innerHTML = "GAME SYSTEM";
    const titular = document.querySelector(".tituloSystem")
    titular.appendChild(tituloH1)
}


function createMenu()
{
    let options = ["Add Game", "Search Game"]
    options.forEach((option)=>{
    const boton = document.createElement("button");
    boton.innerHTML = option;

    if (option === "Add Game")
    {
        boton.addEventListener("click", ()=>{
            addGame();
        })
    }
    else if(option === "Search Game")
    {
        boton.addEventListener("click", ()=>{
            let filtrados = searchGame();

        })
    }
    const botones = document.querySelector(".botones")

    botones.appendChild(boton)
    })
}

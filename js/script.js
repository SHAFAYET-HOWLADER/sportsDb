
// allPlayers
const allPlayers = () =>{
    const input = document.getElementById("inputField");
    const inputValue = input.value;
    //clear value
    input.value= "";
    //load data by fetching
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>displayPlayer(data.player))
}

// display player
const displayPlayer = (players) =>{
  const display = document.getElementById("displayPlayerCard");
  display.textContent = "";
  for(const player of players){
      console.log(player)
    const div = document.createElement("div");
    div.classList.add("stylePlayers");
    div.innerHTML = `
    <img src="${player.strThumb}">
    <h3> Name : ${player.strPlayer}</h3>
    <h3>Gender : ${player.strGender}</h3>
    <p> Id : ${player.idPlayer}</p>
    <button onclick="seeDetails('${player.idPlayer}')">See Details</button>
    `
    display.appendChild(div)
  }
}

const seeDetails = (unique) =>{
   const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${unique}`
   fetch(url)
   .then(res => res.json())
   .then(data => displaySeeDetails(data.players[0]))
}

const displaySeeDetails = (single) =>{
  const show = document.getElementById("showDetails");
  show.textContent = "";
  const div = document.createElement("div")
  div.classList.add("singlePlayer")
  div.innerHTML = `
  <img width="200px" src="${single.strThumb}">
  <h3> Name : ${single.idPlayer}</h3>
  <h3>Gender : ${single.strGender}</h3>
  <p> Id : ${single.strDescriptionEN.slice(0, 100)}</p>
  `
  show.appendChild(div)
}
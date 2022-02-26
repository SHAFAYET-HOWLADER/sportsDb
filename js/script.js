
// allPlayers
const allPlayers = () =>{
    const input = document.getElementById("inputField");
    const inputValue = input.value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}
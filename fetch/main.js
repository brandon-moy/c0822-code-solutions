fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/wooper')
  .then(response => response.json())
  .then(data => console.log(data));

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
}

async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/wooper');
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
}

getUsers();
getPokemon();

const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/:id', async (req, res) => {
  try {
    const pokemonId = req.params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const response = await fetch(url);
    const data = await response.json();
    const pokemonName = data.name;
    res.send(firstLetterUpperCase(pokemonName)); // Enviar solo el nombre como respuesta
  } catch (error) {
    res.status(500).send("WTF!");
  }
});

function firstLetterUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = app;

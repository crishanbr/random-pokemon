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
    res.send(pokemonName); // Enviar solo el nombre como respuesta
  } catch (error) {
    res.status(500).send("WTF!");
  }
});
app.listen(3000, () => console.log('Server ready'));

module.exports = app;
# Random Pokémon

Random Pokémon lo cree para obtener el nombre de un Pokémon a través de un comando en [streamelements](https://streamelements.com/) para mi canal de twitch [**crishanbr**](https://twitch.tv/crishanbr) ( *sigueme :)* )


## ¿Como funciona?
Este código implementa un servidor `express` alojado en [Vercel](https://vercel.com/) que utiliza la [PokéAPI](https://pokeapi.co/) para obtener información sobre un Pokémon devolviendo su nombre.

- Observa que se importa el módulo `express` y `node-fetch`, y se crea
    una instancia de la aplicación Express.
- La ruta principal del servidor está configurada para aceptar una
    solicitud GET con un parámetro de `id` en la URL.
- Cuando se recibe una solicitud en la ruta `/:id`, se extrae el valor
   del parámetro `id` y se construye una URL para llamar a la PokeAPI.
- Se realiza una solicitud a la PokeAPI utilizando la función `fetch`
   proporcionada por `node-fetch`. La respuesta se convierte en formato
   JSON y se extrae el nombre del Pokémon.
- El nombre del Pokémon se pasa a la función `firstLetterUpperCase()`,
   que convierte la primera letra en mayúscula.
- Finalmente, el nombre del Pokémon con la primera letra en mayúscula
   se envía como respuesta al cliente.

#### Código:

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

## Configuración

Asegúrate de tener Node.js instalado en tu entorno de desarrollo.

1. Clona este repositorio o descarga los archivos en tu máquina local.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```shell
   npm install
   ```

## Ejecución

1. Desde la terminal, en el directorio del proyecto, ejecuta el siguiente comando:

   ```shell
   yarn dev | npm dev
   ```

2. El servidor se iniciará y estará escuchando en el puerto por defecto (el puerto 3000).
3. Abre un navegador web y accede a la siguiente URL:

   ```
   http://localhost:3000/{id}
   ```

   Reemplaza `{id}` con el número de identificación del Pokémon que deseas obtener. Puede ser del `1 al 1010`
4. Verás el nombre del Pokémon solicitado con la primera letra en mayúscula.

¡Disfruta de la magia de la PokeAPI!

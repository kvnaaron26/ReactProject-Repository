import React, { useState } from "react";


function ItemCount () {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Añadir al Carrito");

  return (
    <div className="App">

      <h1>Desafio - Contador con boton</h1>
      <h3>Jeans Vaquero / Coleccion W-F 2022 </h3>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <p>{name}</p>
      <button onClick={() => setName("Añadido con éxito")}>Añadir al Carrito</button>

    </div>
  );
}

export default ItemCount;
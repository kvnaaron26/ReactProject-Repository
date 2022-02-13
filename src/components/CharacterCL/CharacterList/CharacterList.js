import React, { useState, useEffect } from "react";
import axios from "axios";

//LINK ROUTER DOM
import { Link } from "react-router-dom";

import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios("aqui va un link").then((res) => setCharacters(res.data));
  }, []);

  return (
    <div>
      {characters.map((char) => {
        return (
          <div>
            <Link to="kasdhajshdaljsdak">
              <CharacterCard data={char} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;

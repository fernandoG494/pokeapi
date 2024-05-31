import { useState } from "react";
import { Stack } from "@mui/material";

import { IPokemonItem } from "../interfaces/Pokemon";
import Pokeball from "../assets/Pokeball.png";

import "../styles/components/PokemonItem.css";

const PokemonItem = ({ url, name }: IPokemonItem) => {
  const [capitalizeName] = useState(
    name.charAt(0).toUpperCase() + name.slice(1)
  );

  // const [dataUrl, setDataUrl] = useState(url);

  return (
    <div className="PokemonItem-wrapper">
      <Stack direction="row" justifyContent="space-between">
        <div className="name">{capitalizeName}</div>
        <img src={Pokeball} alt="pokeball" className="Pokeball-icon" />
      </Stack>
    </div>
  );
};

export default PokemonItem;

import { useState } from "react";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Pokeball from "../assets/Pokeball.png";
import { Capitalize } from "../utils/utilities";
import { IPokemonItem } from "../interfaces/Pokemon";

import "../styles/components/PokemonItem.css";

const PokemonItem = ({ name }: IPokemonItem) => {
  const navigate = useNavigate();

  const [capitalizeName] = useState(Capitalize(name));

  const handlePokemonSelection = () => {
    navigate(`/${name}`);
  };

  return (
    <div
      className="PokemonItem-wrapper"
      onClick={() => handlePokemonSelection()}
    >
      <Stack direction="row" justifyContent="space-between">
        <div className="name">{capitalizeName}</div>
        <img src={Pokeball} alt="pokeball" className="Pokeball-icon" />
      </Stack>
    </div>
  );
};

export default PokemonItem;

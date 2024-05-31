import { useEffect } from "react";
import PokeapiIcon from "../assets/Icon.png";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { setSidePokemon } from "../store/slices/PokemonsSlices";

import "../styles/layout/SideSection.css";

const SideSection = () => {
  const initialPokemon = useSelector(
    (state: RootState) => state.pokemonsGlobal.sideSectionPokemon
  );

  const dispatcher = useDispatch();

  useEffect(() => {
    if (initialPokemon == "") {
      fetch("https://pokeapi.co/api/v2/pokemon/raichu")
        .then((response) => response.json())
        .then((result) => {
          dispatcher(setSidePokemon(result.sprites.front_default));
        });
    }
  });

  return (
    <div className="SideSection-wrapper">
      <img src={PokeapiIcon} className="Icon-wrapper" />
      <img src={initialPokemon != "" ? initialPokemon : ""} width={"50%"} />
    </div>
  );
};

export default SideSection;

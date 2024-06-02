import { IPokemonTypeSnack } from "../interfaces/Pokemon";

import "../styles/components/PokemonTypeSnack.css";
import { Capitalize } from "../utils/TextTransformers";

const PokemonTypeSnack = ({ type }: IPokemonTypeSnack) => {
  return <span className="type-wrapper">{Capitalize(type)}</span>;
};

export default PokemonTypeSnack;

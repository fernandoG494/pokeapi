import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import PokemonItem from "../components/PokemonItem";
import { IPokemonItem } from "../interfaces/Pokemon";
import {
  setGlobalPokemons,
  setPokemonIndex,
} from "../store/slices/PokemonsSlices";

import "../styles/layout/ContentSection.css";

const ContentSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_offset, setOffset] = useState(
    useSelector((state: RootState) => state.pokemonsGlobal.pokemonIndex)
  );

  const dispatcher = useDispatch();
  const pokemonsState: IPokemonItem[] = useSelector(
    (state: RootState) => state.pokemonsGlobal.pokemons
  );

  const offset = useSelector(
    (state: RootState) => state.pokemonsGlobal.pokemonIndex
  );

  const handleOffsetChange = (value: number) => {
    if (offset + value <= 0) {
      setOffset(0);
      dispatcher(setPokemonIndex(0));
    } else if (offset + value > 8) {
      setOffset(8);
      dispatcher(setPokemonIndex(8));
    } else {
      setOffset(offset + value);
      dispatcher(setPokemonIndex(offset + value));
    }
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
      .then((response) => response.json())
      .then(({ results }) => {
        dispatcher(setGlobalPokemons(results));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return (
    <div className="ContentSection-wrapper">
      <Stack direction="column">
        {pokemonsState.map((pokemon) => (
          <PokemonItem
            name={pokemon.name}
            key={pokemon.name}
            url={pokemon.url}
          />
        ))}
        <div className="pagination-controls">
          <Stack direction="row" justifyContent="space-between">
            <Button
              disabled={offset == 0 ? true : false}
              variant="outlined"
              onClick={() => handleOffsetChange(-1)}
            >
              Previous
            </Button>
            <Typography>{offset + 1}</Typography>
            <Button
              disabled={offset == 8 ? true : false}
              variant="outlined"
              onClick={() => handleOffsetChange(1)}
            >
              Next
            </Button>
          </Stack>
        </div>
      </Stack>
    </div>
  );
};

export default ContentSection;

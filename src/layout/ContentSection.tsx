import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setGlobalPokemons,
  setPokemonIndex,
} from "../store/slices/PokemonsSlices";
import { RootState } from "../store/store";
import PokemonItem from "../components/PokemonItem";
import { IPokemonItem } from "../interfaces/Pokemon";

import "../styles/layout/ContentSection.css";

const ITEMS_LIMIT = 7;
const POKEMONS_LIMIT = 20;
const LAST_POKEMONS_LIMIT = 10;

const ContentSection = () => {
  const [, setOffset] = useState(
    useSelector((state: RootState) => state.pokemonsGlobal.pokemonIndex)
  );

  const dispatcher = useDispatch();
  const pokemonsState: IPokemonItem[] = useSelector(
    (state: RootState) => state.pokemonsGlobal.pokemons
  );

  const pokemonIndex = useSelector(
    (state: RootState) => state.pokemonsGlobal.pokemonIndex
  );

  const handleOffsetChange = (value: number) => {
    if (pokemonIndex + value <= 0) {
      setOffset(0);
      dispatcher(setPokemonIndex(0));
    } else if (pokemonIndex + value > ITEMS_LIMIT) {
      setOffset(ITEMS_LIMIT);
      dispatcher(setPokemonIndex(ITEMS_LIMIT));
    } else {
      setOffset(pokemonIndex + value);
      dispatcher(setPokemonIndex(pokemonIndex + value));
    }
  };

  const calculatedLimit = () => {
    if (pokemonIndex == ITEMS_LIMIT) {
      return LAST_POKEMONS_LIMIT;
    } else {
      return POKEMONS_LIMIT;
    }
  };

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${calculatedLimit()}&offset=${
        pokemonIndex * 20
      }`
    )
      .then((response) => response.json())
      .then(({ results }) => {
        dispatcher(setGlobalPokemons(results));
      });
  }, [pokemonIndex]);

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
              disabled={pokemonIndex == 0 ? true : false}
              variant="outlined"
              onClick={() => handleOffsetChange(-1)}
            >
              Previous
            </Button>
            <Typography>{pokemonIndex + 1}</Typography>
            <Button
              disabled={pokemonIndex == ITEMS_LIMIT ? true : false}
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

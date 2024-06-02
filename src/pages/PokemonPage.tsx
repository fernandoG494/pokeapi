import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton, Stack, Typography } from "@mui/material";

import {
  setSelectedPokemon,
  setSidePokemon,
} from "../store/slices/PokemonsSlices";
import { RootState } from "../store/store";
import { Capitalize } from "../utils/TextTransformers";
import StatsDisplay from "../components/StatsDisplay";
import PokemonTypeSnack from "../components/PokemonTypeSnack";
import { IPokemonData, IPokemonItem } from "../interfaces/Pokemon";

import "../styles/pages/PokemonPage.css";

const PokemonPage = () => {
  const { name } = useParams();
  const dispatcher = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState<IPokemonData>(
    [] as unknown as IPokemonData
  );

  const storePokemon = useSelector(
    (state: RootState) => state.pokemonsGlobal.selectedPokemon
  );
  const storePokemons = useSelector(
    (state: RootState) => state.pokemonsGlobal.pokemons
  );

  const checkPokemonUrl = (indexedPokemon: IPokemonItem | undefined) => {
    if (indexedPokemon?.url) {
      return indexedPokemon.url;
    }
  };

  const handleDefaultPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/raichu")
      .then((response) => response.json())
      .then((result) => {
        dispatcher(setSidePokemon(result.sprites.front_default));
        dispatcher(setSelectedPokemon(""));
      });
  };

  useEffect(() => {
    if (storePokemon != name) {
      setIsLoading(true);

      const indexedPokemon: IPokemonItem | undefined = storePokemons.find(
        (pokemon: IPokemonItem) => pokemon.name == name
      );

      const url = checkPokemonUrl(indexedPokemon);

      if (url) {
        fetch(url)
          .then((response) => response.json())
          .then((result) => {
            dispatcher(setSelectedPokemon(result));
            setPokemon(result);
            dispatcher(setSidePokemon(result.sprites.front_default));
            setIsLoading(false);
          });
      }
    }
  }, []);

  return (
    <div className="PokemonDetails-wrapper">
      <div>
        <Link
          to="/"
          className="link-text"
          onClick={() => handleDefaultPokemon()}
        >
          Go back
        </Link>
      </div>
      {isLoading ? (
        <div>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="rectangular" height={60} />
          <Stack direction={"row"} spacing={2} sx={{ marginTop: "10px" }}>
            <Skeleton
              variant="rectangular"
              height={250}
              sx={{ marginTop: "10px", width: "50%" }}
            />
            <Skeleton
              variant="rectangular"
              height={250}
              sx={{ marginTop: "10px", width: "50%" }}
            />
          </Stack>
        </div>
      ) : (
        <Stack direction="column">
          <div className="type-wrapper">
            <Stack spacing={2}>
              <Typography variant="h6">Type</Typography>
              <Stack direction="row" justifyContent="center">
                {pokemon.types.map(({ type }) => {
                  return <PokemonTypeSnack type={type.name} key={type.name} />;
                })}
              </Stack>
            </Stack>
          </div>
          <div className="data-wrapper">
            <Stack direction="row" justifyContent="space-around">
              <span>{`Number: ${pokemon.id}`}</span>
              <span>{`Name: ${Capitalize(pokemon.name)}`}</span>
              <span>{`Height: ${pokemon.height}`}</span>
              <span>{`Weight: ${pokemon.weight}`}</span>
            </Stack>
          </div>
          <div className="stats-wrapper">
            <Stack direction="row" spacing={3} sx={{ marginTop: "20px" }}>
              <Stack
                direction="column"
                alignItems="flex-start"
                spacing={2}
                sx={{ width: "50%" }}
              >
                <Typography variant="h6">Stats</Typography>
                <StatsDisplay data={pokemon} />
              </Stack>
              <Stack sx={{ textAlign: "center", width: "50%" }}>
                <Typography variant="h6">Abilities</Typography>
                <Stack direction="column">
                  {pokemon.abilities.map(({ ability }) => {
                    return <div key={ability.name}>{ability.name}</div>;
                  })}
                </Stack>
              </Stack>
            </Stack>
          </div>
        </Stack>
      )}
    </div>
  );
};

export default PokemonPage;

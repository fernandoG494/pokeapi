import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  sideSectionPokemon: "",
  selectedPokemon: "",
  pokemonIndex: 0,
};

const PokemonSlice = createSlice({
  name: "pokemonsGlobal",
  initialState,
  reducers: {
    setSidePokemon: (state, action) => {
      state.sideSectionPokemon = action.payload;
    },
    setGlobalPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
    setPokemonIndex: (state, action) => {
      state.pokemonIndex = action.payload;
    },
  },
});

export const {
  setSidePokemon,
  setGlobalPokemons,
  setSelectedPokemon,
  setPokemonIndex,
} = PokemonSlice.actions;
export default PokemonSlice.reducer;

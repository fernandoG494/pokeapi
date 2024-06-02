import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonIndex: 0,
  pokemons: [],
  selectedPokemon: "",
  sideSectionPokemon: "",
};

const PokemonSlice = createSlice({
  name: "pokemonsGlobal",
  initialState,
  reducers: {
    setGlobalPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setPokemonIndex: (state, action) => {
      state.pokemonIndex = action.payload;
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
    setSidePokemon: (state, action) => {
      state.sideSectionPokemon = action.payload;
    },
  },
});

export const {
  setGlobalPokemons,
  setPokemonIndex,
  setSelectedPokemon,
  setSidePokemon,
} = PokemonSlice.actions;
export default PokemonSlice.reducer;

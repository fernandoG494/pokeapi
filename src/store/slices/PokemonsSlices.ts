import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  sideSectionPokemon: "",
  selectedPokemon: "",
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
  },
});

export const { setSidePokemon, setGlobalPokemons, setSelectedPokemon } =
  PokemonSlice.actions;
export default PokemonSlice.reducer;

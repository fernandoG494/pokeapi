import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  sideSectionPokemon: "",
};

const PokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setSidePokemon: (state, action) => {
      state.sideSectionPokemon = action.payload;
    },
    setGlobalPokemons: () => {},
  },
});

export const { setSidePokemon, setGlobalPokemons } = PokemonSlice.actions;
export default PokemonSlice.reducer;

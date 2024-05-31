import { configureStore } from "@reduxjs/toolkit";
import PokemonsReducer from "../store/slices/PokemonsSlices";

export const store = configureStore({
  reducer: {
    pokemonsGlobal: PokemonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

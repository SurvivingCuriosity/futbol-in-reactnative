import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nombreCompleto: "Fernando Rodríguez Esteban",
  username: "fxy",
  email: "ferrodest99@gmail.com",
  ciudad: "Salamanca",
  futbolinesAnadidos: "0",
  puntuacion: 128,
  imagen: "",
  preferencias: {
    mostrarEmail: false,
    mostrarCiudad: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    rename: (state) => {
      state.user = true;
    },
    changeCity: (state) => {
      state.user = false;
    },
  },
});

export const { rename, changeCity } = userSlice.actions;
export default userSlice.reducer;

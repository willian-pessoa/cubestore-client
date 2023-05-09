import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  isLoged: false,
  userId: null,
  token: null,
  role: null,
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    },
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setLogin: (state) => {
      state.isLoged = true
    },
    setLogout: () => initialState,
    setRole: (state, action) => {
      state.role = action.payload
    }
  }
})

export const { setMode, setUserId, setToken, setLogin, setLogout, setRole } = globalSlice.actions

export default globalSlice.reducer
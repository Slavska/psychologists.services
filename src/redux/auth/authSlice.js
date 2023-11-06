import { createSlice } from "@reduxjs/toolkit";
import { signin, signup, signout } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: {
    email: null,
    displayName: "",
    uid: "",
  },
  favoritePsychologists: [],
  isRefreshing: false,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleFavoritePsychologist: (state, action) => {
      const psychologistIndex = action.payload;
      if (state.favoritePsychologists.includes(psychologistIndex)) {
        state.favoritePsychologists = state.favoritePsychologists.filter(
          (index) => index !== psychologistIndex
        );
      } else {
        state.favoritePsychologists.push(psychologistIndex);
      }
    },
    updateFavoritePsychologists: (state, action) => {
      state.favoritePsychologists = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(signin.pending, handlePending)
      .addCase(signin.rejected, handleRejected)
      .addCase(signin.fulfilled, (state, action) => {
        const { email, displayName, uid } = action.payload;
        state.user.email = email;
        state.user.uid = uid;
        state.user.displayName = displayName;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(signup.pending, handlePending)
      .addCase(signup.rejected, handleRejected)
      .addCase(signup.fulfilled, (state, action) => {
        const { email, displayName, uid } = action.payload;
        state.user.email = email;
        state.user.uid = uid;
        state.user.displayName = displayName;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(signout.pending, handlePending)
      .addCase(signout.rejected, handleRejected)
      .addCase(signout.fulfilled, (state, action) => {
        state.user.email = null;
        state.user.displayName = "";
        state.user.uid = "";
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = null;
      });
  },
});

export const { toggleFavoritePsychologist, updateFavoritePsychologists } =
  authSlice.actions;
export const authReducer = authSlice.reducer;

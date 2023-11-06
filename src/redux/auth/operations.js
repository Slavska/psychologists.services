import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { child, get, set } from "firebase/database";
import { auth, usersRef } from "../../../config";

export const signin = createAsyncThunk(
  "signin",
  async ({ email, password }, thunkAPI) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = {
        uid: credentials.user.uid,
        email: credentials.user.email,
      };
      const displayName = await findUserDisplayName(user.uid);
      user.displayName = displayName;

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const findUserDisplayName = async (uid) => {
  const userSnapshot = await get(usersRef);
  if (userSnapshot.exists()) {
    const userData = userSnapshot.val();
    for (const userUid in userData) {
      if (userUid === uid) {
        return userData[userUid].displayName;
      }
    }
  }
  return null;
};

export const signup = createAsyncThunk(
  "signup",
  async ({ email, password, name }, thunkAPI) => {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name
      );
      await thunkAPI.dispatch(signin({ email, password }));

      const user = {
        email: credentials.user.email,
        password: credentials.user.password,
        displayName: name,
        uid: credentials.user.uid,
      };
      const usersSnapshot = await get(usersRef);
      const usersData = usersSnapshot.val() || {};

      usersData[credentials.user.uid] = {
        email: user.email,
        displayName: user.displayName,
      };

      await set(usersRef, usersData);

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signout = createAsyncThunk("signout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addToFavorites = async (userId, psychologistIndexes) => {
  const userRef = child(usersRef, userId);
  const favoritePsychologistsRef = child(userRef, "favoritePsychologists");
  const snapshot = await get(favoritePsychologistsRef);
  const currentFavorites = snapshot.val() || [];
  psychologistIndexes.forEach((psychologistIndex) => {
    if (!currentFavorites.includes(psychologistIndex)) {
      currentFavorites.push(psychologistIndex);
    }
  });
  await set(favoritePsychologistsRef, currentFavorites);
};

export const removeFromFavorites = async (userId, psychologistKey) => {
  const userRef = child(usersRef, userId);
  const favoritePsychologistsRef = child(userRef, "favoritePsychologists");
  const snapshot = await get(favoritePsychologistsRef);
  const currentFavorites = snapshot.val() || [];
  const updatedFavorites = currentFavorites.filter(
    (key) => key !== psychologistKey
  );
  await set(favoritePsychologistsRef, updatedFavorites);
};

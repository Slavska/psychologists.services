export const selectUserName = (state) => state.auth.user.displayName;

export const selectUserEmail = (state) => state.auth.user.email;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectUser = (state) => state.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectUid = (state) => state.auth.user.uid;

export const selectFavorites = (state) => state.auth.favoritePsychologists;

const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUserName = state => state.auth.user.name;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectIsRefreshing,
};

export const getUsername = store => {
  return store.username;
}

export const getReposForUser = store => {
  return store.repos.items;
}

export const getTotalRepoCount = store => {
  return store.repos.totalCount;
}

export const getCurrentPage = store => {
  return store.repos.currentPage;
}

export const isFetching = store => {
  return store.repos.isFetching;
}

export const isError = store => {
  return store.repos.error;
}

export const getTheme = store => {
  return store.darkTheme;
}

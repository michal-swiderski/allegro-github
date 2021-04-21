export const getUsername = store => {
  return store.username;
}

export const getReposForUser = store => {
  return store.repos.repos;
}

export const getTotalRepoCount = store => {
  return store.repos.totalCount;
}

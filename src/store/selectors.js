export const getUsername = store => {
  return store.repos.username;
}

export const getReposForUser = ({repos : {items, currentPage, itemsPerPage}}) => {
  return items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
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

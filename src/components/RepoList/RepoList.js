import React from 'react';
import RepoTile from "../RepoTile/RepoTile";
import {useSelector} from "react-redux";
import {getReposForUser, getUsername, isError} from "../../store/selectors";
import {ErrorWrapper} from "./styles";

const RepoList = props => {
  const repos = useSelector(getReposForUser);
  const username = useSelector(getUsername);
  const error = useSelector(isError);

  if (error) {
    return (
      <ErrorWrapper>Something went wrong :( Try again</ErrorWrapper>
    )
  }

  if (username === '') {
    return (
      <ErrorWrapper>Nothing to see here yet, type a username in the box above!</ErrorWrapper>
    );
  }

  const repoTiles = repos.map(repo => (
    <RepoTile repo={repo} key={repo.id}/>
  ));

  return (
    <div>
      {repoTiles}
    </div>
  );
};

RepoList.propTypes = {};

export default RepoList;

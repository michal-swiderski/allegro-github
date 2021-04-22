import React, {useEffect} from 'react';
import RepoTile from "../RepoTile/RepoTile";
import {useDispatch, useSelector} from "react-redux";
import {getReposForUser, getUsername, isError, isFetching} from "../../store/selectors";
import {changePage} from "../../store/actions";
import {ErrorWrapper} from "./styles";

const RepoList = props => {
  const dispatch = useDispatch();

  const repos = useSelector(getReposForUser);
  const username = useSelector(getUsername);
  const error = useSelector(isError);

  if(error) {
    return (
      <ErrorWrapper>Something went wrong :( Try again</ErrorWrapper>
    )
  }

  if(username === '') {
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

RepoList.propTypes = {

};

export default RepoList;

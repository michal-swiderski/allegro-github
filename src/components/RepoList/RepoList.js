import React, {useEffect} from 'react';
import RepoTile from "../RepoTile/RepoTile";
import {useDispatch, useSelector} from "react-redux";
import {getReposForUser, isFetching} from "../../store/selectors";
import {changePage} from "../../store/actions";

const RepoList = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePage(1));
  }, [dispatch])

  const repos = useSelector(getReposForUser);
  // const fetching = useSelector(isFetching);

  const repoTiles = repos.map(repo => (
    <RepoTile repo={repo} key={repo.id}/>
  ))

  return (
    <div>
      {repoTiles}
    </div>
  );
};

RepoList.propTypes = {

};

export default RepoList;

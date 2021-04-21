import React from 'react';
import RepoTile from "../RepoTile/RepoTile";
import {useSelector} from "react-redux";
import {getReposForUser} from "../../store/selectors";

const RepoList = props => {

  const repos = useSelector(getReposForUser);

  if(!repos.length) {
    return <div>loading</div>;
  }

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

import React from 'react';
import RepoTile from "./RepoTile/RepoTile";
import {useSelector} from "react-redux";
import {getReposForUser, getTotalRepoCount, getUsername, isError, isFetching} from "../../store/selectors";
import {ErrorWrapper, NoWrap} from "./styles";
import {StyledLink} from "../common/Link/Link";
import {ERROR_USER_NOT_FOUND} from "../../constants";
import {range} from "lodash";

const RepoList = () => {
  const repos = useSelector(getReposForUser);
  const username = useSelector(getUsername);
  const total = useSelector(getTotalRepoCount);
  const error = useSelector(isError);
  const fetching = useSelector(isFetching);

  if (username === '') {
    return <ErrorWrapper>Nothing to see here, type a username into the box above!</ErrorWrapper>;
  }

  if (total === 0) {
    return (
      <ErrorWrapper>
        <span>
          <StyledLink href={`https://github.com/${username}`}>This user</StyledLink>&nbsp;
          does not have any public repositories.
        </span>
      </ErrorWrapper>
    )
  }

  if (error) {
    let errorMessage;
    if (error === ERROR_USER_NOT_FOUND) {
      errorMessage = <>{`User ${username} not found.`} <NoWrap>¯\_(ツ)_/¯</NoWrap></>;
    } else {
      errorMessage = <>{`Something went wrong. Try again`} <NoWrap>(╯°□°)╯︵┻━┻</NoWrap></>;
    }
    return <ErrorWrapper>{errorMessage}</ErrorWrapper>;
  }

  if (fetching) {
    return <div>{range(0, 5).map(idx => <RepoTile key={idx} unloaded/>)}</div>;
  }

  return <div>{repos.map(repo => <RepoTile repo={repo} key={repo.id}/>)}</div>;
};

export default RepoList;

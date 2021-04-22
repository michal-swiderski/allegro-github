import React from 'react';
import PropTypes from 'prop-types';
import {BadgesWrapper, DescriptionText, MainWrapper, RepoLink} from "./styles";
import Badge from "./Badge/Badge";
import {faCode, faCodeBranch, faStar} from "@fortawesome/free-solid-svg-icons";
import {StyledLink} from "../common/Link/Link";

const RepoTile = ({repo, mock}) => {

  return (
    <MainWrapper>
      <StyledLink href={repo.clone_url} target="_blank">{repo.name}</StyledLink>
      <div>
        <DescriptionText>{repo.description}</DescriptionText>
      </div>
      <BadgesWrapper>
        <Badge icon={faStar} label={repo.stargazers_count}/>
        {repo.language && <Badge icon={faCode} label={repo.language}/>}
        <Badge icon={faCodeBranch} label={repo.forks_count}/>
      </BadgesWrapper>
    </MainWrapper>
  );
};

RepoTile.propTypes = {
  repo: PropTypes.object.isRequired,
  mock: PropTypes.bool
};

export default RepoTile;

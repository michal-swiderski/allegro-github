import React from 'react';
import PropTypes from 'prop-types';
import {BadgesWrapper, DescriptionText, MainWrapper, MockRectangle} from "./styles";
import Badge from "./Badge/Badge";
import {faBalanceScale, faCode, faCodeBranch, faStar} from "@fortawesome/free-solid-svg-icons";
import {StyledLink} from "../common/Link/Link";
import dayjs from 'dayjs';

const RepoTile = ({repo, unloaded}) => {
  if(unloaded) {
    return (
      <MainWrapper>
        <MockRectangle width="25%"/>
        <MockRectangle width="75%"/>
        <MockRectangle width="0%"/>
        <MockRectangle width="12.5%"/>
      </MainWrapper>
    )
  }

  return (
    <MainWrapper data-testid="repo-tile">
      <StyledLink href={repo.clone_url} target="_blank">{repo.name}</StyledLink>
      <div>
        <DescriptionText>{repo.description}</DescriptionText>
      </div>
      <BadgesWrapper>
        <Badge icon={faStar} label={repo.stargazers_count}/>
        {repo.language && <Badge icon={faCode} label={repo.language}/>}
        <Badge icon={faCodeBranch} label={repo.forks_count}/>
        {repo.license && <Badge icon={faBalanceScale} label={repo.license.name}/>}
        <Badge label={`Updated ${dayjs().to(dayjs(repo.updated_at))}`}/>
      </BadgesWrapper>
    </MainWrapper>
  );
};

RepoTile.propTypes = {
  repo: PropTypes.object,
  unloaded: PropTypes.bool
};

export default React.memo(RepoTile);

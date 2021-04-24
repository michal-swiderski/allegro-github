import React from "react";
import {MainWrapper, PagesWrapper} from "./styles";
import Button from "../common/Button/Button";
import {useSelector} from "react-redux";
import {getCurrentPage, getTotalRepoCount, getUsername} from "../../store/selectors";
import {useHistory} from "react-router-dom";

const Pagination = () => {
  const history = useHistory();

  const username = useSelector(getUsername);
  const totalCount = useSelector(getTotalRepoCount);
  const currentPage = useSelector(getCurrentPage);

  const pageCount = Math.ceil(totalCount / 5);

  const handlePreviousClick = () => {
    history.push(`/${username}/${currentPage - 1}`);
  };

  const handleNextClick = () => {
    history.push(`/${username}/${currentPage + 1}`);
  };

  return (
    <MainWrapper>
      <Button onClick={handlePreviousClick} disabled={currentPage === 1}>Previous</Button>
      <PagesWrapper>{currentPage}&nbsp;/&nbsp;{pageCount}</PagesWrapper>
      <Button onClick={handleNextClick} disabled={currentPage === pageCount}>Next</Button>
    </MainWrapper>
  );
};

Pagination.propTypes = {

};

export default Pagination;

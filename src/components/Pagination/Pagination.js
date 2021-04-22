import React from "react";
import {MainWrapper, PagesWrapper} from "./styles";
import Button from "../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {changePage} from "../../store/actions";
import {getCurrentPage, getTotalRepoCount} from "../../store/selectors";

const Pagination = props => {
  const dispatch = useDispatch();

  const totalCount = useSelector(getTotalRepoCount);
  const currentPage = useSelector(getCurrentPage);
  const pageCount = Math.ceil(totalCount / 5);

  const handlePreviousClick = () => {
    dispatch(changePage(currentPage - 1));
  };

  const handleNextClick = () => {
    dispatch(changePage(currentPage + 1));
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

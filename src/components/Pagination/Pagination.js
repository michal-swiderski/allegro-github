import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {MainWrapper} from "./styles";
import Button from "../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {fetchRepos} from "../../store/actions";
import {getTotalRepoCount} from "../../store/selectors";

const Pagination = props => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const totalCount = useSelector(getTotalRepoCount);
  const pageCount = Math.ceil(totalCount / 5);

  useEffect(() => {
    dispatch(fetchRepos(currentPage));
  }, [currentPage, dispatch])

  const handlePreviousClick = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if(currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <MainWrapper>
      <Button onClick={handlePreviousClick}>Previous</Button>
      <span>{currentPage} / {pageCount}</span>
      <Button onClick={handleNextClick}>Next</Button>
    </MainWrapper>
  );
};

Pagination.propTypes = {

};

export default Pagination;

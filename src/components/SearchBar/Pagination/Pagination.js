import React from "react";
import {MainWrapper, PagesWrapper} from "./styles";
import Button from "../../common/Button/Button";
import {useSelector} from "react-redux";
import {getCurrentPage, getTotalRepoCount, getUsername} from "../../../store/selectors";
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
  const history = useHistory();

  const username = useSelector(getUsername);
  const totalCount = useSelector(getTotalRepoCount);
  const currentPage = useSelector(getCurrentPage);

  const pageCount = Math.ceil(totalCount / 5);

  const handleFirstClick = () => {
    history.push(`/${username}/1`);
  };

  const handlePreviousClick = () => {
    history.push(`/${username}/${currentPage - 1}`);
  };

  const handleNextClick = () => {
    history.push(`/${username}/${currentPage + 1}`);
  };

  const handleLastClick = () => {
    history.push(`/${username}/${pageCount}`);
  };

  return (
    <MainWrapper>
      <Button onClick={handleFirstClick} disabled={currentPage === 1} title="First page"><FontAwesomeIcon icon={faAngleDoubleLeft}/></Button>
      <Button onClick={handlePreviousClick} disabled={currentPage === 1} title="Previous page"><FontAwesomeIcon icon={faAngleLeft}/></Button>
      <PagesWrapper>{currentPage}&nbsp;/&nbsp;{pageCount}</PagesWrapper>
      <Button onClick={handleNextClick} disabled={currentPage === pageCount} title="Next page"><FontAwesomeIcon icon={faAngleRight}/></Button>
      <Button onClick={handleLastClick} disabled={currentPage === pageCount} title="Last page"><FontAwesomeIcon icon={faAngleDoubleRight}/></Button>
    </MainWrapper>
  );
};

Pagination.propTypes = {

};

export default Pagination;

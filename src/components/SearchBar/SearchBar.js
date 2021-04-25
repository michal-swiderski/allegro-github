import React, {useEffect, useState} from 'react';
import {ButtonWrapper, InputWrapper, MainWrapper, PaginationWrapper, SearchWrapper} from "./styles";
import TextInput from "../common/Input/TextInput";
import {useDispatch, useSelector} from "react-redux";
import Button from "../common/Button/Button";
import {getCurrentPage, getTotalRepoCount, getUsername, isError} from "../../store/selectors";
import Pagination from "./Pagination/Pagination";
import {useHistory, useParams} from "react-router-dom";
import {fetchPage} from "../../store/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');

  const storeUsername = useSelector(getUsername);
  const error = useSelector(isError);
  const total = useSelector(getTotalRepoCount);
  const currentPage = useSelector(getCurrentPage);
  const history = useHistory();

  const params = useParams();

  useEffect(() => {
    setUsername(storeUsername);
  }, [storeUsername]);

  const handleChange = e => {
    setUsername(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    //if an error occured, manually dispatch a fetch action to force a refresh
    if (error && username === storeUsername) {
      return dispatch(fetchPage(username, currentPage || Number(params.page)));
    }
    if (username) {
      history.push(`/${username}/1`);
    } else {
      history.push(`/`);
    }

  }

  const showPagination = !error && !!storeUsername && total > 0;

  return (
    <MainWrapper>
      <PaginationWrapper>
        {showPagination && <Pagination/>}
      </PaginationWrapper>
      <SearchWrapper onSubmit={handleSubmit}>
        <InputWrapper>
          <TextInput fullWidth placeholder="Username..." value={username} onChange={handleChange}/>
        </InputWrapper>
        <ButtonWrapper>
          <Button fullWidth disabled={username === ''} title="Search">Search</Button>
        </ButtonWrapper>
      </SearchWrapper>
    </MainWrapper>
  );
};

export default SearchBar;

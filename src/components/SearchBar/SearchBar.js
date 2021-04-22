import React, {useEffect, useState} from 'react';
import {ButtonWrapper, InputWrapper, MainWrapper, PaginationWrapper, SearchWrapper} from "./styles";
import TextInput from "../common/Input/TextInput";
import {useSelector} from "react-redux";
import Button from "../common/Button/Button";
import {getUsername, isError} from "../../store/selectors";
import Pagination from "../Pagination/Pagination";
import {useHistory} from "react-router-dom";

const SearchBar = props => {
  const [username, setUsername] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const storeUsername = useSelector(getUsername);
  const error = useSelector(isError);
  const history = useHistory();

  useEffect(() => {
    setUsername(storeUsername);
  }, [storeUsername]);

  const handleChange = e => {
    setUsername(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/${storeUsername}/1`);
  }

  const showPagination = !error && !!storeUsername;

  return (
      <MainWrapper>
        <PaginationWrapper>
          {showPagination && <Pagination/>}
        </PaginationWrapper>
        <SearchWrapper onSubmit={handleSubmit}>
          <InputWrapper>
            <TextInput fullWidth placeholder="Username..." value={username} onChange={handleChange}
                       onFocus={() => setInputFocused(true)}/>
          </InputWrapper>
          <ButtonWrapper>
            <Button fullWidth>Search</Button>
          </ButtonWrapper>
        </SearchWrapper>
      </MainWrapper>
  );
};

SearchBar.propTypes = {};

export default SearchBar;

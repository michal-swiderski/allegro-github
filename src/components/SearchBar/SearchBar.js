import React, {useEffect, useState} from 'react';
import {ButtonWrapper, InputWrapper, MainWrapper} from "./styles";
import TextInput from "../common/Input/TextInput";
import {useDispatch, useSelector} from "react-redux";
import {fetchRepos, setUsername as setUsernameAction} from "../../store/actions";
import Button from "../common/Button/Button";
import {getUsername} from "../../store/selectors";

const SearchBar = props => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const storeUsername = useSelector(getUsername);

  useEffect(() => {
    setUsername(storeUsername);
  }, [storeUsername]);

  const handleChange = e => {
    setUsername(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setUsernameAction(username));
    dispatch(fetchRepos());
  }

  return (
    <form onSubmit={handleSubmit}>
      <MainWrapper>
        <InputWrapper>
          <TextInput fullWidth placeholder="Username..." value={username} onChange={handleChange}/>
        </InputWrapper>
        <ButtonWrapper>
          <Button fullWidth>Search</Button>
        </ButtonWrapper>
      </MainWrapper>
    </form>
  );
};

SearchBar.propTypes = {};

export default SearchBar;

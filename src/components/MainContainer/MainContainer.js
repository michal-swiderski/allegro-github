import React, {useEffect} from 'react';
import styled from 'styled-components';
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import SearchBar from "../SearchBar/SearchBar";
import RepoList from "../RepoList/RepoList";
import {useDispatch, useSelector} from "react-redux";
import {isFetching} from "../../store/selectors";
import {useParams} from 'react-router-dom';
import {changePage, setUsername} from "../../store/actions";

const ContainerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  max-width: 800px;
  padding: ${props => props.theme.spacing.padding * 2}px;
  border: 1px solid ${props => props.theme.colors.borderGray};
  border-radius: 5px;
`;

const MainContainer = props => {
  const dispatch = useDispatch();
  const params = useParams();
  const loading = useSelector(isFetching);

  useEffect(() => {
    dispatch(setUsername(params.username || ''));
    if(params.username) {
      dispatch(changePage(Number(params.page) || 1));
    }
  }, [dispatch, params.username, params.page]);

  return (
    <ContainerDiv>
      <LoadingOverlay show={loading}/>
      <SearchBar/>
      <RepoList/>
    </ContainerDiv>
  );
};

export default MainContainer;

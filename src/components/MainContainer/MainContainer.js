import React from 'react';
import styled from 'styled-components';
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import SearchBar from "../SearchBar/SearchBar";
import RepoList from "../RepoList/RepoList";
import Pagination from "../Pagination/Pagination";
import {useSelector} from "react-redux";
import {isFetching} from "../../store/selectors";

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

  const loading = useSelector(isFetching);

  return (
    <ContainerDiv>
      <LoadingOverlay show={loading}/>
      <SearchBar/>
      <RepoList/>
      <Pagination/>
    </ContainerDiv>
  );
};

export default MainContainer;

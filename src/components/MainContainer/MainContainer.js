import React, {useEffect} from 'react';
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import SearchBar from "../SearchBar/SearchBar";
import RepoList from "../RepoList/RepoList";
import {useDispatch, useSelector} from "react-redux";
import {isFetching} from "../../store/selectors";
import {useParams} from 'react-router-dom';
import {changePage, setUsername} from "../../store/actions";
import {MainContentWrapper, MainWrapper} from "./styles";


const MainContainer = props => {
  const dispatch = useDispatch();
  const params = useParams();
  const loading = useSelector(isFetching);

  useEffect(() => {
    dispatch(setUsername(params.username || ''));
    if (params.username) {
      dispatch(changePage(Number(params.page) || 1));
    }
  }, [dispatch, params.username, params.page]);

  return (
    <div>
      <MainWrapper>
        {/*<header>*/}
        {/*  <GithubLogo src={GitHubLogo} alt="github logo"/>*/}
        {/*</header>*/}
        <MainContentWrapper>
          <LoadingOverlay show={loading}/>
          <SearchBar/>
          <RepoList/>
        </MainContentWrapper>
      </MainWrapper>
    </div>
  );
};

export default MainContainer;

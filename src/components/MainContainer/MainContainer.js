import React, {useEffect} from 'react';
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import SearchBar from "../SearchBar/SearchBar";
import RepoList from "../RepoList/RepoList";
import {useDispatch, useSelector} from "react-redux";
import {isFetching} from "../../store/selectors";
import {useParams} from 'react-router-dom';
import {fetchPage} from "../../store/actions";
import {MainContentWrapper, MainWrapper} from "./styles";


const MainContainer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const loading = useSelector(isFetching);

  useEffect(() => {
      dispatch(fetchPage(params.username || '', Number(params.page) || 1));
  }, [dispatch, params.username, params.page]);

  return (
    <div>
      <MainWrapper>
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

import './App.css';
import React, {useEffect} from "react";
import MainContainer from "./components/MainContainer/MainContainer";
import RepoList from "./components/RepoList/RepoList";
import {useDispatch} from "react-redux";
import {fetchRepos} from "./store/actions";
import SearchBar from "./components/SearchBar/SearchBar";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const fetchRepositories = useDispatch();

  useEffect(() => {
    fetchRepositories(fetchRepos());
  }, [fetchRepositories]);

  return (
    <div className="App">
      <div>
        <MainContainer>
          <SearchBar/>
          <RepoList/>
          <Pagination/>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;

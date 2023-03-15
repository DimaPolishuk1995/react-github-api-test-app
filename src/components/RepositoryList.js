import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {fetchRepositories, setIsInputActive} from '../store/repositoriesSlice';
import {setPage, setSearchTerm} from '../store/filtersSlice';
import {getPageCount} from '../utils/selectors';
import Container from './Container';
import RepositoryItem from './RepositoryItem';
import Pagination from './Pagination';
import SearchInput from './SearchInput';
import Spinner from './Spinner';
import NoResults from './NoResults';

const RepositoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: initial;
  padding: 30px 0;

  @media (min-width: 768px) {
    padding: 50px 0;
  }
`;

export const Repository = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin-top: 30px;

  @media (min-width: 768px) {
    margin-top: 50px;
  }
  
  >a {
    text-decoration: none;
  }
`;

const RepositoryList = () => {
    const dispatch = useDispatch();
    const repositories = useSelector((state) => state.repositories.entities);
    const pageCount = useSelector(getPageCount);
    const {status, error} = useSelector((state) => state.repositories);
    const {page, searchTerm} = useSelector((state) => state.filters);
    const [isInitialSearch, setIsInitialSearch] = useState(true);

    const perPage = 3;
    const [startIndex, endIndex] = [(page - 1) * perPage, page * perPage];
    const repositoriesToDisplay = repositories.slice(startIndex, endIndex);

    useEffect(() => {
        let searchTimeout;
        if(!isInitialSearch) {
            if (searchTerm) {
                searchTimeout = setTimeout(() => {
                    dispatch(fetchRepositories({searchTerm}));
                }, 1000);
            } else {
                dispatch(fetchRepositories());
            }
        }
        setIsInitialSearch(false);
        return () => clearTimeout(searchTimeout);
    }, [dispatch, searchTerm, isInitialSearch]);

    const handlePageChange = (page) => dispatch(setPage(page));

    const handleSearchTermChange = (searchTerm) => {
        dispatch(setSearchTerm(searchTerm));
        dispatch(setIsInputActive(true));
    };

    if (status === 'loading') {
        return (
            <Spinner/>
        );
    }

    if (status === 'failed') {
        return (
            <Container>
                <p>{error}</p>
            </Container>
        );
    }

    return (
        <RepositoryListWrapper>
            <SearchInput searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} status={status}/>
            <Repository>
                {repositoriesToDisplay.length ? (
                    <>
                        {repositoriesToDisplay.map((repo) => (
                            <RepositoryItem key={repo.id} repo={repo}/>
                        ))}
                        <Pagination
                            currentPage={page}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                        />
                    </>
                ) : (
                    <NoResults/>
                )}
            </Repository>
        </RepositoryListWrapper>
    );
};

export default RepositoryList;

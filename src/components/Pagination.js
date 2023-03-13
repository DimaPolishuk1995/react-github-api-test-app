import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;

const PageButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  background-color: #f6f8fa;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? '2px solid #979797' : 'none')};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PreviousButton = styled(PageButton)`
  margin-right: 8px;
`;

const NextButton = styled(PageButton)`
  margin-left: 8px;
`;

const Pagination = ({ currentPage, pageCount, onPageChange }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pageCount;

    const handlePageButtonClick = (page) => {
        onPageChange(page);
    };

    const handlePreviousPageClick = () => {
        if (!isFirstPage) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPageClick = () => {
        if (!isLastPage) {
            onPageChange(currentPage + 1);
        }
    };

    const getButtonLabel = (page) => {
        if (page === currentPage) {
            return <strong>{page}</strong>;
        }
        return page;
    };

    const getPageButtons = () => {
        const buttons = [];
        for (let i = 1; i <= pageCount; i++) {
            buttons.push(
                <PageButton
                    key={i}
                    onClick={() => handlePageButtonClick(i)}
                    active={i === currentPage}
                >
                    {getButtonLabel(i)}
                </PageButton>
            );
        }
        return buttons;
    };

    return <PaginationContainer>
        <PreviousButton disabled={isFirstPage} onClick={handlePreviousPageClick}>
            {'<'}
        </PreviousButton>
        {getPageButtons()}
        <NextButton disabled={isLastPage} onClick={handleNextPageClick}>
            {'>'}
        </NextButton>
    </PaginationContainer>;

};

export default Pagination;

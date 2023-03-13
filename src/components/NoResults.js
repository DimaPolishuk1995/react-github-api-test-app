import React from "react";
import styled from 'styled-components';

const NoResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const NoResultsText = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #6e7681;
`;

const NoResults = () => {
    return <NoResultsContainer>
        <NoResultsText>
            По Вашому запиту не знайдено жодного репозиторія
        </NoResultsText>
    </NoResultsContainer>;
};

export default NoResults;

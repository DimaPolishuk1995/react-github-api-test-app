import React from 'react';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  min-height: 100vh;
  justify-content: center;
`;

const Spinner = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #0366d6;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = () => {
    return (
        <SpinnerWrapper>
            <Spinner/>
        </SpinnerWrapper>
    );
};

export default LoadingSpinner;

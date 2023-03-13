import React from 'react';
import {useEffect, useRef} from "react";
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 40px;
  padding: 8px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #4f4f4f;
  flex: 1;
  margin-left: 8px;

  &::placeholder {
    color: #bdbdbd;
  }
`;

const SearchInput = ({searchTerm, onSearchTermChange, status}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (status !== 'loading') {
            inputRef.current.focus();
        }
    }, [status]);

    const handleInputChange = (event) => {
        onSearchTermChange(event.target.value);
    };

    return (
        <InputWrapper>
            <Input
                ref={inputRef}
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
            />
        </InputWrapper>
    );
};

export default SearchInput;

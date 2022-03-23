import React from "react";
import styledComponents from "styled-components";
import { ReactComponent as SearchSvg } from "../../assets/search_icon.svg";

const SearchWrapper = styledComponents.div`
  display: flex;
  height: 40px;
  margin-top: ${({ top }) => top || null};
  margin-bottom: ${({ bottom }) => bottom || null};
  padding: 0 16px;

`;

const SearchIcon = styledComponents(SearchSvg)`
  position: absolute;
  right: ${({ right }) => right || "16px"};
  margin-right: 28px;
  margin-top: 13px;
`;

const Input = styledComponents.input`
  border: none;
  outline-color: transparent;
  font-size: 14px;
  font-weight: 400;
  background-color: #edf2f7;
  border-radius: 4px;
  width: 100%;
  padding-left: 16px;
`;

export const SearchInput = ({
  placeholder,
  onClick,
  top,
  bottom,
  value,
  onChange,
}) => {
  return (
    <SearchWrapper onClick={onClick} top={top} bottom={bottom}>
      <SearchIcon />
      <Input value={value} onChange={onChange} placeholder={placeholder} />
    </SearchWrapper>
  );
};

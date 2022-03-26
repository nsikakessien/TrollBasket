import React from "react";

import styledComponents from "styled-components";

import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { ReactComponent as SideIcon } from "../../assets/side_arrow.svg";
import { Circle } from "../../home";
import { useNavigate } from "react-router-dom";

const Header = styledComponents.header`
    max-width: inherit;
    width: ${({ width }) => width || "100%"};
    margin: ${({ margin }) => margin || null};
    padding: ${({ padding }) => padding || null};
    position: ${({ position }) => position || "fixed"};
    background-color: ${({ backgroundColor }) => backgroundColor || "white"};
    background-image: ${({ backgroundImage }) => backgroundImage || null};
    background: ${({ background }) => background};
    z-index: 1000;
`;

const IconBox = styledComponents.div`
    display: flex;
    justify-content: ${({ content }) => content || "center"};
    align-items: center;
    margin-right: 125px;
    background-color: #EDF2F7;
    width: 24px;
    height: 24px;
`;

const HeaderContent = styledComponents.div`
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 64px;
`;

const IconDiv = styledComponents.div`
    display: flex;
    align-items: center;
`;

const IconCover = styledComponents.div`
    position: ${({ position }) => position || "absolute"};
    right: ${({ right }) => right || "16px"};
    top: ${({ top }) => top || "20px"};
    display: flex;
`;

const HeaderText = styledComponents.div`
    font-size: 14px;
    color: #212C3D;
`;

export const SmallCircle = styledComponents.div`
    font-size: 10px;
    color: #FFFFFF;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #EE6F44;
    display: flex;
    justify-content: center;
    position: absolute;
    right: ${({ right }) => right || "-8px"};
    top: ${({ top }) => top || "-5px"};
    text-align: center;
    align-items: center;

       @media (min-width: 412px) {
    right: ${({ mright }) => mright || null};
    top: ${({ mtop }) => mtop || null};
    }

          @media (min-width: 390px) {
    right: ${({ mmright }) => mmright || null};
    top: ${({ mmtop }) => mmtop || null};
    }
`;

const FixedHeader = ({ title, count, showCart }) => {
  const navigate = useNavigate();

  return (
    <Header>
      <HeaderContent>
        <IconBox onClick={() => navigate(-1)}>
          <SideIcon />
        </IconBox>
        <IconDiv>
          <HeaderText>{title}</HeaderText>
        </IconDiv>
      </HeaderContent>
      {showCart && (
        <IconCover>
          <Circle right={"16px"}>
            <SearchIcon />
          </Circle>
          <Circle onClick={() => navigate("/product/cart")}>
            <SmallCircle>{count}</SmallCircle>
            <CartIcon />
          </Circle>
        </IconCover>
      )}
    </Header>
  );
};

export default FixedHeader;

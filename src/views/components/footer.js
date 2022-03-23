import React, { Fragment, useState } from "react";
import styledComponents from "styled-components";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as BuyIcon } from "../assets/buy.svg";
import { ReactComponent as DealIcon } from "../assets/deals.svg";
import { ReactComponent as WalletIcon } from "../assets/wallet.svg";
import { ReactComponent as MoreIcon } from "../assets/more.svg";
import { Text } from "../home";

export const FixedBottom = styledComponents.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: fixed;
  bottom: 0;
  background: white;
  box-shadow: 0 1px 10px 0 #dddddd, 0 4px 5px 0 #23000000,
    0 2px 4px -1px #33000000;
  width: 100%;
  height: 80px;
  justify-content: center;
  max-width: inherit;
  z-index: 100;
`;

const NavigationBar = styledComponents.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

const MenuBox = styledComponents.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styledComponents.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  position: ${({ position }) => position || null};
  top: ${({ top }) => top || null};

  > svg {
    fill: ${({ fill }) => fill || null};
  }

  &.active {
    > svg {
      stroke: #227EFF;
      fill: #227EFF;
  }
  }
`;

const LineTop = styledComponents.div`
  background: #227EFF;
  height: 2px;
  width: 48px;
`;

const Footer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [xoffset, setXOffset] = useState(16);
  const [yoffset] = useState(0);
  const menuList = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Buy", icon: <BuyIcon /> },
    { text: "Deals", icon: <DealIcon /> },
    { text: "Wallet", icon: <WalletIcon /> },
    { text: "More", icon: <MoreIcon />, fill: "#718596" },
  ];

  const moveToRight = (index) => {
    if (index === 0) {
      setXOffset(16);
    } else if (index === 1) {
      setXOffset(89);
    } else if (index === 2) {
      setXOffset(162);
    } else if (index === 3) {
      setXOffset(237);
    } else if (index === 4) {
      setXOffset(310);
    }
  };

  return (
    <Fragment>
      <FixedBottom>
        <NavigationBar>
          <LineTop
            style={{
              position: "absolute",
              left: `${xoffset}px`,
              top: `${yoffset}px`,
            }}
          ></LineTop>

          {menuList.map((menu, index) => (
            <MenuBox
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                moveToRight(index);
              }}
            >
              <Icon
                fill={menu.fill}
                className={selectedIndex === index ? "active" : ""}
              >
                {menu.icon}
              </Icon>
              <Text
                color={selectedIndex === index ? "#227EFF" : "#718596"}
                weight={selectedIndex === index ? "700" : "400"}
                size={"12px"}
              >
                {menu.text}
              </Text>
            </MenuBox>
          ))}
        </NavigationBar>
      </FixedBottom>
    </Fragment>
  );
};

export default Footer;

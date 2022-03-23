import React, { Fragment } from "react";
import DesktopBackgroundLayout from "../../components/desktopbackground";
import styledComponents from "styled-components";
import bg from "../assets/back.svg";
import { ReactComponent as SuccessIcon } from "../assets/success.svg";
import { Text } from "../home";
import { useNavigate } from "react-router-dom";

const SuccessContainer = styledComponents.div`
    background-image: url(${bg});
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ButtonCover = styledComponents.div`
  width: 343px;
  height: 56px;
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  color: #227EFF;
`;

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <DesktopBackgroundLayout>
        <SuccessContainer>
          <SuccessIcon />
          <Text
            color="white"
            top={"23px"}
            bottom={"10px"}
            weight={"700"}
            size={"24px"}
          >
            Checkout Successful
          </Text>
          <Text color="#E9F2FF" bottom={"304px"}>
            Your checkout is now successful.
          </Text>
          <ButtonCover onClick={() => navigate("/")}>Got it</ButtonCover>
        </SuccessContainer>
      </DesktopBackgroundLayout>
    </Fragment>
  );
};

export default CheckoutSuccess;

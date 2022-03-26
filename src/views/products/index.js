import React, { useState } from "react";

import styledComponents, { keyframes, css } from "styled-components";

import { useLocation } from "react-router-dom";
import DesktopBackgroundLayout from "../../components/desktopbackground";
import FixedHeader from "../components/header";
import { Text } from "../home";
import { formatter } from "../home/utils";
import { ReactComponent as RightArrow } from "../assets/right.svg";
import { ReactComponent as ColorStar } from "../assets/star1.svg";
import { ReactComponent as WhiteStar } from "../assets/star2.svg";
import { ReactComponent as Avatar } from "../assets/avatar.svg";
import { ReactComponent as CloseIcon } from "../assets/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/shopping/shop-actions";

const ImageWrapper = styledComponents.div`
  margin: 96px 32px 32px;
`;

const Image = styledComponents.img`
  width: 312px;
  height: 206px;
`;

const DetailsWrapper = styledComponents.div`
  padding: 0 16px;
`;

const DescriptionBox = styledComponents.div`
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const RatingBox = styledComponents.div`
  padding: 16px 0;
`;

const RateBox = styledComponents.div`
  display: flex;
  margin-right: 6px;
  align-items: center;
`;

const FirstBox = styledComponents.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ bottom }) => bottom || null};

`;

const TextBox = styledComponents.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
`;

const ButtonWrapper = styledComponents.div`
  width: 100%;
  background: white;
`;

const FlexButton = styledComponents.div`
  width: 167px;
  height: 45px;
  background: ${({ background }) => background || "#227EFF"};
  color: ${({ color }) => color || "white"};
  margin-right: ${({ right }) => right || null};
  border-radius: 4px;
  border: ${({ border }) => border || null}; 
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const ContentWrapper = styledComponents.div`
  padding: 16px;
  display: flex;
  justify-content: center;
`;

const slideDown = keyframes`
 0% {
            top: 65px;
        }
        100% {
            top: 0;
        }
`;

const slideUp = keyframes`
   0% {
            top: 0;
        }

          75% {
            top: 75px;
        }

    100% {
             top: 65px;
        }
`;

export const ToastContainer = styledComponents.div`
  padding: 0 16px;
  position: fixed;
  max-width: inherit;
  right: 0;
  left: 0;
  top: 65px;
  transition: opacity 0.5s linear 0s;
  animation: ${(props) =>
    !props.animate
      ? css`
          ${slideUp} 0.3s ease-out
        `
      : css`
          ${slideDown} 0.3s ease-out
        `};

    @media (min-width: 576px) {
          max-width: 100%;
    }
`;

export const Toast = styledComponents.div`
  padding: 8px 16px;
  background: ${({ background }) => background || "#D3FDE9"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #93ECC1;
  border-radius: 4px;

    @media (min-width: 576px) {
          width: 311px;
          margin: 0 auto;
    }

`;

const ProductDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const productData = location?.state || {};
  const count = 1;
  const cart = useSelector((state) => state.shop.cart);

  const [showToast, setShowToast] = useState(false);
  const [doAnimate, setDoAnimate] = useState(false);

  const handleAddToCart = () => {
    setDoAnimate(true);
    setTimeout(() => {
      setShowToast(true);
    }, 300);
    dispatch(addToCart(productData.id));
    setDoAnimate(false);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <DesktopBackgroundLayout>
      <FixedHeader title={"Details"} count={cart.length || 0} showCart />
      {showToast && (
        <ToastContainer animate={doAnimate}>
          <Toast>
            <Text color="#023B20">Item added to cart successfully</Text>
            <CloseIcon onClick={() => setShowToast(false)} />
          </Toast>
        </ToastContainer>
      )}
      <ImageWrapper>
        <Image src={productData.image} />
      </ImageWrapper>
      <DetailsWrapper>
        <Text color={"#212C3D"} transform={"capitalize"}>
          {productData.name}
        </Text>
        <Text
          color={"#627483"}
          padding={"0 52px 0 0"}
          size={"12px"}
          bottom={"18px"}
        >
          {productData.description}
        </Text>
        <Text color={"#212C3D"} weight={"700"} bottom={"20px"}>
          {`${formatter.format(
            parseInt(productData.minPrice)
          )} - ${formatter.format(parseInt(productData.maxPrice))} `}
          <span
            style={{ color: "#627483", fontSize: "12px", fontWeight: "400" }}
          >
            /Piece
          </span>
        </Text>
        <DescriptionBox>
          <Text color="#212C3D">Product Description</Text>
          <RightArrow />
        </DescriptionBox>
        <RatingBox>
          <TextBox>
            <Text color="#212C3D">Review and Ratings</Text>
            <Text color="#227EFF">View all</Text>
          </TextBox>
          <FirstBox bottom={"12px"}>
            <RateBox>
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <div key={index}>
                    {ratingValue <= count ? <ColorStar /> : <WhiteStar />}
                  </div>
                );
              })}
            </RateBox>
            <Text size={"12px"} weight={"500"} color={"#212C3D"}>
              {count}.0
            </Text>
          </FirstBox>
          <Text color="#627483" size="12px" bottom="16px">
            This is the best product I have used in a long while and the size
            fits perfectly and I love the colors!!!!!
          </Text>
          <FirstBox>
            <Avatar />
            <Text left={"8px"} size={"12px"} color={"#212C3D"}>
              Segun Arinze
            </Text>
          </FirstBox>
        </RatingBox>
      </DetailsWrapper>
      <ButtonWrapper>
        <ContentWrapper>
          <FlexButton
            right="19px"
            border="1px solid #227EFF"
            onClick={handleAddToCart}
          >
            Add to cart
          </FlexButton>
          <FlexButton
            background="white"
            border="1px solid #A0B1C0"
            color="#2E4457"
          >
            Wishlist
          </FlexButton>
        </ContentWrapper>
      </ButtonWrapper>
    </DesktopBackgroundLayout>
  );
};

export default ProductDetails;

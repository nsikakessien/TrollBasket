import React, { useState } from "react";
import styledComponents from "styled-components";
import { useDispatch } from "react-redux";
import { Circle, Text } from "../home";
import { formatter } from "../home/utils";
import { ReactComponent as TrashIcon } from "../assets/trash.svg";
import { ReactComponent as PlusIcon } from "../assets/plus.svg";
import { ReactComponent as MinusIcon } from "../assets/minus.svg";
import { adjustQty } from "../../redux/shopping/shop-actions";

const CartItemBox = styledComponents.div`
  padding: 8px 16px;
  background: white;
  margin-bottom: 16px;
`;

const TopContainer = styledComponents.div`
  display: flex;
  align-items: center;
  padding-bottom: 11px;
  border-bottom: 1px solid #F6F2F2;
  margin-bottom: 8px;
`;

const PriceContainer = styledComponents.div`

`;

const ImageCover = styledComponents.div`
  border-radius: 4px;
  width: 48px;
  height: 48px;
  margin-right: 16px;
`;

const BottomContainer = styledComponents.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FirstBox = styledComponents.div`
  display: flex;
`;

const SecondBox = styledComponents.div`
  display: flex;
  align-items: center;
`;

const CartItem = ({ item, handleDelete }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(item.qty);

  const handleAdd = async () => {
    await setValue(value === "" ? 0 : value + 1);
    dispatch(adjustQty(item.id, parseInt(value + 1)));
  };

  const handleSub = () => {
    setValue(value - 1);
    dispatch(adjustQty(item.id, parseInt(value - 1)));
  };

  return (
    <CartItemBox key={item.id}>
      <TopContainer>
        <ImageCover>
          <img src={item.image} width="48px" height="48px" alt="product" />
        </ImageCover>
        <PriceContainer>
          <Text transform={"capitalize"} color={"#212C3D"}>
            {item.name}
          </Text>
          <Text color={"#212C3D"} weight={"700"}>
            {formatter.format(item.maxPrice)}
          </Text>
        </PriceContainer>
      </TopContainer>
      <BottomContainer>
        <FirstBox onClick={() => handleDelete()}>
          <TrashIcon />
          <Text left={"11px"} size={"12px"} color={"#212C3D"}>
            Delete
          </Text>
        </FirstBox>
        <SecondBox>
          {value > 0 && (
            <Circle
              width={"28px"}
              height={"28px"}
              border={"0.7px solid #123CD3"}
              right={"8px"}
              onClick={handleSub}
            >
              <MinusIcon />
            </Circle>
          )}
          <Text right={"8px"}>{value}</Text>
          <Circle
            width={"28px"}
            height={"28px"}
            border={"0.7px solid #123CD3"}
            onClick={handleAdd}
          >
            <PlusIcon />
          </Circle>
        </SecondBox>
      </BottomContainer>
    </CartItemBox>
  );
};

export default CartItem;

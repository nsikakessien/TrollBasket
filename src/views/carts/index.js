import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styledComponents from "styled-components";
import DesktopBackgroundLayout from "../../components/desktopbackground";
import FixedHeader from "../components/header";
import { clearCart, removeFromCart } from "../../redux/shopping/shop-actions";
import CartItem from "./cartItem";
import { Text } from "../home";
import { formatter } from "../home/utils";
import { ListProducts } from "../components/gridProducts";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../assets/close.svg";
import { Toast, ToastContainer } from "../products";

const Container = styledComponents.main`
  padding: 0 16px 37px 16px;
  margin-top: 83px;  
  min-height: 100%;
`;

const CartItemsContainer = styledComponents.div`
  margin-bottom: 40px;
`;

const TotalBox = styledComponents.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${({ top }) => top || null};
    margin-bottom: ${({ bottom }) => bottom || null};
`;

const Button = styledComponents.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: white;
  width: 342px;
  height: 56px;
  background: #227EFF;
  border: none;
  border-radius: 4px;
  margin-bottom: 40px;
  opacity: ${({ opacity }) => opacity || null};
`;

const Carts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.shop.cart);
  const products = useSelector((state) => state.shop.products);
  const slicedProducts = products?.slice(0, 3);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [doAnimate, setDoAnimate] = useState(false);

  useEffect(() => {
    let price = 0;
    cart.map((item) => (price += item.qty * parseInt(item.maxPrice)));
    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);

  const handleDelete = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const handleCheckout = () => {
    const isZero = cart.find((item) => !item.qty || item.qty === "1");
    if (isZero) {
      setDoAnimate(true);
      setTimeout(() => {
        setShowToast(true);
      }, 300);
      setDoAnimate(false);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
      setShowToast(true);
    } else {
      dispatch(clearCart());
      navigate("/checkout/success");
    }
  };

  return (
    <Fragment>
      <DesktopBackgroundLayout>
        <FixedHeader title={"Carts"} />
        {showToast && (
          <ToastContainer animate={doAnimate}>
            <Toast background={"#ffc3bd"}>
              <Text color="#E01A00">Quantity cannot be Zero or Empty</Text>
              <CloseIcon onClick={() => setShowToast(false)} />
            </Toast>
          </ToastContainer>
        )}
        <Container>
          <CartItemsContainer>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} handleDelete={handleDelete} />
            ))}
          </CartItemsContainer>
          <TotalBox bottom={"16px"}>
            <Text color="#212C3D">Subtotal</Text>
            <Text color="#212C3D">{formatter.format(totalPrice)}</Text>
          </TotalBox>
          <TotalBox bottom={"16px"}>
            <Text color="#212C3D">Total</Text>
            <Text color="#212C3D" weight={"700"}>
              {formatter.format(totalPrice)}
            </Text>
          </TotalBox>

          <Button
            opacity={cart.length === 0 ? "0.5" : "1"}
            disabled={cart.length === 0}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
          <TotalBox bottom={"16px"}>
            <Text color={"#212C3D"}>Recently viewed</Text>
            <Text color="#227EFF" onClick={() => navigate("/")}>
              View all
            </Text>
          </TotalBox>
          <ListProducts
            data={slicedProducts}
            size={{ width: "105px", height: "98px" }}
          />
        </Container>
      </DesktopBackgroundLayout>
    </Fragment>
  );
};

export default Carts;

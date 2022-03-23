import React, { Fragment, useState, useEffect } from "react";
import styledComponents from "styled-components";
import { SearchInput } from "../components/searchInput";
import { ReactComponent as LocationIcon } from "../assets/location.svg";
import { ReactComponent as OrderIcon } from "../assets/orders.svg";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";
import { ReactComponent as ProdIcon } from "../assets/cat.svg";
import { ReactComponent as PopIcon } from "../assets/pop.svg";
import { ReactComponent as RecIcon } from "../assets/rec.svg";
import { ReactComponent as ShopIcon } from "../assets/shop.svg";
import BannerImage from "../assets/banner.svg";
import { ListProducts } from "../components/gridProducts";
import DesktopBackgroundLayout from "../../components/desktopbackground";
import { useSelector } from "react-redux";
import { SmallCircle } from "../components/header";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";

const InputWrapper = styledComponents.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const PageContainer = styledComponents.div`
    display: ${({ flex }) => flex || null};
    flex-direction: ${({ direction }) => direction || null};
    padding: ${({ padding }) => padding || "0 16px"};
    background-color: ${({ color }) => color || null};
    height: ${({ height }) => height || null};
    margin-top: ${({ top }) => top || null};
    min-height: ${({ minHeight }) => minHeight || null};
    width: 100%;
`;

const NavContainer = styledComponents.div`
    margin-bottom: 26px;
    padding:  0 16px;
    display: flex;
    justify-content: center;
`;

const NavItem = styledComponents.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: ${({ paddingRight }) => paddingRight || null};
    border-right: ${({ borderRight }) => borderRight || null};
    margin-right: ${({ marginRight }) => marginRight || null};
`;

export const Circle = styledComponents.div`
    border-radius: 50%;
    width: ${({ width }) => width || "#24px"};
    height: ${({ height }) => height || "24px"};
    background: ${({ background }) => background || "#EDF2F7"};
    border: ${({ border }) => border || null};
    opacity: ${({ opacity }) => opacity || null};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${({ right }) => right || null}
`;

export const Text = styledComponents.div`
    font-size: ${({ size }) => size || "14px"};
    font-weight: ${({ weight }) => weight || "400"};
    margin-top: ${({ top }) => top || null};
    margin-bottom: ${({ bottom }) => bottom || null};
    margin-right: ${({ right }) => right || null};
    margin-left: ${({ left }) => left || null};
    padding: ${({ padding }) => padding || null};
    color: ${({ color }) => color || "#333333"};
    max-width: ${({ maxWidth }) => maxWidth || null};
    width: ${({ width }) => width || null};
    height: ${({ height }) => height || null};
    line-height: ${({ lineHeight }) => lineHeight || null};
    text-align: ${({ align }) => align || null};
    position: ${({ position }) => position || null};
    top: ${({ ptop }) => ptop || null};
    left: ${({ pleft }) => pleft || null};
    right: ${({ pright }) => pright || null};
    white-space: ${({ space }) => space || null}; 
    text-indent: ${({ indent }) => indent || null};
    text-transform: ${({ transform }) => transform || null};
    display: ${({ display }) => display || null};
    justify-content: ${({ content }) => content || null};
    align-items: ${({ items }) => items || null};
`;

const Banner = styledComponents.div`
    background: ${({ color }) => color || null};
    width: 318px;
    height: 123px;
    border-radius: 8px;
    margin-right: 8px;
    flex-shrink : 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CarouselContainer = styledComponents.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar {
      display: none;
    }
`;

const CategoriesWrapper = styledComponents.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 26px;
  gap: 12px;
`;

const CategoryItem = styledComponents.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const BoxItem = styledComponents.div`
 background: ${({ background }) => background || "#05944F"};
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 width: 48px;
 height: 48px;
 border-radius: 4px;
`;

const Button = styledComponents.div`
width: 91px;
height: 31px;
background: #227EFF;
border-radius: 4px;
color: #ffffff;
font-size: 10px;
display: flex;
justify-content: center;
align-items: center;
`;

const GridCover = styledComponents.div`
    margin-top: 24px;
    padding-bottom: 60px;

`;

const DropDownContainer = styledComponents.div`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownListContainer = styledComponents.div`
    z-index: 1000;
    position: absolute;
    width: 100px;
    top: 80px;
    left: 28px;
    opacity: ${(props) => (props.open ? "1" : "0")};
    max-height: ${(props) => (props.open ? "100%" : "0")};
    overflow: hidden;
    transition: all 0.3s;
`;

const DropDownList = styledComponents.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #212C3D;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styledComponents.li`
  list-style: none;
  margin-bottom: 0.8em;
    &:hover {
    color: #227EFF;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.shop.products);
  const cart = useSelector((state) => state.shop.cart);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [text, setText] = useState("Lagos");
  const [open, setOpen] = useState(false);

  const options = ["Lagos", "Enugu", "Yola", "All"];

  const categoryData = [
    {
      background: "#227EFF",
      text: "Product categories",
      icon: <ProdIcon />,
      position: null,
      left: null,
      indent: null,
    },
    {
      background: "#EE6F44",
      text: "Popular Products",
      icon: <PopIcon />,
      position: null,
      left: null,
      indent: null,
    },
    {
      background: "#7E42F5",
      text: "Recommended Products",
      icon: <RecIcon />,
      position: "relative",
      left: "-1px",
      indent: "-10px",
    },
    {
      background: "#05944F",
      text: "Shops",
      icon: <ShopIcon />,
      position: null,
      left: null,
      indent: null,
    },
  ];

  useEffect(() => {
    const filteredProd =
      searchValue.length === 0
        ? products
        : products.filter((data) =>
            data?.name.toLowerCase().includes(searchValue.toLowerCase())
          );
    setFilteredProducts(filteredProd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    if (text === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((item) => item.location === text));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <Fragment>
      <DesktopBackgroundLayout>
        <Text top={"17px"} bottom={"14px"} padding={"0 16px"} weight={"500"}>
          Trollbasket
        </Text>
        <NavContainer>
          <NavItem
            paddingRight={"20px"}
            borderRight={"0.5px solid #CBD6E0"}
            marginRight={"23px"}
            onClick={() => setOpen(true)}
          >
            <Circle right={"5px"}>
              <LocationIcon />
            </Circle>
            <Text
              right={"11px"}
              color={"#071827"}
              width={"50px"}
              align={"center"}
            >
              {text}
            </Text>
            <ArrowIcon />
          </NavItem>
          <NavItem
            paddingRight={"26px"}
            borderRight={"0.5px solid #CBD6E0"}
            marginRight={"20px"}
          >
            <Circle right={"8px"}>
              <OrderIcon />
            </Circle>
            <Text color={"#071827"} space={"nowrap"}>
              My Orders
            </Text>
          </NavItem>
          <NavItem onClick={() => navigate("/product/cart")}>
            <Circle right={"14px"}>
              <SmallCircle top={"45px"} right={"59px"}>
                {cart.length || 0}
              </SmallCircle>
              <CartIcon />
            </Circle>
            <Text color={"#071827"}>Cart</Text>
          </NavItem>
        </NavContainer>
        <InputWrapper>
          <SearchInput
            placeholder="Search merchbuy"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </InputWrapper>
        {open && (
          <DropDownContainer>
            <DropDownListContainer open={open}>
              <DropDownList>
                {options.map((data, index) => (
                  <ListItem
                    key={index}
                    onClick={() => {
                      setText(data);
                      setOpen(false);
                    }}
                  >
                    {data}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          </DropDownContainer>
        )}
        <PageContainer>
          <CarouselContainer>
            <Banner color="#227EFF">
              <Text color="#ffffff" weight="700" maxWidth="200px">
                Having any issues with your order?
              </Text>
              <Button style={{ background: "white", color: "#227EFF" }}>
                Contact Us
              </Button>
            </Banner>
            <Banner color={`url(${BannerImage})`}>
              <Text color="#ffffff" weight="700" maxWidth="200px">
                Having any <span style={{ color: "#EE6F44" }}>issues</span> with
                your order?
              </Text>
              <Button>Contact Us</Button>
            </Banner>
            <Banner color="#EE6F44">
              <Text color="#ffffff" weight="700" maxWidth="200px">
                Having any issues with your order?
              </Text>
              <Button style={{ background: "white", color: "#227EFF" }}>
                Contact Us
              </Button>
            </Banner>
          </CarouselContainer>

          <CategoriesWrapper>
            {categoryData.map((item, index) => (
              <CategoryItem key={index}>
                <BoxItem background={item.background}>{item.icon}</BoxItem>
                <Text
                  top={"8px"}
                  align={"center"}
                  size={"10px"}
                  color={"#29394F"}
                  maxWidth={"50px"}
                  left={item.left}
                  position={item.position}
                  indent={item.indent}
                >
                  {item.text}
                </Text>
              </CategoryItem>
            ))}
          </CategoriesWrapper>
        </PageContainer>
        <GridCover>
          <ListProducts
            data={filteredProducts}
            size={{ width: "105px", height: "98px" }}
          />
        </GridCover>
        <Footer />
      </DesktopBackgroundLayout>
    </Fragment>
  );
};

export default Home;

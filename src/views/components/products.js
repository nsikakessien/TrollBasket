import React from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import { formatter } from "../home/utils";

const Container = styledComponents.div`
    margin: 5px 0;
    padding-bottom: 16px;
    width: ${({ width }) => width || "105px"};
`;

export const ImageWrapper = styledComponents.div`
  margin-bottom: 5px;
  display: flex;
  margin-bottom: ${({ bottom }) => bottom || null};
  position: relative;
  border-radius: 13px;
  justify-content: ${({ justifyContent }) => justifyContent || null};
`;

export const ProductImage = styledComponents.img`
  width: ${({ width }) => width || "103px"};
  height: ${({ height }) => height || "98px"};
  margin-top: ${({ top }) => top || 0};
  margin-left: -2px;
  border-radius: 4px;
  object-fit: cover;
  padding: 0;
`;

export const ProductInfo = styledComponents.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #0B0C0E;
  font-size: 10px;
  max-width: ${({ width }) => width || "100px"};
  padding: ${({ padding }) => padding || "10px"};
`;

export const ProductInfoDesc = styledComponents.div`
  font-size: 10px;
  margin-top: 4px;
  text-transform: capitalize;
  line-height: 18px;
  font-weight: 400;
  color: #718596;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 36px;
`;

export const ProductInfoPrice = styledComponents.div`
  display: block;
  font-weight: 700;
  font-size: 12px;
  color: #071827;
`;

const Product = ({ data, size, left }) => {
  return (
    <Link to={`/product/${data.name}/`} state={data}>
      <Container>
        <ImageWrapper justifyContent="center">
          <ProductImage
            src={data?.image}
            alt="product image"
            width={size.width}
            height={size.height}
            left={left}
          />
        </ImageWrapper>
        <ProductInfo padding="0">
          <ProductInfoDesc>{data.name}</ProductInfoDesc>
          <ProductInfoPrice>
            {`${formatter.format(parseInt(data.minPrice))} - ${formatter.format(
              parseInt(data.maxPrice)
            )}`}
          </ProductInfoPrice>
          <ProductInfoDesc>MOQ {data.moq} (pieces)</ProductInfoDesc>
        </ProductInfo>
      </Container>
    </Link>
  );
};

export default Product;

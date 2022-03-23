import Product from "./products";
import styledComponents from "styled-components";

const AddGridBox = styledComponents.div`
    display: grid;
    grid-template-columns: ${({ width }) => `repeat(auto-fill, ${width})`};
    justify-content: ${({ justifyContent }) =>
      justifyContent || "space-evenly"};
`;

export const ListProducts = ({ data, size, left }) => {
  return (
    <AddGridBox width={size.width}>
      {data &&
        data.map((item, index) => (
          <Product key={index} data={item} size={size} left={left} />
        ))}
    </AddGridBox>
  );
};

import * as actionTypes from "./types";

import Cap from "../../views/pics/cap.jpg";
import Jordan from "../../views/pics/jordan1.jpg";
import Car from "../../views/pics/car.jpg";
import Chair from "../../views/pics/chair.jpg";
import Lamp from "../../views/pics/lamp.jpg";
import Skates from "../../views/pics/skates.jpg";
import Speaker from "../../views/pics/speaker.jpg";
import Phone from "../../views/pics/phone.jpg";
import Shorts from "../../views/pics/shorts.jpg";
import Table from "../../views/pics/table.png";

const initialState = {
  products: [
    {
      id: "123abc",
      name: "Nike Air Jordan",
      description: "Na correct shoe be this oooo, buy am now before e finish",
      minPrice: "45000",
      maxPrice: "90000",
      location: "Lagos",
      stock: "50",
      image: Jordan,
      moq: "4",
    },
    {
      id: "aabb675",
      name: "Original Cap",
      description: "Na correct cap be this oooo, buy am now before e finish",
      minPrice: "45000",
      maxPrice: "90000",
      location: "Enugu",
      stock: "50",
      image: Cap,
      moq: "4",
    },
    {
      id: "12tuuabc",
      name: "Car",
      description: "Na correct car be this oooo, buy am now before e finish",
      minPrice: "45000",
      maxPrice: "90000",
      location: "Lagos",
      stock: "50",
      image: Car,
      moq: "4",
    },
    {
      id: "123yu78abc",
      name: "Chair",
      description: "Na correct chair be this oooo, buy am now before e finish",
      minPrice: "45000",
      maxPrice: "90000",
      location: "Lagos",
      stock: "50",
      image: Chair,
      moq: "4",
    },
    {
      id: "143abc",
      name: "Correct lamp wey dey shine",
      description: "Na correct lamp be this oooo, buy am now before e finish",
      minPrice: "45000",
      maxPrice: "90000",
      location: "Enugu",
      stock: "50",
      image: Lamp,
      moq: "4",
    },
    {
      id: "456uiii",
      name: "iPhone",
      description: "Na correct phone be this oooo, buy am now before e finish",
      minPrice: "45000",
      maxPrice: "90000",
      location: "Lagos",
      stock: "50",
      image: Phone,
      moq: "4",
    },
    {
      id: "989jjjj",
      name: "Shorts",
      description: "Na correct shorts be this oooo, buy am now before e finish",
      minPrice: "45000",
      maxPrice: "90000",
      location: "Enugu",
      stock: "50",
      image: Shorts,
      moq: "4",
    },
    {
      id: "jki8899",
      name: "Roller skatees",
      description: "Na correct sjates be this oooo, buy am now before e finish",
      minPrice: "45000",
      maxPrice: "90000",
      location: "Lagos",
      stock: "50",
      image: Skates,
      moq: "4",
    },
    {
      id: "908876",
      name: "Speaker wey get bass",
      description:
        "Na correct speaker be this oooo, buy am now before e finish",
      minPrice: "45000",
      maxPrice: "90000",
      location: "Lagos",
      stock: "50",
      image: Speaker,
      moq: "4",
    },
    {
      id: "ju7654",
      name: "Table",
      description: "Na correct table be this oooo, buy am now before e finish",
      minPrice: "45000",
      maxPrice: "90000",
      location: "Lagos",
      stock: "50",
      image: Table,
      moq: "4",
    },
  ],
  cart: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const isInCart = state.cart.find((prod) =>
        prod.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: isInCart
          ? state.cart.map((prod) =>
              prod.id === action.payload.id
                ? { ...prod, qty: prod.qty + 1 }
                : prod
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;

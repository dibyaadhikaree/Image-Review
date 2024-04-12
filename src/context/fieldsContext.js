import { createContext, useContext, useReducer } from "react";
import { data } from "../data/fields";

import { generateRandomColor } from "./../components/utils";

const fieldContext = createContext();

const reducer = function (state, action) {
  switch (action.type) {
    case "setClicked": {
      const newState = state.map((el) => {
        if (el === action.payload) {
          return { ...el, clicked: !el.clicked };
        } else return el;
      });

      return newState;
    }

    case "setHover": {
      const newState = state.map((el) => {
        if (el === action.payload) {
          return { ...el, hovered: true };
        } else return el;
      });

      return newState;
    }

    case "setUnhover": {
      const newState = state.map((el) => {
        if (el === action.payload) {
          return { ...el, hovered: false };
        } else return el;
      });
      return newState;
    }

    case "deleteClicked": {
      const newState = state.map((el) => {
        return { ...el, clicked: false };
      });
      return newState;
    }

    default:
      break;
  }
};

export default function FieldProvider({ children }) {
  const initalData = data.map((el, i) => {
    return {
      value: el.content.value,
      label: el.label,
      id: el.id,
      clicked: false,
      color: generateRandomColor(),
      hovered: false,
      position: el.content.position,
    };
  });

  const [fields, dispatch] = useReducer(reducer, initalData);

  return (
    <fieldContext.Provider value={[fields, dispatch]}>
      {children}
    </fieldContext.Provider>
  );
}

export const useField = function () {
  const context = useContext(fieldContext);
  if (context === undefined) console.log("Context used outside the provider");
  return context;
};

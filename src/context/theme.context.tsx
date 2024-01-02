"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type State = {
  backgroundColorClass: string;
  textColorClass: string;
  navigationImageFilter?: string;
};

export type SetAction = {
  type: "set";
  backgroundColorClass: string;
  textColorClass: string;
  navigationImageFilter?: string;
};

export type ResetAction = {
  type: "reset";
};

type ActionType = SetAction | ResetAction

export const initialState: State = {
  backgroundColorClass: "bg-black",
  textColorClass: "text-white",
};

const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "set":
      return {
        ...state,
        backgroundColorClass: action.backgroundColorClass,
        textColorClass: action.textColorClass,
        navigationImageFilter: action.navigationImageFilter,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const ThemeContext = createContext<{
  state: State;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

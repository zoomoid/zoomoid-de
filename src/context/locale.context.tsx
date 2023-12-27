"use client";

import i18n, { Locale } from "@/i18n";
import React, { Dispatch, createContext, useReducer } from "react";

type State = {
  lang: Locale;
};

type ActionType = {
  type: Locale;
};

const initialState: State = {
  lang: i18n.defaultLocale,
};

const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "de":
      return { ...state, lang: "de" };
    case "en":
      return { ...state, lang: "en" };
    default:
      return state;
  }
};

export const LocaleContext = createContext<{
  state: State;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const LocaleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LocaleContext.Provider value={{ state, dispatch }}>
      {children}
    </LocaleContext.Provider>
  );
};

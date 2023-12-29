"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type State = {
  playing?: boolean;
  uri?: string;
  title?: string;
  index?: number;
  reset?: boolean;
};

type PlayAction = {
  type: "play";
  uri: string;
  title: string;
  index: number;
  interactive: boolean;
};

type StopAction = {
  type: "stop";
};

type PauseAction = {
  type: "pause";
};

type ResumeAction = {
  type: "resume";
};

type Action = PlayAction | StopAction | PauseAction | ResumeAction;

const initialState: State = {};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "play":
      return {
        ...state,
        playing: true,
        title: action.title,
        uri: action.uri,
        index: action.index,
        reset: action.interactive,
      };
    case "stop":
      return {
        ...state,
        playing: undefined,
        title: undefined,
        uri: undefined,
        index: undefined,
        reset: true,
      };
    case "pause":
      return { ...state, playing: false };
    case "resume":
      return { ...state, playing: true };
    default:
      return state;
  }
};

export const PlayerContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const PlayerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
};

import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <Provider store={store}>{element}</Provider>
);

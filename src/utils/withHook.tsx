import { IWithHook } from "./types";

export const withHook: IWithHook = (hook, Component) => (
  <Component {...hook()} />
);

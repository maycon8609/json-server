import { ReactElement } from "react";

export type IWithHook<T = any> = (
  hook: () => T,
  Component: ReactElement<T>
) => ReactElement;

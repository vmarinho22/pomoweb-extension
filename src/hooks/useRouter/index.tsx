import { useContext } from "react";
import { RouterContext } from "~contexts/router";

export const useRouter = () => {
  const context = useContext(RouterContext);

  return context;
}
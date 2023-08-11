import { createContext, useCallback, useState } from "react";

export const RouterContext = createContext(null);

interface Props {
  routes: {
    prefix: string,
    component: any,
    isDefault?: boolean;
  }[]
}

export default function Router({ routes }: Props) {
  const [currentRoute, setCurrentRoute] = useState(routes.find((route) => route?.isDefault) || routes[0]);
  const [params, setParams] = useState(null);

  const CurrentRouteComponent = currentRoute?.component;

  const goTo = useCallback((route: string, params = null) => {
    const routeFound = routes.find((routeItem) => routeItem.prefix === route);

    if (!routeFound) {
      throw new Error(`Route ${route} not found`);
    }

    setCurrentRoute(routeFound);

    if (params) {
      setParams(params);
    }
  }, []);

  return (
    <RouterContext.Provider value={{
      currentRoute,
      params,
      goTo,
    }}>
      <CurrentRouteComponent />
    </RouterContext.Provider>
  )
}
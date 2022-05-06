import Home from "pages/Home/Home";

export const routeNames = {
  home: "/",
};

const routes = [
  {
    path: routeNames.home,
    title: "Home",
    component: Home,
  },
];

const mappedRoutes = routes.map((route) => {
  const requiresAuth = Boolean(route.authenticatedRoute);

  return {
    path: route.path,
    component: route.component,
    authenticatedRoute: requiresAuth,
  };
});

export default mappedRoutes;

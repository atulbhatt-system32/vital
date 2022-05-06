import Home from "pages/Home/Home";
import Projects from "pages/Projects/Projects";

export const routeNames = {
  home: "/",
  projects: "/projects",
};

const routes = [
  {
    path: routeNames.home,
    title: "Home",
    component: Home,
  },
  {
    path: routeNames.projects,
    title: "Projects",
    component: Projects,
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

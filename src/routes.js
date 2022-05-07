import Home from "pages/Home/Home";
import Projects from "pages/Projects/Projects";
import ProjectDetails from "pages/ProjectDetails/ProjectDetails";

export const routeNames = {
  home: "/",
  projects: "/projects",
  project_details: "/project_details",
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
  {
    path: routeNames.project_details,
    title: "Project Details",
    component: ProjectDetails,
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

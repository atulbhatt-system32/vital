import { logo } from "assets/img";
import { Footer, GradientBtn } from "components";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import routes from "routes";
// import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="nav_mobile">
            <div className="brand_logo_wrapper_mob">
              <img src={logo} alt="brand logo" />
              <span className="brand_name">VITAL</span>
            </div>
          </div>
          <div className="nav_desktop">
            <div className="brand_logo_wrapper">
              <img src={logo} alt="brand logo" />
              <span className="brand_name">VITAL</span>
            </div>
            <div className="nav_links">
              <div className="links_wrapper">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = "/";
                  }}
                >
                  Home
                </a>
                <a href="*">About Us</a>
                <a
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = "/projects";
                  }}
                >
                  Projects
                </a>
                <a href="*">Contact</a>
              </div>
              <div className="connect_wrapper">
                <GradientBtn text="Connect" />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              path={route.path}
              key={"route-key-" + index}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

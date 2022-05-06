import { logo } from "assets/img";
import { GradientBtn } from "components";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import routes from "routes";
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
                <a href="*">Home</a>
                <a href="*">About Us</a>
                <a href="/projects">Projects</a>
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
    </div>
  );
}

export default App;

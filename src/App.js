import { logo } from './assets/img';
import { GradientBtn } from './components';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <nav>
          <div className='nav_mobile'>
            <img src={logo} alt='brand logo' />
            <span className='brand_name'>VITAL</span>
          </div>
          <div className='nav_desktop'>
            <div className='brand_logo_wrapper'>
              <img src={logo} alt='brand logo' />
              <span className='brand_name'>VITAL</span>
            </div>
            <div className='nav_links'>
              <div className='links_wrapper'>
                <a href='#'>Home</a>
                <a href='#'>About Us</a>
                <a href='#'>Projects</a>
                <a href='#'>Contact</a>
              </div>
              <div className='connect_wrapper'>
                <GradientBtn text='Connect' />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Home />
    </div>
  );
}

export default App;

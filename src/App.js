import { logo } from './assets/img';
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
        </nav>
      </header>
      <Home />
    </div>
  );
}

export default App;

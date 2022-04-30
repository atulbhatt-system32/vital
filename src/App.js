import { logo } from './assets/img';

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
      <main>
        <section className='hero_section mobile'>
          <div className='hero_section-content'>
            <span>Your fully decentralised money pot</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

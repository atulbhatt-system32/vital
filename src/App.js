import { logo, hero_text } from './assets/img';
import { BasicCard, GradientBtn } from './components/index';

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
          <div className='hero_section_content'>
            <div className='hero_section_text_wrapper'>
              <img src={hero_text} alt='your fully decentralized money pot' />
            </div>
            <div className='card_wrapper'>
              <BasicCard>
                <span className='card_text'>
                  Create, share, participate securely in a transparent and
                  automated way
                </span>
                <GradientBtn text='Get Started' />
              </BasicCard>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

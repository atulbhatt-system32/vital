import { hero_text } from '../../assets/img';
import { BasicCard, GradientBtn } from '../../components';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className='home'>
      <main>
        {/* HERO SECTION */}
        <section className={[styles.hero_section, styles.mobile].join(' ')}>
          <div className={styles.hero_section_content}>
            <div className={styles.hero_section_text_wrapper}>
              <img src={hero_text} alt='your fully decentralized money pot' />
            </div>
            <div className={styles.card_wrapper}>
              <BasicCard>
                <span className={styles.card_text}>
                  Create, share, participate securely in a transparent and
                  automated way
                </span>
                <GradientBtn text='Get Started' />
              </BasicCard>
            </div>
          </div>
        </section>

        <section className={[styles.hero_section, styles.desktop].join(' ')}>
          <div className={styles.hero_section_content}>
            <div className={styles.hero_section_left}>
              <div className={styles.hero_section_text_wrapper}>
                <img src={hero_text} alt='your fully decentralized money pot' />
              </div>
              <div className={styles.card_wrapper}>
                <BasicCard>
                  <span className={styles.card_text}>
                    Create, share, participate securely in a transparent and
                    automated way
                  </span>
                  <div className={styles.gradient_btn_wrapper}>
                    <GradientBtn text='Create' />
                  </div>
                </BasicCard>
              </div>
            </div>
          </div>
        </section>
        {/* HERO SECTION END */}
      </main>
    </div>
  );
};

export default Home;

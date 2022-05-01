import { hero_text } from "../../assets/img";
import { BasicCard, GradientBtn } from "../../components";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className="home">
      <main>
        {" "}
        {/* HERO SECTION */}{" "}
        <section className={[styles.hero_section, styles.mobile].join(" ")}>
          <div className={styles.hero_section_content}>
            <div className={styles.hero_section_text_wrapper}>
              <img src={hero_text} alt="your fully decentralized money pot" />
            </div>{" "}
            <div className={styles.card_wrapper}>
              <BasicCard>
                <span className={styles.card_text}>
                  Create, share, participate securely in a transparent and
                  automated way{" "}
                </span>{" "}
                <GradientBtn text="Create" />
              </BasicCard>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className={[styles.hero_section, styles.desktop].join(" ")}>
          <div className={styles.hero_section_content}>
            <div className={styles.hero_section_left}>
              <div className={styles.hero_section_text_wrapper}>
                <img src={hero_text} alt="your fully decentralized money pot" />
              </div>{" "}
              <div className={styles.card_wrapper}>
                <BasicCard>
                  <span className={styles.card_text}>
                    Create, share, participate securely in a transparent and
                    automated way{" "}
                  </span>{" "}
                  <div className={styles.gradient_btn_wrapper}>
                    <GradientBtn text="Create" />
                  </div>{" "}
                </BasicCard>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* HERO SECTION END */}{" "}
        <section className={styles.main_about}>
          <h2 className={styles.main_head}>About us</h2>
          <p className={styles.main_text}>
            Vital is a fully decentralized application allowing anyone to create
            a fundraising project for all types of needs:{" "}
            <strong>Wedding, birthday, retirement, medical</strong> support or
            simply for <strong>common expenses.</strong>
          </p>
          <p className={styles.main_text}>
            Built on the Elrond blockchain, Vital is fully governed by Smart
            Contracts that provide transparency and security for our users.Our
            business model allows us to let you spend your kitty for free by
            spending it with one of our partners or by participating in our
            staking program.
          </p>

          <div className={styles.main_btn}>
            <GradientBtn text="How does this work?" />
          </div>
        </section>
        <section className="main_carousel">
          <h2 className="main_carousel_head">Popular Projects</h2>
          <Carousel />
          {/* <div classNa></div> */}
        </section>
      </main>{" "}
    </div>
  );
};

export default Home;

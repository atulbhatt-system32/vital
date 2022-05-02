import {
  hero_text,
  how_1_mobile,
  how_2_mobile,
  how_3_mobile,
  step1_notebook,
} from "../../assets/img";
import { BasicCard, GradientBtn } from "../../components";
import Carousel from "../../components/Carousel/Carousel";
import AdvanceCard from "../../components/Card/AdvanceCard/AdvanceCard";
import styles from "./Home.module.scss";
import Play from "../../assets/img/play.svg";
import Charity from "../../assets/img/charity.svg";
import Ocassion from "../../components/Ocassion/Ocassion.js";
import Footer from "../../components/Footer/Footer.js";
const Home = () => {
  return (
    <div className="home">
      <main>
        {/* HERO SECTION */}
        <section className={[styles.hero_section, styles.mobile].join(" ")}>
          <div className={styles.hero_section_content}>
            <div className={styles.hero_section_text_wrapper}>
              <img src={hero_text} alt="your fully decentralized money pot" />
            </div>
            <div className={styles.card_wrapper}>
              <BasicCard>
                <span className={styles.card_text}>
                  Create, share, participate securely in a transparent and
                  automated way
                </span>
                <GradientBtn text="Get Started" />
              </BasicCard>
            </div>
          </div>
        </section>

        <section className={[styles.hero_section, styles.desktop].join(" ")}>
          <div className={styles.hero_section_content}>
            <div className={styles.hero_section_left}>
              <div className={styles.hero_section_text_wrapper}>
                <img src={hero_text} alt="your fully decentralized money pot" />
              </div>
              <div className={styles.card_wrapper}>
                <BasicCard>
                  <span className={styles.card_text}>
                    Create, share, participate securely in a transparent and
                    automated way{" "}
                  </span>{" "}
                  <div className={styles.gradient_btn_wrapper}>
                    <GradientBtn text="Create" />
                  </div>
                </BasicCard>
              </div>
            </div>
          </div>
        </section>
        {/* HERO SECTION END */}

        {/* About Section Begins */}
        <section className={[styles.main_about, styles.mobile].join(" ")}>
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

        <section className={[styles.main_about, styles.desktop].join(" ")}>
          <div className={styles.main_about_left}>
            <div className={styles.main_about_left_content}>
              <h2 className={styles.main_head}>About us</h2>
              <p className={styles.main_text}>
                Vital is a fully decentralized application allowing anyone to
                create a fundraising project for all types of needs:{" "}
                <strong>Wedding, birthday, retirement, medical</strong> support
                or simply for <strong>common expenses.</strong>
              </p>
              <p className={styles.main_text}>
                Built on the Elrond blockchain, Vital is fully governed by Smart
                Contracts that provide transparency and security for our
                users.Our business model allows us to let you spend your kitty
                for free by spending it with one of our partners or by
                participating in our staking program.
              </p>

              <div className={styles.main_btn_wrapper}>
                <GradientBtn text="How does this work?" />
              </div>
            </div>
          </div>
        </section>
        {/* About Section Ends */}

        {/* Popular Projects Begin */}
        <section className={styles.main_carousel}>
          <h2 className={styles.carousel_head}>Popular Projects</h2>
          <Carousel />
          <div className={styles.wrap_link}>
            <div className={styles.carousel_link}>
              <a href="*" className={styles.circle}>
                .
              </a>
              <a
                href="*"
                className={[styles.circle, styles.circle_active].join(" ")}
              >
                .
              </a>
              <a href="*" className={styles.circle}>
                .
              </a>
              <a href="*" className={styles.circle}>
                .
              </a>
              <a href="*" className={styles.circle}>
                .
              </a>
            </div>
          </div>
        </section>
        {/* Popular Projects End */}

        {/* How Section Begins*/}
        <section className={[styles.how_section, styles.mobile].join(" ")}>
          <div className={styles.how_section_content}>
            <div className={styles.how_section_heading}>
              <span>How does this work?</span>
            </div>
            <div className={styles.how_steps_wrapper}>
              <div className={styles.how_step1}>
                <div className={styles.how_step_bg}>
                  <img src={how_1_mobile} alt="step1" />
                  <div className={styles.step_content}>
                    <img src={step1_notebook} alt="step1" />
                    <span>Create</span>
                    <span>
                      Create & personalize your money pot in just a few clicks
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.how_step2}>
                <div className={styles.how_step_bg}>
                  <img src={how_2_mobile} alt="step2" />
                  <div className={styles.step_content}>
                    <img src={step1_notebook} alt="step2" />
                    <span>Create</span>
                    <span>
                      Create & personalize your money pot in just a few clicks
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.how_step3}>
                <div className={styles.how_step_bg}>
                  <img src={how_3_mobile} alt="step3" />
                  <div className={styles.step_content}>
                    <img src={step1_notebook} alt="step3" />
                    <span>Create</span>
                    <span>
                      Create & personalize your money pot in just a few clicks
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.how_step4}>
                <div className={styles.how_step_bg}>
                  <div className={styles.step_content}>
                    <img src={step1_notebook} alt="step3" />
                    <span>Create</span>
                    <span>
                      Create & personalize your money pot in just a few clicks
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How Section ends */}

        {/* Curved Image Section */}

        {/* <section className={styles.curved_image_section}>
          <div className={styles.curved_image_card}>
            <img
              src="https://images.unsplash.com/photo-1473649085228-583485e6e4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt="kids school"
            />
          </div>
        </section> */}

        {/* Curved Image SEction Ends */}

        <section className={styles.main_advance_cards}>
          <AdvanceCard
            id={1}
            btn="party"
            title="Personal projects"
            img={Play}
            description_first="Create your kitty for all types of needs: 
            Wedding, birthday, retirement, medical 
            support or simply for common expenses. "
            description_second="And invite your friends, family or 
            entourage to participate in the 
            simplest way"
            text="View all personal projects"
          />
          <AdvanceCard
            id={2}
            btn="charity"
            title="Charitable associations"
            img={Charity}
            description_first="Participate in the remarkable work of these 
            associations defending forgotten causes of 
            this world.All the associations present on Vital 
            are certified, and all transactions are 
            governed by Smart Contracts which ensure 
            reliability, transparency and security."
            text="See all charities"
          />
        </section>
        <section className={styles.main_ocassion}>
          <span className={styles.main_ocassion_name}>
            Birthday Party And Wedding
          </span>
          <Ocassion />
          <div className={styles.wrap_link}>
            <div className={styles.carousel_link}>
              <a href="*" className={styles.circle}>
                .
              </a>
              <a
                href="*"
                className={[styles.circle, styles.circle_active].join(" ")}
              >
                .
              </a>
              <a href="*" className={styles.circle}>
                .
              </a>
              <a href="*" className={styles.circle}>
                .
              </a>
              <a href="*" className={styles.circle}>
                .
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

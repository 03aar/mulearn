import React from "react";
import styles from "./BuildForTeam.module.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

const Build4Team = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span>Build</span> For Team
              </p>
              <p className={styles.fv_tagline}>
                GTech μLearn in association with Pygrammers present
                BuildForTeam, your chance to build your favorite team’s website.
                With your favourite teams battling it out on the Football field,
                it’s up to you to build them an awesome website.
              </p>
              <div class={styles.supporters}>
                <span>Supported By </span>

                <div className={styles.s_images}>
                  <a
                    href="https://pygrammers.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/events/build4team/pygrammers.png"
                      alt="Pygrammers"
                      class={styles.supporter}
                    />
                  </a>
                </div>
              </div>
              <a
                href="https://bit.ly/BuildForTeam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.register}>Register Now</button>
              </a>
            </div>
            <img
              src="/assets/events/build4team/fvimg.gif"
              alt=""
              className={styles.fv_image}
            />
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.second_view_container}>
              <p className={styles.sv_heading}>Build, Learn & Earn</p>
              <p className={styles.sv_tagline}>
                Nothing get’s the world talking like the FIFA World Cup⚽ does
                ‼️ Has your favourite team made it to the Knockout stages ❓
                Well, here’s your chance to make your team win, regardless of
                whether they’re winning on the field.
              </p>
              <div className={styles.sv_points}>
                <div className={styles.sv_point}>
                  <p className={styles.sv_image}>⚒️</p>
                  <div className={styles.svp_heading}>Build</div>
                  <div className={styles.svp_text}>
                    To Participate in BuildForTeam Event, You have to Build an
                    awesome website for your favourite World Cup team to express
                    your love and support.
                  </div>
                </div>
                <div className={styles.sv_point}>
                  <p className={styles.sv_image}>🖥</p>
                  <div className={styles.svp_heading}>Learn</div>
                  <div className={styles.svp_text}>
                    By building a website for your favourite football team, you
                    are improving yourself by learning new technology and web
                    development skills⚽.
                  </div>
                </div>

                <div className={styles.sv_point}>
                  <p className={styles.sv_image}>🏆</p>
                  <div className={styles.svp_heading}>Earn</div>
                  <div className={styles.svp_text}>
                    Once you’re done crafting the website, fill the form given
                    above and earn Karma points 💥 Selected participants also
                    stand a chance of winning cool goodies.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.third_view_container}>
          <div className={styles.third_view}>
            <p className={styles.tv_heading}>Have Doubts?</p>
            <p className={styles.tv_tagline}>
              IIf you have any questions or concerns about this event, or if you
              encounter any difficulties while participating, Feel free to
              contact us via Discord.
            </p>
            <a
              href="https://discord.mulearn.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.register}>Join Discord</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Build4Team;

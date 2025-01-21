import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const typedTitle = new Typed(titleRef.current, {
      strings: ["Hi, I'm Sten"],
      typeSpeed: 30,
      startDelay: 100,
      showCursor: false,
      onComplete: () => {
        new Typed(descriptionRef.current, {
          strings: [
            "I'm a front-end developer with 1 year of experience using React and JavaScript. Reach out if you'd like to learn more!",
          ],
          typeSpeed: 17.5,
          startDelay: 400,
          showCursor: false,
        });
      },
    });
    return () => {
      typedTitle.destroy();
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} ref={titleRef}></h1>
        <p className={styles.description} ref={descriptionRef}></p>
        <a href="mailto:stenlohvart402@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

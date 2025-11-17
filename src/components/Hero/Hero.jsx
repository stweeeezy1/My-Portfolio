import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const typedTitle = new Typed(titleRef.current, {
      strings: ["Welcome to the Multiverse of Rick and Morty"],
      typeSpeed: 30,
      startDelay: 100,
      showCursor: false,
      onComplete: () => {
        new Typed(descriptionRef.current, {
          strings: [
            "join Rick and Morty as they travel through infinite universes, encounter bizarre creatures, and embark on mind-bending adventures.",
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
          Contact
        </a>
      </div>
      <img
        src={getImageUrl("hero/HeroImage.jpg")}
        alt="Hero image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

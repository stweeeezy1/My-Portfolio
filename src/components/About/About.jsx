import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>HEROES</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/rick.png")} alt="Rick Sanchez"  style={{
    width: "100px",
    height: "100px",
    objectFit: "contain"
  }}/>
            <div className={styles.aboutItemText}>
              <h3>Rick Sanchez</h3>
              <p>
              Brilliant but chaotic scientist who drags everyone into wild interdimensional adventures.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/morty.png")} alt="Morty Smith"  style={{
    width: "100px",
    height: "100px",
    objectFit: "contain"
  }}/>
            <div className={styles.aboutItemText}>
              <h3>Morty Smith</h3>
              <p>
              Anxious yet kind-hearted teen who often becomes the moral compass of the duo.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/summer.png")} alt="Summer Smith"  style={{
    width: "100px",
    height: "100px",
    objectFit: "contain"
  }}/>
            <div className={styles.aboutItemText}>
              <h3>Summer Smith</h3>
              <p>
              Confident and bold sister who proves she’s just as capable on every crazy mission.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

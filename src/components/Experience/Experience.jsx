import React, { useEffect, useState } from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/episode");
        const data = await res.json();
        setEpisodes(data.results);
      } catch (error) {
        console.error("Failed to load episodes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Episodes</h2>

      {loading ? (
        <p style={{ color: "white" }}>Loading episodes...</p>
      ) : (
        <div className={styles.content}>
          <div className={styles.skills}>
            {episodes.map((ep) => (
              <div key={ep.id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl("skills/R&M.png")} alt={ep.name} />
                </div>
                <p>{ep.episode} — {ep.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
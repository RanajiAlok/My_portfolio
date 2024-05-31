import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alok Kumar Singh</h1>
        <p className={styles.description}>
          I am a proficient programmer skilled in C++ and Python, with a strong
          foundation in MERN stack web development. Additionally, I have
          experience working with Django and machine learning, enabling me to
          build robust, scalable applications and intelligent systems. Reach out
          if you'd like to learn more!
        </p>
        <a href="mailto:aloksingh4975@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

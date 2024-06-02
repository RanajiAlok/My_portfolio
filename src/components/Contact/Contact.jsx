import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/cv.png")} alt="Resume" />
          <a href="https://drive.google.com/file/d/10O-jx30SVCmGZTKGy1nChgje4nDjHyKc/view?usp=sharing">
            My Resume
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:aloksingh4975@gmail.com">aloksingh4975.gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/alok-kumar-singh-00767822b/">
            linkedin.com/Alok Kumar Singh
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://https://github.com/RanajiAlok">
            github.com/Alok Kumar Singh
          </a>
        </li>
      </ul>
    </footer>
  );
};

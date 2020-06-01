import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, href }) => (
  <>
    {href ? (
      <a
        href={href}
        target="_blank"
        className={styles.listItemButton}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <button className={styles.formButton} type="submit">
        {children}
      </button>
    )}
  </>
);

export default Button;

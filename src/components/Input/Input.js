import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ tag: Tag, name, label, maxLength }) => (
  <div className={styles.formItem}>
    <Tag
      className={Tag === "input" ? styles.input : styles.textarea}
      type="text"
      name={name}
      id={name}
      maxLength={maxLength}
      placeholder=" "
      required
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.formItemBar}></div>
  </div>
);

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  tag: "input",
  maxLength: 200,
};
export default Input;

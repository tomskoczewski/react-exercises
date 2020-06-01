import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";

//Possible to destructuring instead of props i.e.const ListItem = ({image, name, description, twitterLink})
const ListItem = (props) => (
  <li className={styles.wrapper}>
    <img src={props.image} alt={props.name} className={styles.listItemImage} />
    <div>
      <h2 className={styles.listItemName}>{props.name} </h2>
      <p className={styles.listItemDescription}>{props.description}</p>
      <a
        target="_blank"
        className={styles.listItemButton}
        href={props.twitterLink}
        rel="noopener noreferrer"
      >
        visit twitter page
      </a>
    </div>
  </li>
);
ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  description: "One of React creators",
};

export default ListItem;

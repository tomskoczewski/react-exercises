import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";

//Possible to destructuring instead of props i.e.const ListItem = (props) to ->
const ListItem = ({ image, name, description, twitterLink }) => {
  const ImageTag = image ? "img" : "div";
  return (
    <li className={styles.wrapper}>
      <ImageTag
        src={image}
        alt={name}
        className={image ? styles.listItemImage : styles.listItemImageNone}
      />
      <div>
        <h2 className={styles.listItemName}>{name} </h2>
        <p className={styles.listItemDescription}>{description}</p>
        <a
          target="_blank"
          className={styles.listItemButton}
          href={twitterLink}
          rel="noopener noreferrer"
        >
          visit twitter page
        </a>
      </div>
    </li>
  );
};
ListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  image: null,
  description: "One of React creators",
};

export default ListItem;

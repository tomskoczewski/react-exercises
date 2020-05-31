import React from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

const ListItem = (props) => (
  <li className="listItem__wrapper">
    <img src={props.image} alt={props.name} className="listItem__image" />
    <div>
      <h2 className="listItem__name">{props.name} </h2>
      <p className="listItem__description">{props.description}</p>
      <a className="listItem__button" href={props.twitterLink}>
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

import PropTypes from "prop-types";

import "./Container.css";

function Container({ children, className = "", as: Component = "div" }) {
  const classes = ["container", className].filter(Boolean).join(" ");

  return <Component className={classes}>{children}</Component>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.elementType,
};

export default Container;
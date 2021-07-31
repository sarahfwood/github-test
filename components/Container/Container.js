import propTypes from "prop-types";
import Styles from "./Container.module.css";

const Container = ({ children, className, style }) => (
  <div style={style} className={`${Styles.container} ${className}`}>
    {children}
  </div>
);

Container.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  className: propTypes.string,
  style: propTypes.oneOfType([propTypes.object, propTypes.array]),
};

Container.defaultProps = {
  className: "",
  style: undefined,
};

export default Container;

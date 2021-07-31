import { PropTypes } from "prop-types";
import styles from "./Select.module.css";

const Select = ({ item, onclick }) => (
  <option onClick={onclick} className={styles.selectItem}>
    {item.label}
  </option>
);

Select.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Select;

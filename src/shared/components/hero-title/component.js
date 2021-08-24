import PropTypes from 'prop-types';

import styles from './component.module.css';

const HeroTitle = ({ children }) => (
  <h1 className={styles.root}>{children}</h1>
);

HeroTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroTitle;

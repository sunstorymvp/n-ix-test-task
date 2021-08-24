import classNames from 'classnames';

import styles from './component.module.css';
import * as constants from './constants';

interface Props {
  array: Array<0 | 1>
}

const LivingCells: React.FunctionComponent<Props> = ({ array }) => (
  <div className={styles.root} style={{ '--row-length': constants.ROW_LENGTH }}>
    {
      array.map((isAlive, index) => {
        const cellClassList = classNames(styles.cell, {
          [styles.cell__alive]: isAlive,
          [styles.cell__dead]: !isAlive,
        });

        return (
          <div key={index} className={cellClassList} />
        );
      })
    }
  </div>
);

export default LivingCells;

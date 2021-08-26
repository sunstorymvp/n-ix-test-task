import LivingCells from './component';
import useNextArrayTick from './use-next-array-tick';
import * as constants from './constants';

const LivingCellsContainer: React.FunctionComponent = () => {
  const initialArray = new Array(constants.ARRAY_LENGTH).fill(0).map(() => (Math.random() > 0.5 ? 1 : 0));
  const array = useNextArrayTick(initialArray, 400);

  return (
    <LivingCells array={array} />
  );
};

export default LivingCellsContainer;

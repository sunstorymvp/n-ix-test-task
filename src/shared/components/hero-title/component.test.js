import renderer from 'react-test-renderer';

import HeroTitle from './component';

test('it renders', () => {
  const tree = renderer.create(<HeroTitle>title</HeroTitle>).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react" 
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import StarshipRow from './starshipRow';


Enzyme.configure({ adapter: new Adapter() });

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('starshipRow Component', () => {
  test('renders content', () => {
    const wrapper = render(
      <StarshipRow
        starship={{
          name: 'teste',
          totalDuration: ' 120 days',
          stops: 3,
        }}
      />,
    );
    expect(wrapper.text()).toContain('teste');
  });
});

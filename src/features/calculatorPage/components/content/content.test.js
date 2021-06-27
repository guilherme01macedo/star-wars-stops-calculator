import React from "react" 
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Content from './content';


Enzyme.configure({ adapter: new Adapter() });

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('Content Component', () => {
  test('renders content', () => {
    const wrapper = render(
      <Content
        isLoading={false}
        isError={false}
        mglt={""}
        starships={[]}
      />,
    );
    expect(wrapper.text()).toContain('Type the distance in MGLT and discover how many stops you will need to make in your journey');
  });
});

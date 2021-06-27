import React from "react" 
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MgltInput from './mgltInput';


Enzyme.configure({ adapter: new Adapter() });

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('MgltInput Component', () => {
  test('renders content', () => {
    const wrapper = render(
      <MgltInput
        setMglt={()=>{}}
      />,
    );
    expect(wrapper.text()).toContain('Calculate');
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import { findByDataTest } from '../../../utils';

import Header from './Header';

const setup = (props = {}) => shallow(<Header {...props} />);

describe('Header Component', () => {
  let component: React.FC;

  beforeEach(() => {
    //@ts-ignore
    component = setup();
  });

  it('Should render without errors', () => {
    const wrapper = findByDataTest(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = findByDataTest(component, 'logo__img');
    expect(logo.length).toBe(1);
  });
});

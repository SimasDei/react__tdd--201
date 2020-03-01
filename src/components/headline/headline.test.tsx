import React from 'react';
import { shallow } from 'enzyme';
import Headline from './';

import { IProps } from './headline.types';
import { findByDataTest } from '../../../utils';

const setup = (props: IProps | any = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Have Props', () => {
    let wrapper: any | [];
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        description: 'Test Description',
      };
      wrapper = setup(props);
    });
    it('Should render without errors', () => {
      const component = findByDataTest(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    it('Should render h1', () => {
      const component = findByDataTest(wrapper, 'header');
      expect(component.length).toBe(1);
    });
    it('Should render p', () => {
      const component = findByDataTest(wrapper, 'description');
      expect(component.length).toBe(1);
    });
  });

  describe('Does not have props', () => {
    let wrapper: any | [];
    beforeEach(() => {
      wrapper = setup();
    });

    it('Should not render', () => {
      const component = findByDataTest(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });
});

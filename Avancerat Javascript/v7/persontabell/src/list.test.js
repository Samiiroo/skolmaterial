import React from 'react';
import { shallow } from 'enzyme';

test('Check dom-text', () => {
    const wrapper = shallow(<List />);
    expect(wrapper.find('.foo').text()).toContain('test')
   });
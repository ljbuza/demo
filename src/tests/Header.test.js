import React from 'react';
import Header from '../components/Header';
const ReactTestRenderer = require('react-test-renderer');
import { Router, MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

test('Header displays correct text', () => {
  const wrapper = shallow(
    <Header title="Data Browser" subtitle="Network Information" />,
  );
  expect(wrapper.find('div').at(1).text()).toEqual('Network Information');
});

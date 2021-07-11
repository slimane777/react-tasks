import React from 'react';
import renderer from 'react-test-renderer';
import TasksCount from '../TasksCount';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('TasksCount test', () => {
  const initialState = {tasks:{tasks: []}}
  const mockStore = configureStore()
  let store,wrapper

  it('TasksCount should match snapshot', () => {
    store = mockStore(initialState)
    const component = renderer.create(<Provider store={store}><TasksCount
      count={() => {}} /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

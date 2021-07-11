import React from 'react';
import renderer from 'react-test-renderer';
import ClearButton from '../ClearButton';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('ClearButton test', () => {
  const initialState = {tasks:{tasks: []}}
  const mockStore = configureStore()
  let store,wrapper

  it('ClearButton should match snapshot', () => {
    store = mockStore(initialState)
    const component = renderer.create(<Provider store={store}><ClearButton
      /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

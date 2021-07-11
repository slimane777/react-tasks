import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Header test', () => {
  const initialState = {tasks:{tasks: []}}
  const mockStore = configureStore()
  let store,wrapper

  it('Header should match snapshot', () => {
    store = mockStore(initialState)
    const component = renderer.create(<Provider store={store}><Header
      /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

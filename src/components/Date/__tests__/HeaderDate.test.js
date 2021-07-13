import React from 'react';
import renderer from 'react-test-renderer';
import HeaderDate from '../HeaderDate';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('HeaderDate test', () => {
  const initialState = {tasks:{tasks: []}}
  const mockStore = configureStore()
  let store

  it('HeaderDate should match snapshot', () => {
    store = mockStore(initialState)
    const component = renderer.create(<Provider store={store}><HeaderDate
      /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

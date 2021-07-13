import React from 'react';
import renderer from 'react-test-renderer';
import Task from '../Task';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Task test', () => {
  const initialState = {tasks:{tasks: []}}
  const mockStore = configureStore()
  let store

  store = mockStore(initialState)

  it('Task should match snapshot', () => {
    const component = renderer.create(<Provider store={store}><Task /></Provider>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()

  });

});

import React from 'react';
import renderer from 'react-test-renderer';
import TaskForm from '../TaskForm';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('TaskForm test', () => {
  const initialState = {tasks:{tasks: []}}
  const mockStore = configureStore()
  let store,wrapper

  it('TaskForm should match snapshot', () => {
    store = mockStore(initialState)
    const component = renderer.create(<Provider store={store}><TaskForm
      title={'title'} /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

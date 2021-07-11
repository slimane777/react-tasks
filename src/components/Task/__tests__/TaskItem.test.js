import React from 'react';
import renderer from 'react-test-renderer';
import TaskItem from '../TaskItem';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('TaskItem test', () => {
  const initialState = {tasks:{tasks: []}}
  const mockStore = configureStore()
  let store,task

  it('TaskItem should match snapshot', () => {
    store = mockStore(initialState)
    task = {}
    const component = renderer.create(<Provider store={store}><TaskItem
      task={task} /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

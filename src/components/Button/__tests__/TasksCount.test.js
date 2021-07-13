import React from 'react';
import renderer from 'react-test-renderer';
import TasksCount from '../TasksCount';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('TasksCount test', () => {
  const initialState = {tasks:{tasks: []}}
  const mockStore = configureStore()
  let store

  store = mockStore(initialState)

  it('TasksCount should match snapshot', () => {
    const component = renderer.create(<Provider store={store}><TasksCount
      count={4} /></Provider>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()

  });

  it('TasksCount should have props', () => {

    const wrapper = shallow(<Provider store={store}><TasksCount count={4} /></Provider>)
    expect(wrapper.find(TasksCount).prop('count')).toBe(4)

  });
});

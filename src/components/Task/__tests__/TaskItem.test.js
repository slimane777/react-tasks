import React from 'react';
import renderer from 'react-test-renderer';
import TaskItem from '../TaskItem';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('TaskItem test', () => {
  const initialState = {tasks:{tasks: []}}
  const mockStore = configureStore()
  let store,task,key

  store = mockStore(initialState)
  task = {
    completed: true,
    dateOfComplete: null,
    id: 1,
    title: "title"
  }

  it('TaskItem should match snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <TaskItem task={task} />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('TaskItem should have props', () => {

    const wrapper = shallow(<Provider store={store}><TaskItem task={task} /></Provider>)
    expect(wrapper.find(TaskItem).prop('task')).toBe(task)

  });

  it('simulates click events', () => {
      const mockCallBack = sinon.spy();

      const wrapper = shallow(<Provider store={store}><TaskItem task={task} onClick={mockCallBack} /></Provider>)
      wrapper.find(TaskItem).simulate('click')
      expect(mockCallBack).toHaveProperty('callCount', 1)
  });

});

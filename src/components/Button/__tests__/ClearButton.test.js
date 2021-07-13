import React from 'react';
import renderer from 'react-test-renderer';
import ClearButton from '../ClearButton';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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

  // it('simulates click events', () => {
  //   const mockCallBack = sinon.spy();
  //   const button = shallow(<Provider store={store} ><ClearButton onClick={mockCallBack}
  //     /></Provider>);

  //     button.find('.clear').simulate('click');
  //   expect(mockCallBack).toHaveProperty('callCount', 1);
  // });

});

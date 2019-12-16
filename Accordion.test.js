import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Accordion from './Accordion';

describe(`Accordion Component`, () => {
  it.only("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders empty given no li", () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("renders empty given no li", () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('The component opens a clicked section', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it("renders empty given no li", () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
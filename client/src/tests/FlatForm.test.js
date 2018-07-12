import React from "react";
import { shallow } from "enzyme";
import FlatForm from "../components/flats/FlatForm";
import renderer from "react-test-renderer";

describe("<FlatForm component />", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<FlatForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("have 3 fields", () => {
    const wrapper = shallow(<FlatForm />);
    const count = wrapper.find(".form-group");
    expect(count.length).toEqual(3);
  });

  it("starts with an empty array", () => {
    const wrapper = shallow(<FlatForm />);
    const text = wrapper
      .find("option [selected]")
      .at(0)
      .text();
    expect(text).toEqual("Choose here");
  });

  it("starts with an empty array", () => {
    const wrapper = shallow(<FlatForm />);
    const text = wrapper
      .find("option [selected]")
      .at(1)
      .text();
    expect(text).toEqual("Choose here");
  });

  it("starts with an empty array", () => {
    const wrapper = shallow(<FlatForm />);
    const text = wrapper
      .find("option [selected]")
      .at(2)
      .text();
    expect(text).toEqual("Choose here");
  });
});

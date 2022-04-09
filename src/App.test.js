import React from "react";
import { shallow, mount } from "enzyme";
import Account from "./Account";
import App from "./App";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  const wrapper = mount(<App />);
  expect(wrapper.state("error")).toEqual(null);
});
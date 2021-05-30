
import App from './App';
import React from 'react'; 
import { shallow } from "enzyme";

describe("<App />", () => {
  it("renders an image", () => {
      const imgSrc = shallow(<App />);
      expect(imgSrc).toBeTruthy();
      expect(imgSrc.find("LazyLoadImage").length).toEqual(1);
     });
});

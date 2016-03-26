import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Post from '../../../app/components/Post';

describe("Post", function() {
  it("should contain title", function() {
        const wrapper = shallow(<Post />);
        expect(wrapper.text()).to.have.string('Title');
  });
});
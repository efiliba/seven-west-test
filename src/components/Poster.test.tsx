import { mount } from 'enzyme';
import Poster from './Poster';

describe('Poster', () => {
  it('should render the Poster as an img with the provided src', () => {
    const wrapper = mount(<Poster image="the image" />);
    const selector = wrapper.find('img');

    expect(selector.prop('src')).toBe('the image');
  });
});

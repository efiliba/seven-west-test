import { mount } from 'enzyme';
import Poster from './Poster';

describe('Poster', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Poster image="" />);

    expect(wrapper.exists(Poster)).toBe(true);
  });
});

import { mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<Card image="" logo="" caption="" />);

    expect(wrapper.exists(Card)).toBe(true);
  });
});

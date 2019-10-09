import { mount } from 'enzyme';
import LogoCaption from './LogoCaption';

describe('LogoCaption', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<LogoCaption logo="" caption="" />);

    expect(wrapper.exists(LogoCaption)).toBe(true);
  });
});

import { mount, shallow } from 'enzyme';
import IndexPage from '.';

describe('IndexPage', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<IndexPage/>);

    expect(wrapper.exists(IndexPage)).toBe(true);
  });

  it('should render GlobalStyle component', () => {
    const wrapper = shallow(<IndexPage/>);

    expect(wrapper.exists('GlobalStyleComponent')).toBe(true);
  });
});

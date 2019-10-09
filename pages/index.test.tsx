import { mount } from 'enzyme';
import IndexPage from './index';

describe('Index', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<IndexPage/>);

    expect(wrapper.find('h1').text()).toBe('Index Page');
  });
});

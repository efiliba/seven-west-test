import { mount } from 'enzyme';
import LogoCaption from './LogoCaption';

describe('LogoCaption', () => {
  const renderLogoCaption = ({logo = '', caption = ''}: {logo?: string; caption?: string;} = {}) =>
    mount(<LogoCaption logo={logo} caption={caption} />);

  it('should render the logo as an img with the provided src', () => {
    const wrapper = renderLogoCaption({logo: 'the logo'});
    const selector = wrapper.find('img');

    expect(selector.prop('src')).toBe('the logo');
  });

  it('should render the provided caption text', () => {
    const wrapper = renderLogoCaption({caption: 'the caption'});
    const selector = wrapper.find("div[className^='LogoCaption__Caption']");

    expect(selector.text()).toBe('the caption');
  });
});

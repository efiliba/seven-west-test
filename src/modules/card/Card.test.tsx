import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  const renderCard = ({image = '', logo = '', caption = ''}:
    {image?: string; logo?: string; caption?: string;} = {}
  ) => shallow(<Card image={image}  logo={logo} caption={caption} />);

  it('should render the Poster with the passed image prop', () => {
    const wrapper = renderCard({image: 'the image'})
    expect(wrapper.find('Poster').prop('image')).toBe('the image');
  });

  it('should render the LogoCaption with the passed logo and caption props', () => {
    const wrapper = renderCard({logo: 'the logo', caption: 'the caption'})

    const selector = wrapper.find('LogoCaption');

    expect(selector.prop('logo')).toBe('the logo');
    expect(selector.prop('caption')).toBe('the caption');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { mockCryptoList, mockStyles } from '../../__mocks__/mocks';
import { IntlSelectForm } from '../../components/IntlSelectForm';

describe('<IntlSelectForm />', () => {

	it('Should render correctly', () => {
		const wrapper = shallow(<IntlSelectForm list={mockCryptoList}/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render correct number of option items', () => {
		const wrapper = shallow(<IntlSelectForm list={mockCryptoList}/>);
		expect(wrapper.find('select').children()).toHaveLength(mockCryptoList.length)
	});

	it('Should add the animation style when passed in', () => {
		const wrapper = shallow(<IntlSelectForm list={mockCryptoList} anim={mockStyles.mockAnim}/>);
		expect(wrapper.instance().props.anim).toMatchObject({
			boxShadow: '0 0 3px 6px blue'
		})
	})
});
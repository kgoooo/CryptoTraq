import React from 'react';
import { shallow } from 'enzyme';
import { mockCryptoList, mockStyles } from '../../__mocks__/mocks';
import { CryptoSelectForm } from '../../components/CryptoSelectForm';

describe('<CryptoSelectForm />', () => {
	it('Snapshot: Should render component correctly when list is passed in', () => {
		const wrapper = shallow(<CryptoSelectForm list={mockCryptoList} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render correct number of option items', () => {
		const wrapper = shallow(<CryptoSelectForm list={mockCryptoList}/>);
		expect(wrapper.find('select').children()).toHaveLength(mockCryptoList.length)
	});

	it('Should add the animation style when passed in', () => {
		const wrapper = shallow(<CryptoSelectForm list={mockCryptoList} anim={mockStyles.mockAnim}/>);
		expect(wrapper.instance().props.anim).toMatchObject({
					boxShadow: '0 0 3px 6px blue'
		})
	})
});
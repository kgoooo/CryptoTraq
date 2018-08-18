import React from 'react';
import { shallow } from 'enzyme';
import {Currencies} from '../../components/Currencies';
import { mockCryptoList, mockIntlList} from '../../__mocks__/mocks';


describe('<Currencies />', () => {
	it('should render correctly', () => {
		const wrapper = shallow(<Currencies cryptoList={mockCryptoList} intlList={mockIntlList}/>)
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render 2 lists of currencies', () => {
		const wrapper = shallow(<Currencies cryptoList={mockCryptoList} intlList={mockIntlList}/>);
		expect(wrapper.find('ul')).toHaveLength(2)
	});

	it('should render the correct amount of currencies', () => {
		const wrapper = shallow(<Currencies cryptoList={mockCryptoList} intlList={mockIntlList}/>);
		expect(wrapper.find('li')).toHaveLength(7)
	})
});
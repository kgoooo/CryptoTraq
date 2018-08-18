import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
import { mockMethod } from '../../__mocks__/mocks';

describe('<Header />', () => {

	it('Should render Header correctly', () => {
		const wrapper = shallow(<Header showingCurrencyList={false} handleToggleCurrencyView={mockMethod}/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render its button with method', () => {
		const wrapper = shallow(<Header showingCurrencyList={false} handleToggleCurrencyView={mockMethod}/>);
		expect(wrapper.find('Button')).toHaveLength(1);
	})
});
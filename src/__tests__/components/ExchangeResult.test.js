import React from 'react';
import { shallow } from 'enzyme';
import { ExchangeResult } from '../../components/ExchangeResult';

describe('<ExchangeResult />', () => {

	it('Should render correctly', () => {
		const wrapper = shallow(<ExchangeResult rate={76.34} crypto={"BTC"} intl={"USD"}/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render rate correctly, when rate and currencies provided', () => {
		const wrapper = shallow(<ExchangeResult rate={76.34} crypto={"BTC"} intl={"USD"}/>);
		expect(wrapper.find('h3')).toHaveLength(1);
		expect(wrapper.text()).toEqual('The exchange rate per BTC is 76 USD')
	});

	it('should show error when no exchange rate found // error state is true.', () => {
	const wrapper = shallow(<ExchangeResult crypto={"BTC"} intl={"USD"} excError={true}/>);
		expect(wrapper.text()).toEqual("The exchange rate could not be calculated for these currencies, please try another option.")
	})
});

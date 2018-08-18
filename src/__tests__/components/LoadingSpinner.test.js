import React from 'react';
import { shallow } from 'enzyme';
import { LoadingSpinner } from '../../components/LoadingSpinner';


describe('<LoadingSpinner />', () => {

	it('should render correctly', () => {
		const wrapper = shallow(<LoadingSpinner loading={true} content={"Test Spinner"}/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('should render no spinner if loading FALSE', () => {
		const wrapper = shallow(<LoadingSpinner loading={false} content={"Test Spinner"}/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('should display the correct text content', () => {
		const wrapper = shallow(<LoadingSpinner loading={true} content={"Test Spinner"}/>);
		const paragraphEl = wrapper.find('p');
		expect(paragraphEl.text()).toEqual("Test Spinner");
	});
});
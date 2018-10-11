import React from 'react';
import { shallow } from 'enzyme';
import { mockStyles, mockMethod} from '../../__mocks__/mocks';
import Button from '../../components/Button'

describe('<Button />', ()=> {

	it('Snapshot: should render Button correctly', () => {
		const wrapper = shallow(<Button/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should add onClick method when props passed in', () => {
		const wrapper = shallow(<Button onClick={mockMethod}/>);
		expect(wrapper.props().onClick).toEqual(mockMethod);
	});

	it('Should add animation style when props passed in', () => {
		const wrapper = shallow(<Button style={[mockStyles.mockBtn, mockStyles.mockAnim]}/>);
		expect(wrapper.instance().props).toMatchObject({
		"style": [
			{"background": "transparent",
				"border": "2px solid #00FFF5",
				"borderRadius": "8px",
				"color": "#00FFF5",
				"fontSize": "inherit",
				"fontWeight": "300",
				"padding": ".5rem 2.5rem",
				"transition": "all ease-in-out .3s"},
			{
				"boxShadow": "0 0 3px 6px blue"
			}
			]})
	});

	it('should add text correctly if passed buttonContent prop', () => {
		const wrapper = shallow(<Button buttonContent={"I'm a button"}/>);
		expect(wrapper.text()).toBe("I'm a button");
	});

	it('should call mockMethod on click', () => {
		const wrapper = shallow(<Button onClick={mockMethod} />);
		wrapper.simulate('click');
		expect(mockMethod).toHaveBeenCalled();
	})
});
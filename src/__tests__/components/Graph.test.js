import React from 'react';
import { shallow } from 'enzyme';
import { Graph } from '../../components/Graph';
import { mockGraphData} from '../../__mocks__/mocks';

describe('<Graph />', () => {
	it('Should render component correctly', () => {
		const wrapper = shallow(<Graph cryptoData={mockGraphData}/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('should render graph canvas with crypto data provided', () => {
		const wrapper = shallow(<Graph cryptoData={mockGraphData}/>);
		expect(wrapper.find('Line')).toHaveLength(1)
	});

	it('should NOT render graph canvas when no crypto data provided', () => {
		const wrapper = shallow(<Graph cryptoData={[]}/>);
		expect(wrapper.find('Line')).toHaveLength(0)
	});
});
import React from 'react';
import { shallow } from 'enzyme';
import { SelectionForm } from '../../components/SelectionForm';
import {mockCryptoList, mockIntlList, mockMethod} from '../../__mocks__/mocks';
import { CryptoSelectForm } from '../../components/CryptoSelectForm';
import { IntlSelectForm } from '../../components/IntlSelectForm';

describe('<SelectionForm />', () => {
	
	it('Snapshot: Should render correctly with CryptoSelectForm', () => {
		const wrapper = shallow(<SelectionForm formLabel={'Selection Text'} selectionFunc={mockMethod} selectForm={<CryptoSelectForm list={mockCryptoList}/>}/>)
		expect(wrapper).toMatchSnapshot();
	});

	it('Snapshot: Should render correctly with IntlSelectForm', () => {
		const wrapper = shallow(<SelectionForm formLabel={'Selection Text'} selectionFunc={mockMethod} selectForm={<IntlSelectForm list={mockIntlList}/>}/>)
		expect(wrapper).toMatchSnapshot();
	});

	it('should render label correctly', () => {
		const wrapper = shallow(<SelectionForm formLabel={'Selection Text'} selectionFunc={mockMethod} selectForm={<CryptoSelectForm list={mockCryptoList}/>}/>)
		const paragraphTag = wrapper.find('p');
		expect(paragraphTag.text()).toBe('Selection Text');
	});

	it('should render CryptoSelectForm correctly', () => {
		const wrapper = shallow(<SelectionForm formLabel={'Selection Text'} selectionFunc={mockMethod} selectForm={<CryptoSelectForm list={mockCryptoList}/>}/>)
		expect(wrapper.find('CryptoSelectForm')).toHaveLength(1);
	})
});

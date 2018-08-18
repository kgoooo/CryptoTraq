import CryptoAPICalls from '../../api/CryptoAPICalls';
import mockAxios from 'axios'
import { mockCryptoData, mockGraphDataDesktop, mockGraphDataMobile } from '../../__mocks__/mocks';

it("onAppLoad: should return the currencies lists when the nexchange api returns a valid response", async () => {

	mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockCryptoData));

	const expectedValue = { cryptoList: [{"code": "c1", "name": "crypto1"}, {"code": "c2", "name": "crypto2"}],
		intlList: [{"code": "fk1", "name": "fakemoney1"}, {"code": "fk2", "name": "fakemoney2"}] };

	const res = await CryptoAPICalls.onAppLoad();

	expect(res.cryptoList).toEqual(expectedValue.cryptoList);
	expect(res.intlList).toEqual(expectedValue.intlList);
});

it('exchangeSearch: should return exchange rate when nexchange api returns a valid response', async () => {
	mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: [{
		ticker: {
			ask: 1626
		}
		}]}));

	const expectedValue = 1626;

	const res = await CryptoAPICalls.exchangeSearch();

	expect(res.data[0].ticker.ask).toEqual(expectedValue)
});

it('graphPopulate: should return an array of data points when nexchange api returns a valid response, and the correct amount of points', async () => {
	mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockGraphDataDesktop));

	const expectedValue = mockGraphDataDesktop;

	const res = await CryptoAPICalls.graphPopulate();

	expect(res).toEqual(expectedValue);
	expect(res.data.length).toBe(49);
});

it('graphPopulateMobile: should return an array of data points when nexchange api returns a valid response', async () => {
	mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockGraphDataMobile))

	const expectedValue = mockGraphDataMobile;

	const res = await CryptoAPICalls.graphPopulateMobile24();
	expect(res).toEqual(expectedValue);
	expect(res.data.length).toBe(15);
});

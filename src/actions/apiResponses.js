export const setInitialData = (cryptoList, intlList, selectedCrypto, selectedIntl) => ({
	type: 'SET_INITIAL_DATA',
	cryptoList, 
	intlList, 
	selectedCrypto, 
	selectedIntl
})

export const setSelectedCrypto = (selectedCrypto) => ({
	type: "SET_SELECTED_CRYPTO",
	selectedCrypto
})

export const setSelectedIntl = (selectedIntl) => ({
	type: "SET_SELECTED_INTL",
	selectedIntl
})

export const setExchangeRate = (exchangeRate) => ({
	type: 'SET_EXCHANGE_RATE',
	exchangeRate
})

export const showExchangeRate = () => ({
	type: 'SHOW_EXCHANGE_RATE',
	showingExchangeRate: true
})
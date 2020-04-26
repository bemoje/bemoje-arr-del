import arrDel from '../src/arr-del'

describe('arrDel', () => {
	test('works', () => {
		const arr = ['a', 'b', 'c']
		arrDel(arr, 'd')
		expect(arr).toStrictEqual(['a', 'b', 'c'])
		arrDel(arr, 'c')
		expect(arr).toStrictEqual(['a', 'b'])
	})
})

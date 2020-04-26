import arrDel from '../src/arr-del'

describe('arrDel', () => {
	test('works', () => {
		const arr = ['a', 'b', 'c']
		expect(arrDel(arr, 'd')).toStrictEqual(['a', 'b', 'c'])
		expect(arrDel(arr, 'c')).toStrictEqual(['a', 'b'])
	})
})

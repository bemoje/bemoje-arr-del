import arrDel from '../src/arr-del'

const arr = ['a', 'b', 'c']

arrDel(arr, 'd')
//=> ['a', 'b', 'c']

arrDel(arr, 'b')
//=> ['a', 'c']

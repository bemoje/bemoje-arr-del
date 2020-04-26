import arrDel from '../src/arr-del'

const arr = ['a', 'b', 'c']

arrDel(arr, 'd')

console.log(arr)
//=> ['a', 'b', 'c']

arrDel(arr, 'b')

console.log(arr)
//=> ['a', 'c']

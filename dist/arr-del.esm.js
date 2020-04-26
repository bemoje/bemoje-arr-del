import assertArgs from '@bemoje/assert-args';
import assertType from '@bemoje/assert-type';

/**
 * Remove an element from an array if present.
 * @param {Array} arr - The array
 * @param {*} element - The element to remove
 * @return {void}
 */
function arrDel(arr, element) {
	assertArgs(arr, element);
	assertType(Array, arr);

	let i = arr.indexOf(element);

	if (i === -1) {
		return
	}

	arr.splice(i, 1);
}

export default arrDel;

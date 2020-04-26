(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-del'] = factory(global.assertArgs, global.assertType));
}(this, (function (assertArgs, assertType) { 'use strict';

	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * Remove an element in place from an array, if present.
	 * @param {Array} arr - The array
	 * @param {*} element - The element to remove
	 * @return {Array} The array after removal in space.
	 */
	function arrDel(arr, element) {
		assertArgs(arr, element);
		assertType(Array, arr);

		let i = arr.indexOf(element);

		if (i === -1) {
			return arr
		}

		arr.splice(i, 1);

		return arr
	}

	return arrDel;

})));

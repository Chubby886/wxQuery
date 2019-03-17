'use strict'
function fn() { }
var isDefined = typeof Object.getOwnPropertyNames === 'function'
var isBroken = (function isOwnPropertyNamesBroken(fn) {
	return !isDefined || ~Object.getOwnPropertyNames(fn).indexOf('callee')
})(fn)
var hasOwnProperty = Object.hasOwnProperty
var originalGetOwnPropertyNames = Object.getOwnPropertyNames

function getOwnPropertyNames(obj) {
	var result = originalGetOwnPropertyNames.call(this, obj)
	if (typeof obj !== 'function' || hasOwnProperty.call(obj, 'callee')) {
		return result
	}
	return result.filter(function filterCallee(name) {
		return name !== 'callee'
	})
}


if (isBroken) {
	Object.defineProperty(Object, 'getOwnPropertyNames', {
		value: getOwnPropertyNames,
		configurable: true,
		writable: true
	})
}

module.exports = getOwnPropertyNames;

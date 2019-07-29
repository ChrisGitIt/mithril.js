"use strict"

var PromisePolyfill = require("./polyfill")
var temp = window ? window : global
if (typeof temp !== "undefined") {
	if (typeof temp.Promise === "undefined") {
		temp.Promise = PromisePolyfill
	} else if (!temp.Promise.prototype.finally) {
		temp.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = temp.Promise
} else {
	module.exports = PromisePolyfill
}

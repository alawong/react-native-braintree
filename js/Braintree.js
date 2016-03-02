'use strict';

var RNBraintree = require('react-native').NativeModules.RNBraintree;

var Braintree = {

	setupWithURLScheme(token, urlscheme) {
		RNBraintree.setupWithURLScheme(token, urlscheme);
	},

	setup(token) {
		RNBraintree.setup(token);
	},

	showPaymentViewController(title,summaryTitle,summaryDescription,displayAmount,callToActionText,callback) {
		RNBraintree.showPaymentViewController(title, summaryTitle, summaryDescription, displayAmount, callToActionText, callback);
	},

	showPayPalViewController(callback) {
		RNBraintree.showPayPalViewController(callback);
	}

};

module.exports = Braintree;

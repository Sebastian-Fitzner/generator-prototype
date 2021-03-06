'use strict';

const config = require('./config');

module.exports = function questions(obj) {
	let object = obj || {};
	object.defaults = object.defaults !== false;

	return {
		type: 'list',
		name: 'taskRunner',
		message: 'Which task runner do you want to use?',
		choices: [
			{
				name: 'Grunt & NPM Scripts',
				value: config.gruntId,
				checked: object.defaults
			},
			{
				name: 'Webpack & NPM Scripts',
				value: config.webpackId,
				checked: object.defaults
			}
		],
		default: config.webpackId
	};
};
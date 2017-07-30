/*global describe, beforeEach, it*/
'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const fs = require('fs');

describe('JavaScript Frameworks', function () {
	const srcPath = 'src/';
	const helperPath = 'configs/_grunt/';

	describe('when Veams-Query is selected', function () {
		let answers = require('../test_helpers/prompt-answer-factory')({
			'gruntModules': [
				'grunt-browserify'
			],
			'jsLibs': [
				'veams-query'
			]
		});

		beforeEach(function (done) {
			helpers.run(path.join(__dirname, '../generators/app'))
				.inDir(path.join(__dirname, 'tmp'))
				.withOptions({
					'skip-install': true,
					'skip-welcome-message': true
				})
				.withPrompts(answers)
				.on('end', done);
		});

		it('adds the package to package.json', function () {
			assert.noFileContent('bower.json', /veams-query/);
			assert.fileContent('package.json', /veams-query/);
		});

		it('adds import state to app.js', function () {
			assert.fileContent(srcPath + 'shared/scripts/app.js', /veams-query/);
		});

		it('adds references in browserify task', function () {
			assert.fileContent(helperPath + 'browserify.js', /veams-query/);
		});
	});

	describe('when jQuery is selected', function () {
		const answers = require('../test_helpers/prompt-answer-factory')({
			'gruntModules': [
				'grunt-browserify'
			],
			'jsLibs': [
				'jquery'
			]
		});

		beforeEach(function (done) {
			helpers.run(path.join(__dirname, '../generators/app'))
				.inDir(path.join(__dirname, 'tmp'))
				.withOptions({
					'skip-install': true,
					'skip-welcome-message': true
				})
				.withPrompts(answers)
				.on('end', done);
		});

		it('adds the package to bower.json and package.json', function () {
			assert.fileContent('bower.json', /jquery/);
			assert.fileContent('package.json', /jquery/);
		});

		it('adds import state to app.js', function () {
			assert.fileContent(srcPath + 'shared/scripts/app.js', /jquery/);
		});
	});

	describe('when Veams-Query is selected', function () {
		const answers = require('../test_helpers/prompt-answer-factory')({
			'gruntModules': [
				'grunt-browserify'
			],
			'jsLibs': [
				'veams-query'
			]
		});

		beforeEach(function (done) {
			helpers.run(path.join(__dirname, '../generators/app'))
				.inDir(path.join(__dirname, 'tmp'))
				.withOptions({
					'skip-install': true,
					'skip-welcome-message': true
				})
				.withPrompts(answers)
				.on('end', done);
		});

		it('adds the package to bower.json and package.json', function () {
			assert.noFileContent('bower.json', /veams-query/);
			assert.fileContent('package.json', /veams-query/);
		});

		it('adds import state to app.js', function () {
			assert.fileContent(srcPath + 'shared/scripts/app.js', /veams-query/);
		});
	});

	describe('when Exoskeleton is selected', function () {
		const answers = require('../test_helpers/prompt-answer-factory')({
			'gruntModules': [
				'grunt-browserify'
			],
			'jsLibs': [
				'exoskeleton'
			]
		});

		beforeEach(function (done) {
			helpers.run(path.join(__dirname, '../generators/app'))
				.inDir(path.join(__dirname, 'tmp'))
				.withOptions({
					'skip-install': true,
					'skip-welcome-message': true
				})
				.withPrompts(answers)
				.on('end', done);
		});

		it('adds the package to bower.json and package.json', function () {
			assert.noFileContent('bower.json', /exoskeleton/);
			assert.fileContent('package.json', /exoskeleton/);
		});

		it('adds import state to app.js', function () {
			assert.fileContent(srcPath + 'shared/scripts/app.js', /exoskeleton/);
		});
	});
	describe('when Backbone is selected', function () {
		const answers = require('../test_helpers/prompt-answer-factory')({
			'gruntModules': [
				'grunt-browserify'
			],
			'jsLibs': [
				'backbone'
			]
		});

		beforeEach(function (done) {
			helpers.run(path.join(__dirname, '../generators/app'))
				.inDir(path.join(__dirname, 'tmp'))
				.withOptions({
					'skip-install': true,
					'skip-welcome-message': true
				})
				.withPrompts(answers)
				.on('end', done);
		});

		it('adds the package to bower.json and package.json', function () {
			assert.noFileContent('bower.json', /backbone/);
			assert.fileContent('package.json', /backbone/);
		});

		it('adds import state to app.js', function () {
			assert.fileContent(srcPath + 'shared/scripts/app.js', /backbone/);
		});
	});

});
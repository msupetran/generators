'use strict';

var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.log('Hello World!');
    },
    initializing: function () {
    },
    prompting: function () {
    },
    configuring: function () {
    },
    default: function () {
    },
    writing: function () {
    },
    conflicts: function () {
    },
    install: function () {
    },
    end: function () {
    },
});
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
    writing: {
        appStaticFiles: function () {
            this.log('Template path: ', this.templatePath());
            this.log('Destination path: ', this.destinationPath());
            var source = this.templatePath('_favicon.ico');
            var destination = this.destinationPath('src/favicon.ico');
            this.log('Source: ', source);
            this.log('Destination: ', destination);
            this.copy('_favicon.ico', 'src/favicon.ico');
        }
    },
    conflicts: function () {
    },
    install: function () {
    },
    end: function () {
    },
});
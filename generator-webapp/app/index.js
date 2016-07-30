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
            this.copy('_favicon.ico', 'src/favicon.ico');
            this.directory('styles', 'src/styles');
        },
        html: function() {
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('src/index.html'),
                {
                    appname: 'New Web App',
                    ngapp: 'newapp'
                }
            );
        }
    },
    conflicts: function () {
    },
    install: function () {
    },
    end: function () {
    },
});
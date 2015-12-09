/*
 * from https://github.com/component/ie/blob/master/index.js
 */
define(function (require, exports, module) {

    var encode = require('./encode');

    function setCookie(name, value, options) {
        options = options || {};
        var str = encode(name) + '=' + encode(value);

        if (null == value) options.maxage = -1;

        if (options.maxage) {
            options.expires = new Date(+new Date + options.maxage);
        }

        if (options.path) str += '; path=' + options.path;
        if (options.domain) str += '; domain=' + options.domain;
        if (options.expires) str += '; expires=' + options.expires.toUTCString();
        if (options.secure) str += '; secure';

        document.cookie = str;
    }

    module.exports = setCookie;

});
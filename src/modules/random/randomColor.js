/**
 * @file randomNumber
 * @author leiquan<leiquan@baidu.com>
 */

define(function (require, exports, module) {

    function randomColor() {

        var r = function () {
            return Math.floor(Math.random() * 256)
        };

        return "rgb(" + r() + "," + r() + "," + r() + ")";

    }

    module.exports = randomColor;

});
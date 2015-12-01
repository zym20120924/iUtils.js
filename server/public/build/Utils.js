(function (ns, factory) {if (typeof define === 'function' && define.amd) {define(factory);}else if (typeof module === 'object' && module.exports) {module.exports = factory();}else {window[ns] = factory();}})('Utils', function () {

var cookie = {}, CookieIsArray = {};
cookie = function (exports) {
  var Cookie = function () {
    this.setCookie = function (sName, value, iExpireDays) {
      var oDate = new Date();
      oDate.setDate(oDate.getDate() + iExpireDays);
      document.cookie = sName + '=' + value + ';expires=' + oDate;
    };
    this.getCookie = function (sName) {
      var arr = document.cookie.split('; ');
      for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');
        if (arr2[0] == sName) {
          return arr2[1];
        }
      }
      return '';
    };
    this.removeCookie = function (sName) {
      this.setCookie(sName, '', -1);
    };
  };
  exports = new Cookie();
  return exports;
}(cookie);
CookieIsArray = function (exports) {
  var Cookie = cookie;
  var CookieIsArray = function (name) {
    var s = Cookie.getCookie(name);
    console.log(s);
    alert(Array.isArray(s.split(',')));
  };
  exports = CookieIsArray;
  return exports;
}(CookieIsArray);

return {CookieIsArray:CookieIsArray}
});
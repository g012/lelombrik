// ==UserScript==
// @name         Block Triskel
// @namespace    https://lelombrik.net/
// @version      0.2
// @description  Cache les publications de Triskel
// @author       g012
// @match        https://lelombrik.net/*
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

(function ($, undefined) {
    waitForKeyElements('a[href="/u/63468"]', function (jNode) {
        jNode.parent().parent().remove()
    });
})(window.jQuery.noConflict(true));
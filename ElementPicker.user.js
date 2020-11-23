// ==UserScript==
// @name                ElementPicker
// @version             1
// @description         Allow users to 'export' an element and the children of the element
//                      a new page.
// @author              msadusky
// @include             *
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @grant               GM_openInTab
// ==/UserScript==

'use strict';

function test() {
    console.log('Testing...');
};

GM_registerMenuCommand('Start', test);
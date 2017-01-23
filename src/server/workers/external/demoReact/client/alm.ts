/**
 * This code is included in the client for react demos
 */
const root = document.getElementById('root');

window.onerror = function() {
    root.innerHTML = `
<div style='font-family: arial'>Unhandled error in the built app. Please check the browser console.</div>
    `.trim();
    console.error(arguments);
}

import * as React from 'react';
import * as ReactDOM from 'react-dom';

namespace alm {
    export function render(content: React.DOMElement<any>) {
        ReactDOM.render(content, root);
    }
}
(window as any).alm = alm;


import React from 'react';
import Provider from './Provider';
console.log('after import Provider');

export function composeRootApp(container) {
    return React.createElement(
        Provider,
        null,
        container,
    );
}

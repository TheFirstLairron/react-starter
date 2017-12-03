import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import styles from './index.css';

import App from './components/App';

function render(Component) {
    ReactDom.render((
        <AppContainer>
            <Component />
        </AppContainer>
    ), document.getElementById('root'));
}

render(App);

if (module.hot) {
    module.hot.accept('./components/App/App', () => {
        // Annoying workaround to make HMR actually function
        let app = require('./components/App/App').default;
        render(app)
    });
}
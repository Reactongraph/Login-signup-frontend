import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import ProjectRoutes from './routes/index';
import Store from './redux/store.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={Store}>
    <ProjectRoutes />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

serviceWorker.unregister();

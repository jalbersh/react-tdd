import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import './index.css';
import store from './utils/store'
import App from './App';
import AddPerson from './components/AddPerson'
import { history } from './utils/history';
import registerServiceWorker from './registerServiceWorker'

 ReactDOM.render(
        <Provider store={store}>
            <Router history={history} >
                <div>
                      <Route path="/" component={App}/>
                      <Route exact path="/addPerson" component={AddPerson}/>
                </div>
            </Router>
        </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
;

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import './index.css';
import store from './utils/store'
import App from './App';
import AddPerson from './components/AddPerson'
import EditPerson from './components/EditPerson'
import { history } from './utils/history';
//import registerServiceWorker from './registerServiceWorker'

 ReactDOM.render(
        <Provider store={store}>
            <Router history={history} >
                <div>
                      <Route path="/" component={App}/>
                      <Route exact path="/addPerson" component={AddPerson} />
                      <Route
                        path="/editPerson"
                        render={(props) => <EditPerson history={history} />} />
                </div>
            </Router>
        </Provider>,
  document.getElementById('root')
)
//                      <Route exact path="/editPerson" component={EditPerson} />


//              <Link to="/"><App history={history} /></Link>
//              <Link to="/addPerson"><AddPerson history={history} /></Link>
//              <Link to="/editPerson"><EditPerson history={history} /></Link>

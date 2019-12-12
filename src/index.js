import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import NeedInclude from './components/NeedInclude';
import NeedUpload from './components/NeedUpload';
import WrongExtension from './components/WrongExtension';
import WrongName from './components/WrongName';
import WrongPath from './components/WrongPath';

import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/need-include">Need Include</Link>
                </li>
                <li>
                    <Link to="/need-upload">Need Upload</Link>
                </li>
                <li>
                    <Link to="/wrong-name">Wrong Name</Link>
                </li>
                <li>
                    <Link to="/wrong-path">Wrong Path</Link>
                </li>
                <li>
                    <Link to="/wrong-extension">Wrong Extension</Link>
                </li>
            </ul>
            <Route exact path="/" component={App} />
            <Route path="/need-include" component={NeedInclude} />
            <Route path="/need-upload" component={NeedUpload} />
            <Route path="/wrong-name" component={WrongName} />
            <Route path="/wrong-path" component={WrongPath} />
            <Route path="/wrong-extension" component={WrongExtension} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

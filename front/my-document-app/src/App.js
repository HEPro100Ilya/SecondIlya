import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ShowDocs from './components/pages/ShowDocs';
import CreateDoc from './components/ui/CreateDoc';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/show-docs">Show Documents</Link>
                        </li>
                        <li>
                            <Link to="/create-doc">Create New Document</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/show-docs" component={ShowDocs} />
                    <Route path="/create-doc" component={CreateDoc} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

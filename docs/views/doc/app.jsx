
import React from 'react'
import { HashRouter } from 'react-router-dom'

import DocNav from './doc_nav';
import Routers from './routes';

import './app.scss';

const App = () => {
    return (
        <HashRouter>
            <div className="doc-app">
                <div className="doc-app-left"
                    id="doc-app-left"
                >
                    <DocNav />
                </div>
                <div className="doc-app-doc"
                    id="doc-app-doc"
                >
                    <Routers />
                </div>
            </div>
        </HashRouter>
    )
}
export default App

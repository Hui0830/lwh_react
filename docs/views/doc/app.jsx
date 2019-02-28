
import React from 'react'
import { HashRouter } from 'react-router-dom'

import DocNav from './doc_nav';
import Routers from './routes';

import './app.scss';

const App = () => {
    return (
        <HashRouter>
            <div className="doc-app">
                <div id="doc-app-left" className="doc-app-left">
                    <DocNav />
                </div>
                <div id="doc-app-doc" className="doc-app-doc">
                    <Routers />
                </div>
            </div>
        </HashRouter>
    )
}
export default App

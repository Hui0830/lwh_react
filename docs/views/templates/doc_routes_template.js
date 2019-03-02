import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'

import Loading from 'components/loading'
import navConfig from '../nav_config';


const Routers = () => (
    <Switch>
        {/**  REPLACE MARKDOWN */}
        <Route exact
            path="/"
            render={() => <Redirect to={navConfig.markdown[0].path} />}
        />
        <Route
            component={Loadable({
                loader: () => import('markdown/develop.md'),
                loading: Loading
            })}
            path="/markdown/develop"
        />
        <Route
            component={Loadable({
                loader: () => import('markdown/about.md'),
                loading: Loading
            })}
            path="/markdown/about"
        />
        <Route
            component={Loadable({
                loader: () => import('markdown/log.md'),
                loading: Loading
            })}
            path="/markdown/log"
        />
        {/**  REPLACE MARKDOWN */}
        /**  REPLACE PACKAGES */
    </Switch>
)
export default Routers
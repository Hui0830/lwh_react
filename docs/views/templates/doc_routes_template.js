import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'

import Loading from 'components/loading'
import navConfig from '../nav_config';


const Routers = () => (
    <Switch>
        {/**  REPLACE MARKDOWN */}
        <Route path='/' exact render={() => <Redirect to={navConfig.markdown[0].path} />} />
        <Route
            path= '/markdown/develop'
            component={Loadable({
                loader: () => import('markdown/develop.md'),
                loading: Loading
            })}
        />
        <Route
            path= '/markdown/about'
            component={Loadable({
                loader: () => import('markdown/about.md'),
                loading: Loading
            })}
        />
        <Route
            path= '/markdown/log'
            component={Loadable({
                loader: () => import('markdown/log.md'),
                loading: Loading
            })}
        />
        {/**  REPLACE MARKDOWN */}
        /**  REPLACE PACKAGES */
    </Switch>
)
export default Routers
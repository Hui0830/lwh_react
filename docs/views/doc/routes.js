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
        
            <Route
                path="/packages/Tabs"
                component={Loadable({
                    loader: () => import('packages/Tabs/demo/index'),
                    loading: Loading
                })}
            />
            <Route
                path="/packages/block"
                component={Loadable({
                    loader: () => import('packages/block/demo/index'),
                    loading: Loading
                })}
            />
            <Route
                path="/packages/button"
                component={Loadable({
                    loader: () => import('packages/button/demo/index'),
                    loading: Loading
                })}
            />
            <Route
                path="/packages/carouse"
                component={Loadable({
                    loader: () => import('packages/carouse/demo/index'),
                    loading: Loading
                })}
            />
            <Route
                path="/packages/icon"
                component={Loadable({
                    loader: () => import('packages/icon/demo/index'),
                    loading: Loading
                })}
            />
            <Route
                path="/packages/modal"
                component={Loadable({
                    loader: () => import('packages/modal/demo/index'),
                    loading: Loading
                })}
            />
            <Route
                path="/packages/spin"
                component={Loadable({
                    loader: () => import('packages/spin/demo/index'),
                    loading: Loading
                })}
            />
    </Switch>
)
export default Routers
import React from 'react';
import {
    NavLink
} from 'react-router-dom'

import navConfig from '../nav_config';
import './doc_nav.scss';

const Nav = () => {
    return (
        <ul className="doc-nav">
            <li>
                <h3 className="block-tit">开发指南</h3>
            </li>
            {
                navConfig.markdown.map((item) => {
                    return <li key={item.name}>
                            <NavLink 
                                to={item.path}
                            >
                                {item.name || '---'}
                            </NavLink>
                        </li>
                })
            }
            <li>
                <h3 className="block-title">组件说明</h3>
            </li>
            {
                navConfig.packages.map((item) => {
                    return <li key={item.name}>
                        <NavLink 
                            to={item.path}
                        >
                            {item.name || '---'}
                        </NavLink>
                    </li>
                })
            }
        </ul>
    )
}
export default Nav